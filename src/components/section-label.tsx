import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  title: string;
  className?: string;
};

export function SectionLabel({ index, title, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="text-cobalt font-mono text-xs tracking-[0.25em]">
        {index}
      </span>
      <span className="text-ink font-mono text-xs tracking-[0.25em] uppercase">
        {title}
      </span>
      <span aria-hidden className="bg-line h-px flex-1" />
    </div>
  );
}
