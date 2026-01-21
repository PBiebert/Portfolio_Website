import { StackItem } from './stack-item.interface';

export interface Project {
  title: string;
  pevImg: string;
  description: string;
  implementationDetails: string;
  programmingLanguages: StackItem[];
  duration: string;
  githubLink: string;
  testLink: string;
}
