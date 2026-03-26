import { useArticles } from "../hooks/useArticles";

import { FilterPanel } from "../components/FilterPanel";
import { ListArticles } from "../components/ListArticles";

export const Articles = () => {
  const { articles, options, handleOptionsChange } = useArticles();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
            Article Directory
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the latest insights in technology, finance, sports, and health.
          </p>
        </header>

        <main>
          <FilterPanel options={options} onChange={handleOptionsChange} />
          
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">
              {articles.length} {articles.length === 1 ? 'Article' : 'Articles'} found
            </h2>
          </div>

          <ListArticles articles={articles} />
        </main>
      </div>
    </div>
  );
};