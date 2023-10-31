import '../../../styles/selectHover.css';

import { useState } from 'react';

export const Selecthover = (props: { dropdownName: string; dropList: string[] }) => {
  const [open, setOpen] = useState(false);

  const handleChangeOpen = () => {
    setOpen(!open);
  };

  const handleChangeClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        className={`custom-button ${open ? 'disable-button-styles' : ''}`}
        onMouseEnter={handleChangeOpen}
        onMouseLeave={handleChangeClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleChangeOpen();
          }
        }}
        tabIndex={0}>
        {props.dropdownName}

        {open && (
          <div className="dropdown-container">
            {props.dropList?.map((item, index) => (
              <div className="dropdown" key={index}>
                {item}
              </div>
            ))}
          </div>
        )}
      </button>
    </>
  );
};

export const exampleList = ['Magdalenas', 'Canelones', 'Queso ricota'];
