import React from "react";

export interface ModalProps {
  name: string;
  desc: string;
  repo: string;
  techs: string[];
}

export interface ModalFunProps {
  modal: (modalData: ModalProps | null) => void;
  name: string;
  desc: string;
  repo: string;
  techs: string[];
}
