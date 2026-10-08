import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { makeQuestion, ROUND_LENGTH, type QuizQuestion } from "@/lib/quiz";
import { useTable } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Answered = { pick: string; correct: boolean };

export function QuizView() {
  const quizBest = useTable((s) => s.quizBest);
  const setQuizBest = useTable((s) => s.setQuizBest);
  const setView = useTable((s) => s.setView);
  const setSelectedZ = useTable((s) => s.setSelectedZ);

  const [recent, setRecent] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState<QuizQuestion>(() => makeQuestion([]));
  const [answered, setAnswered] = useState<Answered | null>(null);
  const [done, setDone] = useState(false);

  const progress = useMemo(() => index / ROUND_LENGTH, [index]);

  function choose(option: string) {
    if (answered) return;
    const correct = option === question.answer;
    setAnswered({ pick: option, correct });
    if (correct) setScore((s) => s + 1);
  }

  function next() {
    const nextIndex = index + 1;
    const nextRecent = [...recent, question.element.z].slice(-12);
    if (nextIndex >= ROUND_LENGTH) {
      setQuizBest(score);
      setDone(true);
      return;
    }
    setRecent(nextRecent);
    setIndex(nextIndex);
    setQuestion(makeQuestion(nextRecent));
    setAnswered(null);
  }

  function restart() {
    setRecent([]);
    setIndex(0);
    setScore(0);
    setQuestion(makeQuestion([]));
    setAnswered(null);
    setDone(false);
  }

  if (done) {
    return (
      <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-5 py-12 text-center">
        <div className="text-micro font-medium tracking-wide text-subtle uppercase">Round complete</div>
        <div className="mt-3 font-display text-5xl leading-none tracking-tight text-fg">
          {score}
          <span className="text-muted">/{ROUND_LENGTH}</span>
        </div>
        <p className="mt-4 text-sm text-muted">
          Best on this device: {Math.max(quizBest, score)} / {ROUND_LENGTH}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <Button onClick={restart}>
            <RotateCcw />
            Play again
          </Button>
          <Button variant="secondary" onClick={() => setView("table")}>
            Back to the table
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col px-5 py-8">
      <div className="flex items-center justify-between gap-3 text-xs text-muted">
        <span className="font-medium tabular-nums">
          {index + 1} / {ROUND_LENGTH}
        </span>
        <span className="font-mono tabular-nums">Score {score}</span>
      </div>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full bg-accent transition-[width] duration-200 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="mt-10">
        <div className="font-mono text-xs text-subtle">{question.hint}</div>
        <h2 className="mt-2 font-display text-3xl leading-tight tracking-tight text-fg">
          {question.prompt}
        </h2>
      </div>

      <div className="mt-8 grid gap-2">
        {question.options.map((option) => {
          const isPick = answered?.pick === option;
          const isAnswer = answered != null && option === question.answer;
          return (
            <button
              key={option}
              type="button"
              onClick={() => choose(option)}
              disabled={answered != null}
              className={cn(
                "min-h-12 rounded-md px-4 py-3 text-left text-sm font-medium text-fg shadow-border transition-[background-color,transform] duration-150 ease-out active:not-disabled:scale-[0.96]",
                answered == null && "bg-surface hover:bg-surface-2",
                answered != null && !isPick && !isAnswer && "bg-surface opacity-40",
                isAnswer && "bg-ok/20 text-fg",
                isPick && !isAnswer && "bg-danger/20 text-fg",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered ? (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted">
            {answered.correct ? "Correct." : `It was ${question.answer}.`}
          </p>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedZ(question.element.z);
                setView("table");
              }}
            >
              Open in table
            </Button>
            <Button size="sm" onClick={next}>
              {index + 1 >= ROUND_LENGTH ? "See score" : "Next"}
              <ArrowRight />
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
