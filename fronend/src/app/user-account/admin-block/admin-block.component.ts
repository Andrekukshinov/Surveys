import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TopicsForUsers, TopicsForUsersService} from '../../topics-for-users.service';
import {Subscription} from 'rxjs';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-block',
  templateUrl: './admin-block.component.html',
  styleUrls: ['./admin-block.component.css']
})
export class AdminBlockComponent implements OnInit, OnDestroy {
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

  private subscription: Subscription;
  // @Input()
  // adminTop ics
  public topics: TopicsForUsers[];
  public activeTopic: TopicsForUsers;
  constructor(private modalService: NgbModal, private topicsForUsersService: TopicsForUsersService ) { }

  ngOnInit() {
    this.topics = this.topicsForUsersService.getTopics();
    this.subscription.add(this.topicsForUsersService.getActiveTopic().subscribe(activeTopic => {
      this.activeTopic = activeTopic;
    }));
  }
  openXl(userSurveys) { this.modalService.open(userSurveys, {size: 'xl'}); }
  openWindowCustomClass(adminTopics) {
    this.modalService.open(adminTopics, { windowClass: 'dark-modal' });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSetActiveTopic(topicId: string): void {
    this.topicsForUsersService.setActvieTopicByTopicId(topicId);
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
  deleteThisQuestion(id: number) {
    // @ts-ignore
    if (this.surveyInfoGroup.controls.questions.controls.length > 1) {
      (this.surveyInfoGroup.controls.questions as FormArray).removeAt(id);
    }
  }
}
