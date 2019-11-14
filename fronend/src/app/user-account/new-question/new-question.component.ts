import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


export interface RemovalInterface {
  remove(index: number);
}

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  questionControl: FormGroup = new FormGroup({
    question: new FormControl('',
      [Validators.required, Validators.minLength(1)])
  });
  showFirstOption = true;
  propertyForRemoval: RemovalInterface;
  constructor() { }
  answersFormForCheckboxes: FormGroup = new FormGroup({
    answerForCheckbox1: new FormControl('',
      [Validators.required, Validators.minLength(1)]),
    answerForCheckbox2: new FormControl('',
      [Validators.required, Validators.minLength(1)]),
    answerForCheckbox3: new FormControl('',
      [Validators.required, Validators.minLength(1)]),
  });
  singleAnswers: FormGroup = new FormGroup({
    answer: new FormControl('',
      [Validators.required, Validators.minLength(1)])
  });
  public index: number;
  ngOnInit() {
  }
  removeMe(index) {
    this.propertyForRemoval.remove(index);
  }
  destroySecondOption() {
    this.showFirstOption = !this.showFirstOption;
  }
}
