/* tslint:disable */

export interface QueryType {
  topStories: Array<Story> | null;
  story: Story | null;
}

export interface TopStoriesQueryTypeArgs {
  first: number | null;
}

export interface StoryQueryTypeArgs {
  id: string;
}

export interface Story {
  id: string;
  title: string | null;
  text: string | null;
  time: Long | null;
  url: string | null;
  score: number | null;
  descendants: number | null;
  comments: Array<Comment> | null;
  by: User;
}

export type Long = any;

export interface Comment {
  id: string;
  text: string | null;
  time: Long | null;
  comments: Array<Comment> | null;
}

export interface User {
  id: string;
  about: string | null;
}
