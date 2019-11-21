import {Questions} from './questions';

export class TopicsForUsers {
  name: string;
  topicId: string;
  questions: Questions[] = [];
  isPublic: boolean;
}
