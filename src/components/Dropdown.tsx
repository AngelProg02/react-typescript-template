import '../styles/dropdown.css';

import { useState } from 'react';

export const Dropdown = (props: { dropdownName: string; dropList: string[] }) => {
  const [open, setOpen] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setOpen(false);
    }
  };

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleTabKeyPress = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Tab') {
      setOpen(true);
    }
  };

  return (
    <li
      className={`custom-button ${open ? 'disable-button-styles' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
      onKeyDown={handleTabKeyPress}
      tabIndex={0}
      role="menuitem"
      aria-expanded={open ? 'true' : 'false'}>
      <span>{props.dropdownName}</span>
      {open ? (
        <div className="dropdown-container ">
          {props.dropList?.map((item, index) => (
            <a href={`${item}.html`} className="dropdown-item" key={index}>
              {item}
            </a>
          ))}
        </div>
      ) : null}
    </li>
  );
};

export const exampleList = ['Magdalenas', 'Canelones', 'Queso ricota'];
