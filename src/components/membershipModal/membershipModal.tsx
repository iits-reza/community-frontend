import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { useState } from "react";
import MembershipForm from "../membershipForm/membershipForm";
import { useTranslation } from "react-i18next";

type Props = {
  onCloseModal: (arg: boolean) => void;
  // setIsModalOpen: ;
  title: string;
  description: string;
};
interface FormData {
  firstName: "";
  lastName: "";
  email: "";
  phone: "";
}

export const MembershipModal = ({
  description,
  onCloseModal,
  title,
}: Props) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Add more fields as needed
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
      <Dialog
        onClose={() => onCloseModal(false)}
        open={true}
        className="relative z-50 "
      >
        <div className="fixed inset-0 flex  items-center justify-center p-4 bg-black bg-opacity-20">
          <DialogPanel className="relative space-y-4 bg-white p-12 border-[2px] border-primary lg:w-[900px] w-full h-full lg:h-[600px]">
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => onCloseModal(false)}
              size="xl"
              className="absolute top-2 right-5 cursor-pointer hover:opacity-45"
            />
            <DialogTitle className="font-bold border-t pt-5">
              {t("membership_modal.title")}
            </DialogTitle>
            <Description className="border-t  pt-5">
              {t("membership_modal.description")}
            </Description>
            <div>
              <MembershipForm />
            </div>
            <div className="flex gap-4 border-t-2 mt-9 pt-4">
              <button onClick={() => onCloseModal(false)} className="">
                {t("membership_modal.close_dialog_btn")}
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
