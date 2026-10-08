import { useEffect, useRef } from "react";
import { Dices, Search, Shuffle } from "lucide-react";
import { useTable } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function AppHeader() {
  const query = useTable((s) => s.query);
  const setQuery = useTable((s) => s.setQuery);
  const view = useTable((s) => s.view);
  const setView = useTable((s) => s.setView);
  const surprise = useTable((s) => s.surprise);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "/" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setView("table");
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setView]);

  return (
    <header className="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-center sm:gap-4 sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="font-display text-xl leading-none tracking-tight text-fg">Elementa</div>
          <div className="mt-1 hidden text-xs text-muted sm:block">The living periodic table</div>
        </div>
        <div className="flex items-center gap-1 sm:hidden">
          <Button
            variant={view === "quiz" ? "secondary" : "ghost"}
            size="icon-sm"
            aria-label="Quiz"
            onClick={() => setView(view === "quiz" ? "table" : "quiz")}
          >
            <Dices />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Random element" onClick={surprise}>
            <Shuffle />
          </Button>
        </div>
      </div>

      {view === "table" ? (
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search elements</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, symbol, or number"
            className="h-10 pl-9"
            autoComplete="off"
            spellCheck={false}
          />
        </label>
      ) : (
        <div className="min-w-0 flex-1 text-sm text-muted">Ten questions. Name, symbol, number, family.</div>
      )}

      <nav className="hidden items-center gap-1 sm:flex">
        <Button
          variant={view === "table" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setView("table")}
          className={cn(view === "table" && "text-fg")}
        >
          Table
        </Button>
        <Button
          variant={view === "quiz" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setView("quiz")}
        >
          Quiz
        </Button>
        <Button variant="ghost" size="sm" onClick={surprise}>
          <Shuffle />
          Random
        </Button>
      </nav>
    </header>
  );
}
