export class Questions {
  constructor(id: number, questionFeild: string, answers: string[]) {
    this.answers = answers;
    this.questionField = questionFeild;
    this.id = id;
  }

  id: number;
  questionField: string;
  answers: string[];
}
