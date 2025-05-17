import { useRef } from 'react';

interface ModalProps {
    headerLabel: React.ReactNode;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
  }

function Modal(props : ModalProps) {

    const innerRef = useRef<HTMLDivElement>(null);

    function handleClicks(e: React.MouseEvent<HTMLDivElement>) {
        // If the click target is *not* inside the modal content
        if (innerRef.current && !innerRef.current.contains(e.target as Node)) {
            props.onClose(); // Trigger the close callback
        }
    }


    if (!props.isOpen) return null;

    return (

        <div onClick={handleClicks} className="fixed inset-0 bg-blue-300/25 z-50 flex items-center justify-center">
            <div ref={innerRef}  className="bg-white p-6 rounded shadow-lg">
                <div className="mb-4 flex justify-between">
                {props.headerLabel}
                <button onClick={props.onClose} type="button" aria-label="Close"> <span aria-hidden="true">&times;</span></button>
                </div>
                {props.children}
            </div>
        </div>
    );

}

export default Modal;