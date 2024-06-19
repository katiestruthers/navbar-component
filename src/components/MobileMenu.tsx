/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";
import logo from "../img/abstractly.svg";
import { NavProps } from "../types";

const StyledMobileMenu = styled.div<{ isMobileMenuOpen: boolean; }>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 97%;
  transform: ${(props) => props.isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  background-color: white;
`;

export const MobileMenu = (props: NavProps) => {
  return (
  <StyledMobileMenu isMobileMenuOpen={props.isMobileMenuOpen} className="py-4 flex flex-col gap-6 px-12 max-md:px-8 max-sm:px-4">
    <header className="flex justify-between">
      <img src={logo} alt="Abstractly logo" className="py-2.5 px-12 max-md:px-8 max-sm:px-4"></img>
      <button aria-label="Close mobile menu" onClick={props.handleClick}>
        <span aria-hidden="true" className="text-2xl text-neutral-600">×</span>
      </button>
    </header>
    <nav className="flex flex-col gap-2 h-lvh">
      {props.titles.map((title) => {
        return (
          <a href="#">
            <button className="text-neutral-600 text-sm font-normal py-2 px-14 max-md:px-10 max-sm:px-6" type="button">{title}</button>
          </a>
        )   
      })}
    </nav>
    <div className="flex flex-col gap-4">
      <a href="#">
        <button className="text-neutral-900 text-base font-medium bg-white px-4 py-2.5 rounded shadow block w-full white-button" type="button">Learn more</button>
      </a>
      <a href="#">
        <button className="text-white text-base font-medium bg-indigo-700 px-4 py-2.5 rounded shadow block w-full blue-button" type="button">Try it out</button>
      </a>
    </div>
  </StyledMobileMenu>
  );
};