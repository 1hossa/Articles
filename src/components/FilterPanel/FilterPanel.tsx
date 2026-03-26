import { memo } from "react";

import { TOPIC_OPTIONS, SORT_OPTIONS } from "../../constants/selectOptions";
import type { ArticlesParams } from "../../types/article";

import { Select } from "./Select";
import { Input } from "./Input";

interface FilterPanelProps {
  options: ArticlesParams;
  onChange: <K extends keyof ArticlesParams>(key: K, value: ArticlesParams[K]) => void;
}

export const FilterPanel = memo(({ options, onChange }: FilterPanelProps) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8 space-y-4 md:space-y-0 md:flex md:items-end md:gap-4">
      <Input
        id="search"
        label="Search articles"
        placeholder="Search by title..."
        value={options.search}
        onChange={(value) => onChange("search", value)}
      />

      <Select
        id="topic"
        label="Topic"
        value={options.topic}
        onChange={(value) => onChange("topic", value)}
        options={TOPIC_OPTIONS}
      />

      <Select
        id="sortBy"
        label="Sort by"
        value={options.sortBy}
        onChange={(value) => onChange("sortBy", value)}
        options={SORT_OPTIONS}
      />
    </div>
  );
});
