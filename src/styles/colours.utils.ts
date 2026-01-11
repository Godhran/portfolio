import {
  ColourToken,
  TailwindProperties,
  COLOUR_TOKENS,
  ColourScheme,
} from "./colours.types";

export const tailwindColours: Record<ColourToken, TailwindProperties> =
  Object.fromEntries(
    COLOUR_TOKENS.map((t) => [
      t,
      {
        bg: `bg-[var(--c-${t})]`,
        text: `text-[var(--c-${t})]`,
        border: `border-[var(--c-${t})]`,
        ring: `ring-[var(--c-${t})]`,
        fill: `fill-[var(--c-${t})]`,
        stroke: `stroke-[var(--c-${t})]`,
      } satisfies TailwindProperties,
    ])
  ) as Record<ColourToken, TailwindProperties>;
  
export const schemeToCssVars = (scheme: ColourScheme) => {
  return {
    "--c-light": scheme.light,
    "--c-dark": scheme.dark,
    "--c-a": scheme.a,
    "--c-b": scheme.b,
    "--c-c": scheme.c,
    "--c-d": scheme.d,
    "--c-e": scheme.e,
    "--c-f": scheme.f,
  } as React.CSSProperties;
};
