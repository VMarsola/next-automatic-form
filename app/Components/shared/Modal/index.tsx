"use client";

import { FC } from "react";
import ReactDOM from "react-dom";
import { IModalProps } from "./Modal.types";
import "./styles.css";

const Modal: FC<IModalProps> = ({ children, isOpen }) => {
  return ReactDOM.createPortal(
    isOpen && (
      <div className="modal-body">
        <div className="flex flex-col  bg-white text-black w-1/2 min-h-[120px] ">
          <div className="bg-green-900 p-3 flex items-center justify-between">
            <p className="text-white">SPPREV</p>
            <p className="text-white">x</p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    ),
    document.body
  );
};

export default Modal;
