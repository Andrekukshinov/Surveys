import {
  Component, OnInit, ViewEncapsulation, ComponentFactoryResolver, ViewChild, ComponentRef, ViewContainerRef,
  Input, ViewChildren, QueryList, OnDestroy
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NewQuestionComponent} from './new-question/new-question.component';
import {Questions, TopicsForUsers, TopicsForUsersService} from '../topics-for-users.service';
import {Subscription} from 'rxjs';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit, OnDestroy {
  surveyInfoGroup = new FormGroup({
    questions: new FormArray([
      new FormGroup({
        question: new FormControl(''),
        answers: new FormArray([
          new FormGroup({
            answer: new FormControl('')
          }),
          new FormGroup({
            answer: new FormControl('')
          })
        ])
      })
    ])
  });
  private questionTopicsShow = false;
  private isShown = false;
  private subscriptions = new Subscription();
  index = 0;
  questionsFromTheTopic: Questions[] = [];
  activeTopic: TopicsForUsers;
  topics: TopicsForUsers[];
  visible = false;
  @Input() props: Object = {};
  constructor(private modalService: NgbModal, private componentFactoryResolver: ComponentFactoryResolver,
              private topicsForUsersService: TopicsForUsersService) { }
  ngOnInit() {
    this.subscriptions.add(this.topicsForUsersService.getActiveTopic().subscribe(activeTopic => {
      this.activeTopic = activeTopic;
    }));
    this.subscriptions.add(this.topicsForUsersService.getActiveQuestion().subscribe(
      question => this.questionsFromTheTopic.push(question)
    ));
  }
  show(): void {
    this.visible = true;
  }
  addAnswer(index: number) {
    // @ts-ignore
    const questContainer: FormArray = (this.surveyInfoGroup.controls.questions.controls[index] as FormArray);
    // @ts-ignore
    const answerContainer: FormArray = (questContainer.controls.answers as FormArray);
    answerContainer.push(new FormGroup({
      answer: new FormControl('')
    }));
  }
  addQuestion() {
    (this.surveyInfoGroup.controls.questions as FormArray).push(new FormGroup({
      question: new FormControl(''),
      answers: new FormArray([
        new FormGroup({
          answer: new FormControl('')
        }),
        new FormGroup({
          answer: new FormControl('')
        })
      ])
    }));
  }
  deleteThisAnswer(questionIndex, answerIndex: number): void {
    // @ts-ignore
    if (this.surveyInfoGroup.controls.questions.controls[questionIndex].controls.answers.controls.length >= 2) {
      // @ts-ignore
      const questContainer: FormArray = (this.surveyInfoGroup.controls.questions.controls[questionIndex] as FormArray);
      // @ts-ignore
      questContainer.controls.answers.controls.splice(answerIndex, 1);
    }
  }
  deleteThisQuestion(id: number): void {
    // @ts-ignore
    if (this.surveyInfoGroup.controls.questions.controls.length > 1) {
      (this.surveyInfoGroup.controls.questions as FormArray).removeAt(id);
    }
  }
  changeVisibility(): boolean {
    return this.isShown = !this.isShown;
  }
  showQuestionTopics(): boolean {
    return this.questionTopicsShow = !this.questionTopicsShow;
  }
  getTopics(): void {
    this.topics = this.topicsForUsersService.getTopics();
  }
  onSetActiveTopic(topicId: string): void {
    this.topicsForUsersService.setActvieTopicByTopicId(topicId);
  }
  deleteQuestionById(questionId: number) {
    this.questionsFromTheTopic.splice(questionId, 1);
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
