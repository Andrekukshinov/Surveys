import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TopicsForUsersService} from '../../services/topics-for-users.service';
import {Subscription} from 'rxjs';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Questions} from '../../models/questions';
import {TopicsForUsers} from '../../models/topics';
import {ServiceForFapiService} from '../../services/service-for-fapi.service';

@Component({
  selector: 'app-admin-block',
  templateUrl: './admin-block.component.html',
  styleUrls: ['./admin-block.component.css']
})
export class AdminBlockComponent implements OnInit, OnDestroy {
  static idQuest: number = 0;
  static idTopic: number = 0;
  private isTrue = false;
  private topicFromList = true;
  private createATopic = false;
  private constructedTopic: TopicsForUsers;
  private newTopic: TopicsForUsers;
  topicNameForBE: string;
  questionsPassedFromTemplate: Questions[] = [];
  coverForTopicValidator: FormGroup = new FormGroup({
    topicValidator: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
  surveyInfoGroup: FormGroup = new FormGroup({
    questions: new FormArray([
      new FormGroup({
        question: new FormControl('', [Validators.required, Validators.minLength(4)]),
        answers: new FormArray([
          new FormGroup({
            answer: new FormControl('', [Validators.required, Validators.minLength(4)])
          }),
          new FormGroup({
            answer: new FormControl('', [Validators.required, Validators.minLength(4)])
          })
        ])
      })
    ])
  });
  private subscription: Subscription = new Subscription();
  // @Input()
  // adminTop ics
  public topics: TopicsForUsers[];
  public activeTopic: TopicsForUsers;

  constructor(private modalService: NgbModal, private topicsForUsersService: TopicsForUsersService,
              private serviceForFapi: ServiceForFapiService) {
  }

  ngOnInit() {
    this.subscription.add(this.topicsForUsersService.getTopics().subscribe(topics => {
        this.topics = topics;
        console.log(this.topics);
        AdminBlockComponent.idTopic = this.topics.length;
      }
    ));
    this.subscription.add(this.topicsForUsersService.getActiveTopic().subscribe(activeTopic => {
      this.activeTopic = activeTopic;
      AdminBlockComponent.idQuest = this.activeTopic.questions.length;
    }));
  }

  makeTheTopicPrivate() {
    this.isTrue = !this.isTrue;
  }

  public changeOption() {
    this.topicFromList = !this.topicFromList;
    this.createATopic = !this.createATopic;
  }

  openXl(userSurveys) {
    this.modalService.open(userSurveys, {size: 'xl'});
  }

  openWindowCustomClass(adminTopics) {
    this.modalService.open(adminTopics, {windowClass: 'dark-modal'});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSetActiveTopic(topicId: string): void {
    this.topicsForUsersService.setActiveTopicByTopicId(topicId);
  }

  addAnswer(index: number) {
    // @ts-ignore
    const questContainer: FormArray = (this.surveyInfoGroup.controls.questions.controls[index] as FormArray);
    // @ts-ignore
    const answerContainer: FormArray = (questContainer.controls.answers as FormArray);
    answerContainer.push(new FormGroup({
      answer: new FormControl('', [Validators.required, Validators.minLength(4)])
    }));
  }

  addQuestion() {
    (this.surveyInfoGroup.controls.questions as FormArray).push(new FormGroup({
      question: new FormControl('qwsedf', [Validators.required, Validators.minLength(4)]),
      answers: new FormArray([
        new FormGroup({
          answer: new FormControl('', [Validators.required, Validators.minLength(4)])
        }),
        new FormGroup({
          answer: new FormControl('', [Validators.required, Validators.minLength(4)])
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

  createTopic(): void {
    const topicName: string = this.coverForTopicValidator.get('topicValidator').value;
    const localQuestStorage: Questions[] = [];
    for (const question of (this.surveyInfoGroup.get('questions') as FormArray).controls) {
      const localAnswersStorage: string[] = [];
      for (let answRun = 0; answRun < (question.get('answers') as FormArray).controls.length; ++answRun) {
        localAnswersStorage.push(question.get('answers').value[answRun].answer);
      }
      this.questionsPassedFromTemplate.push(new Questions(++AdminBlockComponent.idQuest,
        question.get('question').value, localAnswersStorage));
    }
    for (let runner = 0; runner < this.questionsPassedFromTemplate.length; ++runner) {
      localQuestStorage.push(this.questionsPassedFromTemplate[runner]);
    }
    this.newTopic = new TopicsForUsers();
    this.newTopic.name = topicName;
    this.newTopic.questions = localQuestStorage;
    this.newTopic.topicId = ('' + (++AdminBlockComponent.idTopic));
    this.newTopic.isPublic = this.isTrue;
    this.topicsForUsersService.createTopic(this.newTopic);
    this.questionsPassedFromTemplate = [];
    console.log(this.newTopic);
  }

  updateTopic(): void {
    const localQuestStorage: Questions[] = this.activeTopic.questions;
    for (const question of (this.surveyInfoGroup.get('questions') as FormArray).controls) {
      const localAnswersStorage: string[] = [];
      for (let answRun = 0; answRun < (question.get('answers') as FormArray).controls.length; ++answRun) {
        localAnswersStorage.push(question.get('answers').value[answRun].answer);
      }
      this.questionsPassedFromTemplate.push(new Questions(++AdminBlockComponent.idQuest,
        question.get('question').value, localAnswersStorage));
    }
    for (let runner = 0; runner < this.questionsPassedFromTemplate.length; ++runner) {
      localQuestStorage.push(this.questionsPassedFromTemplate[runner]);
    }
    this.topicNameForBE = this.activeTopic.name;
    this.constructedTopic = this.activeTopic;
    this.constructedTopic.questions = localQuestStorage;
    this.serviceForFapi.updateTopic(this.constructedTopic);
    this.questionsPassedFromTemplate = [];
  }
}
