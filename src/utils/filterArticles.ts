import type { Article, ArticlesParams } from "../types/article";

export const filterArticles = (articleList: Article[], params: ArticlesParams) => {
    const { topic, search, sortBy } = params;

    const query = search.trim().toLowerCase();
    const isAllTopics = topic === "all";

    return articleList
        .filter((a) => {
            const matchesTopic = isAllTopics || a.topic === topic;
            const matchesSearch = !query || a.title.toLowerCase().includes(query);

            return matchesTopic && matchesSearch;
        })
        .sort((a, b) => {
            if (sortBy === "date-desc") {
                return b.publishedAt.localeCompare(a.publishedAt);
            }

            return a.title.localeCompare(b.title);
        });
};