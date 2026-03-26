import type { Topic } from "./topic";

export type SortOption = "date-desc" | "title-asc";

export interface Article {
  id: string;
  title: string;
  topic: Topic;
  publishedAt: string;
}

export interface ArticlesParams {
  sortBy: SortOption;
  topic: Topic;
  search: string;
}
