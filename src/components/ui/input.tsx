import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-sm bg-surface-2 px-3 text-sm text-fg shadow-border outline-none transition-[box-shadow,background-color] duration-150 placeholder:text-subtle focus-visible:shadow-border-hover disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
