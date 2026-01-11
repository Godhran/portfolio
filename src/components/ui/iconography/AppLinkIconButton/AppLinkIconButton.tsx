import React from "react";

type Props = {
  isWeb?: boolean;
  isAndroid?: boolean;
  fill?: string;
};

export const AppLinkIconButton = ({ isWeb, isAndroid, fill }: Props) => {
  // {...(!isRestrictedColourScheme && {
  //                           fill: "var(--c-b)",
  //                         })}

  const colour = fill ?? "currentColor";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="icon icon-tabler icons-tabler-outline icon-tabler-world-www"
    >
      {isWeb && (
        <g
          fill="none"
          stroke={colour}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
          <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
          <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
          <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
          <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
          <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
          <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
          <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
          <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
        </g>
      )}
      {isAndroid && (
        <g
          fill="none"
          stroke={colour}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 10l0 6" />
          <path d="M20 10l0 6" />
          <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
          <path d="M8 3l1 2" />
          <path d="M16 3l-1 2" />
          <path d="M9 18l0 3" />
          <path d="M15 18l0 3" />
        </g>
      )}
      {!isWeb && !isAndroid && (
        <g fill={colour}>
          <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
          <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
        </g>
      )}
    </svg>
  );
};
