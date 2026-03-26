import { TOPICS } from "./topics";
import type { Topic } from "../types/topic";
import type { SortOption } from "../types/article";

export const TOPIC_OPTIONS: { value: Topic | "all"; label: string }[] = [
  { value: "all", label: "All Topics" },
  ...TOPICS.map((topic) => ({
    value: topic,
    label: topic.charAt(0).toUpperCase() + topic.slice(1),
  })),
];

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "date-desc", label: "Newest First" },
  { value: "title-asc", label: "Title (A-Z)" },
];