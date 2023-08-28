import { useState } from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import { Brand, MinimalModeToggler, Nav, NavBarToggler } from "./component";

const NavBar = () => {
  const { minimalMode, toggleMinimalMode } = usePortfolioContext();
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const copy = {
    disableMinimal: "Fewer Colours",
    enableMinimal: "A little weirder",
    about: "About",
    projects: "Projects",
    other: "Other",
  };

  return (
    // <nav
    //   // className="navbar navbar-expand-lg fixed-top p-md-3 p-1"
    //   className="max-w-screen-xl flex flex-wrap top p-md-3 p-1"
    //   style={{
    //     backgroundColor: minimalMode
    //       ? colours.minimal.light
    //       : colours.vibrant.light,
    //   }}
    // >
    //   <div className="container">
    //     <Brand minimalMode={minimalMode} href="#top">
    //       Odhrán
    //     </Brand>
    //     <NavBarToggler onClick={toggleExpanded} />
    //     <div
    //       className={`${
    //         expanded ? "" : "collapse"
    //       } navbar-collapse justify-content-lg-end`}
    //       id="navbarText"
    //     >
    //       <ul className="navbar-nav mr-auto">
    // <li className="nav-item">
    //   <a className="nav-link" href={`#${copy.about}`}>
    //     {copy.about}
    //   </a>
    // </li>

    // <li className="nav-item">
    //   <a className="nav-link" href={`#${copy.projects}`}>
    //     {copy.projects}
    //   </a>
    // </li>

    // <li className="nav-item">
    //   <a className="nav-link" href={`#Misc`}>
    //     {"Misc"}
    //   </a>
    // </li>
    // <li className="nav-item">
    //   <a className="nav-link" href={`#Socials`}>
    //     {"Socials"}
    //   </a>
    // </li>
    // <li className="nav-item">
    //   <MinimalModeToggler
    //     minimalMode={minimalMode}
    //     copy={copy}
    //     onClick={toggleMinimalMode}
    //   />
    // </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <Nav minimalMode={minimalMode}>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Brand minimalMode={minimalMode} href="#top">
          Odhrán
        </Brand>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0" href={`#${copy.about}`}>
                {copy.about}
              </a>
            </li>

            <li>
              <a className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0" href={`#${copy.projects}`}>
                {copy.projects}
              </a>
            </li>

            <li>
              <a className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0" href={`#Misc`}>
                {"Misc"}
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0" href={`#Socials`}>
                {"Socials"}
              </a>
            </li>
            <li>
              <MinimalModeToggler
                minimalMode={minimalMode}
                copy={copy}
                onClick={toggleMinimalMode}
              />
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
