import { cn } from "@/lib/utils";

export const NoBreak = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <span className={cn(className, "whitespace-nowrap")}>{children}</span>
);
