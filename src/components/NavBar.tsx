/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import logo from "../img/abstractly.svg";
import { NavProps } from "../types";

export const NavBar = (props: NavProps) => {
  return (
    <header className="flex w-screen justify-between items-center px-28 pt-4 max-lg:px-12 max-md:px-8 max-sm:px-4"> 
      <img src={logo} alt="Abstractly logo" className="py-2.5"></img>
      <nav className="flex gap-8 max-lg:hidden">
        {props.titles.map((title) => {
          return (
            <a href="#">
              <button className="text-neutral-600 text-base font-medium" type="button">{title}</button>
            </a>
          )   
        })}
      </nav>
      <div className="flex gap-4 max-lg:hidden">
        <a href="#">
          <button className="text-neutral-900 text-base font-medium bg-white px-4 py-2.5 rounded shadow white-button" type="button">Learn more</button>
        </a>
        <a href="#">
          <button className="text-white text-base font-medium bg-indigo-700 px-4 py-2.5 rounded shadow blue-button" type="button">See pricing</button>
        </a>
      </div>
      
      <button aria-label="Open mobile menu" className="lg:hidden w-5 h-5" onClick={props.handleClick}>
        <span aria-hidden="true" className="text-2xl text-neutral-600">☰</span>
      </button>
    </header>
  );
};