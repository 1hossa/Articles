import { memo } from "react";

import { formatDate } from "../../utils/formatDate";

import type { Article } from "../../types/article";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = memo(({ article }: ArticleCardProps) => {
  return (
    <article className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      <header className="p-6 pb-2 flex flex-row items-center justify-between">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-indigo-50 text-indigo-700">
          {article.topic}
        </span>
        <time className="text-xs text-slate-500">
          {formatDate(article.publishedAt)}
        </time>
      </header>
      <div className="p-6 pt-0 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
          {article.title}
        </h3>
      </div>
    </article>
  );
});
