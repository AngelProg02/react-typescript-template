export const NavBarIcon = ({ image }: { image: string }) => {
  return (
    <li>
      <a href="example.html">
        <img src={`src/assets/${image}`} alt="navIcon" />
      </a>
    </li>
  );
};
