import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null; // Don't render if modal is not open

    return (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative rounded-lg p-6 max-w-md w-full">
                <button
                    className="absolute top-2 right-2 text-2xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
