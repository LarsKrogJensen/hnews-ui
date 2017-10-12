/* tslint:disable */

/* Long type */
export type Long = any;

export interface QueryType {
  topStories?: Story[]; 
  newStories?: Story[]; 
  bestStories?: Story[]; 
  askStories?: Story[]; 
  showStories?: Story[]; 
  jobStories?: Story[]; 
  story?: Story; 
  search?: Story[]; 
}

export interface Story {
  id: string; 
  title?: string; 
  text?: string; 
  time?: Long; 
  url?: string; 
  score?: number; 
  descendants?: number; 
  comments?: Comment[]; 
  by?: User; 
}

export interface Comment {
  id: string; 
  text?: string; 
  time?: Long; 
  comments?: Comment[]; 
  by?: User; 
}

export interface User {
  id: string; 
  about?: string; 
}

export interface SubscriptionRoot {
  timeSub: Time; 
}

export interface Time {
  hour: number; 
  min: number; 
  sec: number; 
}
export interface TopStoriesQueryTypeArgs {
  first?: number; /* Show the first number of top stories */
}
export interface NewStoriesQueryTypeArgs {
  first?: number; /* Show the first number of new stories */
}
export interface BestStoriesQueryTypeArgs {
  first?: number; /* Show the first number of best stories */
}
export interface AskStoriesQueryTypeArgs {
  first?: number; /* Show the first number of ask stories */
}
export interface ShowStoriesQueryTypeArgs {
  first?: number; /* Show the first number of show stories */
}
export interface JobStoriesQueryTypeArgs {
  first?: number; /* Show the first number of job stories */
}
export interface StoryQueryTypeArgs {
  id: string; /* Story identifier */
}
export interface SearchQueryTypeArgs {
  query: string; /* Search query */
}
export interface CommentsStoryArgs {
  first?: number; /* Show the first number of best comments */
}
export interface CommentsCommentArgs {
  first?: number; /* Show the N first number of comments */
}
export namespace AskStories {
  export type Variables = {
    count: number;
  }

  export type Query = {
    askStories?: AskStories[]; 
  } 

  export type AskStories = StoryItem.Fragment
}
export namespace BestStories {
  export type Variables = {
    count: number;
  }

  export type Query = {
    bestStories?: BestStories[]; 
  } 

  export type BestStories = StoryItem.Fragment
}
export namespace FullStory {
  export type Variables = {
    id: string;
  }

  export type Query = {
    story?: Story; 
  } 

  export type Story = {
    id: string; 
    time?: Long; 
    title?: string; 
    descendants?: number; 
    score?: number; 
    by?: By; 
    url?: string; 
    comments?: Comments[]; 
  } 

  export type By = {
    id: string; 
  } 

  export type Comments = {
    id: string; 
    text?: string; 
    time?: Long; 
    by?: _By; 
    comments?: _Comments[]; 
  } 

  export type _By = {
    id: string; 
  } 

  export type _Comments = {
    id: string; 
    text?: string; 
    time?: Long; 
    by?: __By; 
    comments?: __Comments[]; 
  } 

  export type __By = {
    id: string; 
  } 

  export type __Comments = {
    id: string; 
    text?: string; 
    time?: Long; 
    by?: ___By; 
    comments?: ___Comments[]; 
  } 

  export type ___By = {
    id: string; 
  } 

  export type ___Comments = {
    id: string; 
    text?: string; 
    time?: Long; 
    by?: ____By; 
  } 

  export type ____By = {
    id: string; 
  } 
}
export namespace JobStories {
  export type Variables = {
    count: number;
  }

  export type Query = {
    jobStories?: JobStories[]; 
  } 

  export type JobStories = StoryItem.Fragment
}
export namespace NewStories {
  export type Variables = {
    count: number;
  }

  export type Query = {
    newStories?: NewStories[]; 
  } 

  export type NewStories = StoryItem.Fragment
}
export namespace Search {
  export type Variables = {
    query: string;
  }

  export type Query = {
    search?: Search[]; 
  } 

  export type Search = StoryItem.Fragment
}
export namespace ShowStories {
  export type Variables = {
    count: number;
  }

  export type Query = {
    showStories?: ShowStories[]; 
  } 

  export type ShowStories = StoryItem.Fragment
}
export namespace Time {
  export type Variables = {
  }

  export type Subscription = {
    time: Time; 
  } 

  export type Time = {
    hour: number; 
    min: number; 
    sec: number; 
  } 
}
export namespace TopStories {
  export type Variables = {
    count: number;
  }

  export type Query = {
    topStories?: TopStories[]; 
  } 

  export type TopStories = StoryItem.Fragment
}

export namespace StoryItem {
  export type Fragment = {
    id: string; 
    time?: Long; 
    title?: string; 
    descendants?: number; 
    score?: number; 
    by?: By; 
    url?: string; 
  } 

  export type By = {
    id: string; 
  } 
}
