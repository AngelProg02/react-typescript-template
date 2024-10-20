import '../../styles/modals.css';

import { useState } from 'react';

export interface CenterDialogProps {
  text?: string;
  image?: string;
}

export const CenterDialog = ({ text, image }: CenterDialogProps) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenCloseModal = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="modal-container">
      <button className="modal-bt" onClick={handleOpenCloseModal}>
        {openDialog ? 'Close' : 'Open'}
      </button>
      <dialog className="modal-dialog" open={openDialog ? true : false}>
        <div className="close-bt ">
          <button onClick={handleOpenCloseModal}>
            <img src="src/assets/modals/cross.svg" alt="Close Modal" />
          </button>
        </div>
        <img id="poster" src={image} alt={image} />
        {text}
      </dialog>
    </div>
  );
};
