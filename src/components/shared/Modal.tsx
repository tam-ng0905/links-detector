import React from 'react';

import ModalCloseButton from './ModalCloseButton';

type ModalProps = {
  children: React.ReactNode,
  onClose?: () => void,
  disableClose?: boolean,
};

function Modal(props: ModalProps): React.ReactElement {
  const {
    children,
    onClose = (): void => {},
    disableClose = false,
  } = props;

  const bgClass = 'bg-black';

  let modalContainerClasses = 'absolute left-0 top-0 z-10 w-full h-full overflow-hidden flex items-center justify-center flex-col fade-in-5';
  if (bgClass) {
    modalContainerClasses += ` ${bgClass}`;
  }

  const iconContainerClass = 'w-8 h-8 absolute right-0 top-0 m-3 z-20';

  const modalContentClass = 'w-full flex items-center justify-center flex-col';

  const closeButton = !disableClose ? (<ModalCloseButton onClick={onClose} />) : null;

  return (
    <div className={modalContainerClasses}>
      <div className={iconContainerClass}>
        {closeButton}
      </div>
      <div className={modalContentClass}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
