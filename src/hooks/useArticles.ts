import { useState, useMemo, useCallback } from "react";

import { articleList } from "../constants/articles";
import { filterArticles } from "../utils/filterArticles";
import { useDebounce } from "./useDebounce";

import type { Article, ArticlesParams } from "../types/article";
import type { Topic } from "../types/topic";

export interface UseArticles {
  articles: Article[];
  topics: Topic[];
}

const DEBOUNCE_DELAY = 500;

export const useArticles = () => {
    const [options, setOptions] = useState<ArticlesParams>({ 
        search: "", 
        topic: "all", 
        sortBy: "date-desc"
    });
    
    const debouncedSearch = useDebounce(options.search, DEBOUNCE_DELAY);

    const articles = useMemo(() => {
        return filterArticles(articleList, { 
            ...options, 
            search: debouncedSearch 
        });
    }, [debouncedSearch, options.topic, options.sortBy]);

    const handleOptionsChange = useCallback(<K extends keyof ArticlesParams>(key: K, value: ArticlesParams[K]) => {
        setOptions(prev => ({ ...prev, [key]: value }));
    }, []);
    
    return { articles, options, handleOptionsChange };
};
