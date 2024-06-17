/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

type NavProps = {
  titles: string[]
}

export const NavBar = (props: NavProps) => {
  return (
    <nav className="flex"> 
      <a href="#">Abstractly</a>
      <ul className="flex">
        {props.titles.map((title) => {
          return (
            <li>
              <a href="#">
                <button className="" type="button">{title}</button>
              </a>
            </li>
          )   
        })}
      </ul>
      <a href="#">
          <button className="" type="button">Learn more</button>
      </a>
      <a href="#">
          <button className="" type="button">See pricing</button>
        </a>
    </nav>
  );
};