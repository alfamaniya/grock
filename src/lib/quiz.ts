import {
  CATEGORY_LABEL,
  ELEMENTS,
  type Category,
  type ChemElement,
} from "@/lib/elements";

export type QuizQuestion = {
  prompt: string;
  hint: string;
  options: string[];
  answer: string;
  element: ChemElement;
};

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function pick<T>(arr: T[], n: number, exclude?: T): T[] {
  const pool = exclude == null ? arr : arr.filter((x) => x !== exclude);
  return shuffle(pool).slice(0, n);
}

const STABLE = ELEMENTS.filter((e) => e.z <= 103);

export function makeQuestion(recent: number[]): QuizQuestion {
  const pool = STABLE.filter((e) => !recent.includes(e.z));
  const el = (pool.length ? pool : STABLE)[Math.floor(Math.random() * (pool.length || STABLE.length))]!;
  const kind = Math.floor(Math.random() * 4);

  if (kind === 0) {
    const names = pick(STABLE.map((e) => e.name), 3, el.name);
    return {
      prompt: `What is the name of ${el.symbol}?`,
      hint: `Atomic number ${el.z}`,
      options: shuffle([el.name, ...names]),
      answer: el.name,
      element: el,
    };
  }
  if (kind === 1) {
    const symbols = pick(STABLE.map((e) => e.symbol), 3, el.symbol);
    return {
      prompt: `What is the symbol for ${el.name}?`,
      hint: `Atomic number ${el.z}`,
      options: shuffle([el.symbol, ...symbols]),
      answer: el.symbol,
      element: el,
    };
  }
  if (kind === 2) {
    const cats = Object.keys(CATEGORY_LABEL) as Category[];
    const others = pick(cats, 3, el.category).map((c) => CATEGORY_LABEL[c]);
    return {
      prompt: `Which family does ${el.name} belong to?`,
      hint: el.symbol,
      options: shuffle([CATEGORY_LABEL[el.category], ...others]),
      answer: CATEGORY_LABEL[el.category],
      element: el,
    };
  }
  const others = pick(
    STABLE.filter((e) => e.z !== el.z).map((e) => String(e.z)),
    3,
  );
  return {
    prompt: `What is the atomic number of ${el.name}?`,
    hint: el.symbol,
    options: shuffle([String(el.z), ...others]),
    answer: String(el.z),
    element: el,
  };
}

export const ROUND_LENGTH = 10;
