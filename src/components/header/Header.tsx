import { useState } from "react";
import "./header.css";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

interface IHeaderNavigation {
  name: string;
  path: string;
}

const Header = () => {
  let location = useLocation();
  console.log(location.pathname);
  const dropDownStyles =
    " text-center items-center rounded-sm w-160 p-3 z-10 top-8 right-0 bg-pink";
  const navElements: IHeaderNavigation[] = [
    { name: "Spell-it", path: "/spell-it" },
    { name: "Interactive Quizzes", path: "/quizzes" },
    { name: "Reading Materials", path: "/reading" },
  ];
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="py-8 px-10">
      <div className="sm:flex hidden justify-end ">
        {navElements.map((element, index) => (
          <div
            key={index}
            className={
              element.path === location.pathname
                ? "px-5 pb-3 mx-2 active-link hover-link font-semibold text-lg"
                : "px-5 pb-3 mx-2 hover-link font-semibold text-lg"
            }
          >
            <Link to={element.path}> {element.name}</Link>
          </div>
        ))}
      </div>
      <div className="flex sm:hidden  justify-end">
        <div className="link text-lg  items-center	relative font-semibold">
          <p
            className={
              dropdown ? "flex items-center color-pink" : "flex items-center"
            }
            onClick={() => setDropdown(!dropdown)}
          >
            Menu <AiFillCaretDown className="icon" />
          </p>
          <ul
            className={
              dropdown
                ? `dropdown-menu active ${dropDownStyles}`
                : `dropdown-menu ${dropDownStyles}`
            }
          >
            {navElements.map((element, index) => (
              <li
                className="dropdown-custom py-3 text-base font-normal"
                key={index}
              >
                <a className="py-2" href={`#/${String(index)}`}>
                  {element.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
