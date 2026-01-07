export type RecentProjectContent = {
  title: string;
  skills: string[];
  body: string;
  links?: { android?: string; apple?: string; web?: string };
  icon?: JSX.Element;
};

export type RecentProjectProps = {
  animation: JSX.Element;
  id: string;
  isAnimated?: boolean;
  rightToLeft?: boolean;
  header?: string;
  testId?: string;
};
