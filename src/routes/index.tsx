import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/app-header";
import { Inspector } from "@/components/inspector";
import { PeriodicTable } from "@/components/periodic-table";
import { QuizView } from "@/components/quiz-view";
import { TooltipProvider } from "@/components/ui/tooltip";
import { neighbors } from "@/lib/elements";
import { useTable } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const view = useTable((s) => s.view);
  const selectedZ = useTable((s) => s.selectedZ);
  const setSelectedZ = useTable((s) => s.setSelectedZ);
  const setQuery = useTable((s) => s.setQuery);
  const sheetOpen = useTable((s) => s.sheetOpen);
  const setSheetOpen = useTable((s) => s.setSheetOpen);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        if (e.key === "Escape") {
          (e.target as HTMLInputElement).blur();
          setQuery("");
        }
        return;
      }
      if (e.key === "Escape") {
        setSheetOpen(false);
        return;
      }
      if (view !== "table" || selectedZ == null) return;
      const n = neighbors(selectedZ);
      if (e.key === "ArrowLeft" && n.left) {
        e.preventDefault();
        setSelectedZ(n.left);
      } else if (e.key === "ArrowRight" && n.right) {
        e.preventDefault();
        setSelectedZ(n.right);
      } else if (e.key === "ArrowUp" && n.up) {
        e.preventDefault();
        setSelectedZ(n.up);
      } else if (e.key === "ArrowDown" && n.down) {
        e.preventDefault();
        setSelectedZ(n.down);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedZ, setSelectedZ, setQuery, setSheetOpen, view]);

  return (
    <TooltipProvider delayDuration={250}>
      <div className="flex min-h-dvh flex-col bg-bg text-fg">
        <AppHeader />
        {view === "quiz" ? (
          <QuizView />
        ) : (
          <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
            <main className="flex min-h-0 min-w-0 flex-1 flex-col p-3 sm:p-4 lg:p-5">
              <PeriodicTable />
            </main>
            <div className="hidden w-96 shrink-0 border-l border-border lg:block">
              <Inspector />
            </div>
          </div>
        )}

        {view === "table" && sheetOpen && selectedZ != null ? (
          <div className="lg:hidden">
            <button
              type="button"
              className="fixed inset-0 z-40 bg-bg/70"
              aria-label="Dismiss inspector"
              onClick={() => setSheetOpen(false)}
            />
            <div className="inspector-sheet fixed inset-x-0 bottom-0 z-50 overflow-hidden rounded-t-xl bg-surface shadow-border">
              <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-border-strong" />
              <div className="inspector-sheet overflow-y-auto">
                <Inspector onClose={() => setSheetOpen(false)} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </TooltipProvider>
  );
}
