import React from "react";
import { TheGirls } from "../../animations/TheGirls/TheGirls";

export const FooterAnimation = () => {
  return (
    <section className="mt-5">
      <div className="container py-4 py-xl-5 mx-auto px-0 md:px-4 items-center justify-center">
        <div className={`flex flex-row max-h-[500px] mx-auto justify-center`}>
          <TheGirls />
        </div>
      </div>
    </section>
  );
};
