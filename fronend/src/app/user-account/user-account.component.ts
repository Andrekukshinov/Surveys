import {
  Component, OnInit, ViewEncapsulation, ComponentFactoryResolver, ViewChild, ComponentRef, ViewContainerRef,
  Input, ViewChildren, QueryList, OnDestroy
} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TopicsForUsersService} from '../services/topics-for-users.service';
import {Subscription} from 'rxjs';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Questions} from "../models/questions";
import {TopicsForUsers} from "../models/topics";
import {Surveys} from "../models/surveys";


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit, OnDestroy {
  private questionContainerForAdminQuests: string;
  private answersContainerForAdminAnswers: string[] = [];
  private questionTopicsShow = false;
  private isShown = false;
  private subscriptions = new Subscription();
  private activeQuestion: Questions;
  private questionsCounter: number;
  index: number;
  questionsFromTheTopic: Questions[] = [];
  questionsFromTheTopicModified: Questions[] = [];
  activeTopic: TopicsForUsers;
  topics: TopicsForUsers[];
  visible = false;
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
  questionFromTheTopicGroup = new FormGroup({
    questions: new FormArray([])
  });

  constructor(private modalService: NgbModal, private componentFactoryResolver: ComponentFactoryResolver,
              private topicsForUsersService: TopicsForUsersService) {
  }

  ngOnInit() {
    this.questionsCounter = 0;
    this.subscriptions.add(this.topicsForUsersService.getActiveTopic().subscribe(activeTopic => {
      this.activeTopic = activeTopic;
    }));
    this.subscriptions.add(this.topicsForUsersService.getActiveQuestionCallInComponents().subscribe(
      question => {
        this.questionsFromTheTopic.push(question);
        this.activeQuestion = question;
        this.fillTheQuestionGroup();
      }
    ));
    this.subscriptions.add(this.topicsForUsersService.getTopics().subscribe((topics) => {
        console.log(this.topicsForUsersService.transferRequiredTopics());
        this.topics = topics;
      }
    ));
    console.log(this.topics);
  }
  private fillTheQuestionGroup(): void {
    this.questionContainerForAdminQuests = this.activeQuestion.questionField;
    this.activeQuestion.answers.forEach(answer => this.answersContainerForAdminAnswers.push(answer));
    (this.questionFromTheTopicGroup.controls.questions as FormArray).push(new FormGroup({
      question: new FormControl(this.activeQuestion.questionField, [Validators.required]),
      answers: new FormArray([])
    }));
    for (let answersRunner = 0; answersRunner < this.activeQuestion.answers.length; ++answersRunner) {
      ((this.questionFromTheTopicGroup.controls.questions as FormArray).get([this.questionsCounter])
        .get('answers') as FormArray).controls.push(
        new FormGroup({
          answer: new FormControl(this.activeQuestion.answers[answersRunner], [Validators.required])
        }));
    }
    ++this.questionsCounter;
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

  onSetActiveTopic(topicId: string): void {
    console.log(topicId);
    this.topicsForUsersService.setActiveTopicByTopicId(topicId);
    console.log(this.activeTopic);
  }

  deleteQuestionById(questionId: number) {
    this.questionsFromTheTopic.splice(questionId, 1);
    (this.questionFromTheTopicGroup.controls.questions as FormArray).removeAt(questionId);
    --this.questionsCounter;
    this.questionsFromTheTopicModified.splice(questionId, 1);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private getInfoFromFormWithQuestsFromTheTopic() {
    let runner = 0;
    for (let questRunner = 0; questRunner <
    (this.questionFromTheTopicGroup.get('questions') as FormArray).controls.length; ++questRunner) {
      const localAnswersArray: string[] = [];
      for (let i = 0; i < ((this.questionFromTheTopicGroup.get('questions') as FormArray).controls[questRunner]
        .get('answers') as FormArray).controls.length; i++) {
        localAnswersArray.push((
          (this.questionFromTheTopicGroup.get('questions') as FormArray).controls[questRunner].get('answers') as FormArray)
          .controls[i].get('answer').value);
      }
      this.questionsFromTheTopicModified.push(new Questions(runner,
        (this.questionFromTheTopicGroup.get('questions') as FormArray).controls[questRunner].get('question').value,
        localAnswersArray));
      runner++;
    }
  }
  private createSurvey(questions: Questions[], id: number,
                       author: string, title: string,
                       creationDate: number, availabilityTime: number,
                       description: string): void {
    const survey = new Surveys();
    survey.questions = questions;
    survey.id = id;
    survey.author = author;
    survey.surveyTitle = title;
    survey.creationTime = creationDate;
    survey.availabilityTime = availabilityTime;
    survey.description = description;
    this.topicsForUsersService.sendSurveyToFapiService(survey);
  }

  private getInfoFromUsersOwnQuests() {
    let runnerForOwnQuests = 0;
    for (let questRunner = 0; questRunner <
    (this.surveyInfoGroup.get('questions') as FormArray).controls.length; ++questRunner) {
      const localAnswersArray: string[] = [];
      for (let i = 0; i < ((this.surveyInfoGroup.get('questions') as FormArray).controls[questRunner]
        .get('answers') as FormArray).controls.length; i++) {
        localAnswersArray.push((
          (this.surveyInfoGroup.get('questions') as FormArray).controls[questRunner].get('answers') as FormArray)
          .controls[i].get('answer').value);
      }
      this.questionsFromTheTopicModified.push(new Questions(runnerForOwnQuests,
        (this.surveyInfoGroup.get('questions') as FormArray).controls[questRunner].get('question').value,
        localAnswersArray));
      runnerForOwnQuests++;
    }
  }

  public getFullInfoFromTheGroup() {
    this.getInfoFromUsersOwnQuests();
    this.getInfoFromFormWithQuestsFromTheTopic();
    console.log(this.questionsFromTheTopicModified);
    // this.topicsForUsersService
  }
}
