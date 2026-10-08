import { cn } from "@/lib/utils";

function Badge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-micro font-medium tracking-wide text-muted shadow-border",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
