import { memo } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  id?: string;
  className?: string;
}

export const Input = memo(({ value, onChange, label, placeholder, id, className }: SearchInputProps) => {
  return (
    <div className="flex-1">
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 ml-0.5"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${className}`}
        />
      </div>
    </div>
  );
});
