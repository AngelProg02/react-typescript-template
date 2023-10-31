import '../../styles/nav-bar.css';

import { exampleList, Selecthover } from './utilities/selectHover';

export const Navbar = () => {
  return (
    <nav className="container">
      <ul className="info">
        <li>
          <button>
            <img src="src\assets\navicon.svg" alt="navIcon" />
          </button>
        </li>

        <li>
          <Selecthover dropdownName="Menu" dropList={exampleList} />
        </li>

        <li>
          <button>Booking</button>
        </li>

        <li>
          <button>Contact</button>
        </li>

        <li>
          <button>About us</button>
        </li>
      </ul>

      <ul className="login-register">
        <li>
          <button>Login</button>
        </li>

        <li>
          <button>Register</button>
        </li>
      </ul>
    </nav>
  );
};
