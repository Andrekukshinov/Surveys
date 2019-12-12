import {Questions} from './questions';

export class TopicsForUsers {
  name: string;
  // todo Check nullable topicId
  topicId: string;
  questions: Questions[] = [];
  isPublic: boolean;
}
