import { memo } from "react";

import type { Article } from "../../types/article";

import { ArticleCard } from "./ArticleCard";

interface ListArticlesProps {
  articles: Article[];
}

export const ListArticles = memo(({ articles }: ListArticlesProps) => {
  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-500">
        <p className="text-xl font-medium">No articles found</p>
        <p className="text-sm">Try adjusting your filters or search query.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
});
