import React from "react";
import { WhackedOut } from "../../components/animations/WhackedOut/WhackedOut";
import { H3 } from "../../components/ui/typography/H3";
import Footer from "../../components/structural/Footer/Footer";
import { defaultColourScheme } from "../../styles/colours.constants";
import { Link } from "react-router-dom";

const dashOffsetMultipler = 66 / 11;
const dashLength = 121;

export const Page404 = () => {
  return (
    <div
      id="app"
      style={{
        backgroundColor: defaultColourScheme.light,
        color: defaultColourScheme.dark,
      }}
    >
      <div className="max-w-3xl flex flex-col mx-auto min-h-screen">
        <WhackedOut className="mx-auto" />

        <main id="content">
          <div className="text-center mb-10 px-4 sm:px-6 lg:px-8 justify-center items-center flex flex-col">
            <H3 className="text-7xl font-bold sm:text-9xl">404</H3>
            <p className="mt-3">Oops, you've taken a wrong turn somewhere...</p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <Link to="/">
                <div
                  style={{ backgroundColor: defaultColourScheme.dark }}
                  className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-white focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-run"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M4 17l5 1l.75 -1.5" />
                    <path d="M15 21l0 -4l-4 -3l1 -6" />
                    <path d="M7 12l0 -3l5 -1l3 3l3 1" />
                  </svg>
                  Flee
                </div>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
