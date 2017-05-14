/* tslint:disable */

export interface QueryType {
  topStories: Array<Story> | null;
  newStories: Array<Story> | null;
  bestStories: Array<Story> | null;
  askStories: Array<Story> | null;
  showStories: Array<Story> | null;
  jobStories: Array<Story> | null;
  story: Story | null;
  search: Array<Story> | null;
}

export interface TopStoriesQueryTypeArgs {
  first: number | null;
}

export interface NewStoriesQueryTypeArgs {
  first: number | null;
}

export interface BestStoriesQueryTypeArgs {
  first: number | null;
}

export interface AskStoriesQueryTypeArgs {
  first: number | null;
}

export interface ShowStoriesQueryTypeArgs {
  first: number | null;
}

export interface JobStoriesQueryTypeArgs {
  first: number | null;
}

export interface StoryQueryTypeArgs {
  id: string;
}

export interface SearchQueryTypeArgs {
  query: string;
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
  by: User | null;
}

export interface User {
  id: string;
  about: string | null;
}
