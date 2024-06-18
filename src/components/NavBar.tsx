/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import logo from "../img/abstractly.svg";

type NavProps = {
  titles: string[]
}

export const NavBar = (props: NavProps) => {
  return (
    <header className="flex w-screen justify-between items-center px-28 pt-4"> 
      <img src={logo} alt="Abstractly logo"></img>
      <nav className="flex gap-8">
        {props.titles.map((title) => {
          return (
            <a href="#">
              <button className="text-neutral-600 text-base font-medium" type="button">{title}</button>
            </a>
          )   
        })}
      </nav>
      <div className="flex gap-4">
        <a href="#">
          <button className="text-neutral-900 text-base font-medium bg-white px-4 py-2.5 rounded shadow" type="button">Learn more</button>
        </a>
        <a href="#">
          <button className="text-white text-base font-medium bg-indigo-700 px-4 py-2.5 rounded shadow" type="button">See pricing</button>
        </a>
      </div>
    </header>
  );
};