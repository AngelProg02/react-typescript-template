import '../styles/navBarIconText.css';

export interface NavBarIconProps {
  image: string;
  withText?: string;
}

export const NavBarIcon = ({ image, withText }: NavBarIconProps) => {
  return (
    <li className="nav-icon-text">
      <a href="example.html">
        <img src={`src/assets/${image}`} alt="navIcon" />
      </a>
      {withText}
    </li>
  );
};
