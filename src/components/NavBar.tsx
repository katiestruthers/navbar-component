/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

type NavProps = {
  titles: string[]
}

export const NavBar = (props: NavProps) => {
  return (
    <header className="flex"> 
      <h1>Abstractly</h1>
      <nav className="flex">
        {props.titles.map((title) => {
          return (
            <a href="#">
              <button className="" type="button">{title}</button>
            </a>
          )   
        })}
      </nav>
      <a href="#">
          <button className="" type="button">Learn more</button>
      </a>
      <a href="#">
          <button className="" type="button">See pricing</button>
        </a>
    </header>
  );
};