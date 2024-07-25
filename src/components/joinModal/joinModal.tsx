import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import React, { ChangeEvent } from "react";

type Props = {
  onCloseModal: () => void;
  title: string;
  description: string;
};

export const JoinModal = ({ description, onCloseModal, title }: Props) => {
  const [formValues, setFormValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Add more fields as needed
  });
  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setFromData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
      <Dialog
        open={true}
        onClose={() => console.log("closed")}
        className="relative z-50 "
      >
        <div className="fixed inset-0 flex  items-center justify-center p-4 ">
          <DialogPanel className="relative space-y-4 bg-white p-12 border-[2px] border-primary w-[900px]">
            <FontAwesomeIcon
              icon={faClose}
              onClick={onCloseModal}
              size="xl"
              className="absolute top-2 right-5 cursor-pointer hover:opacity-45"
            />
            <DialogTitle className="font-bold">{title}</DialogTitle>
            <Description>{description}</Description>
            <div>
              <form>
                <InputWithLabel
                  inputName=""
                  label="First name"
                  placeholder="First name"
                  value={formValues.firstName}
                  onChange={() => handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="flex gap-4">
              <button onClick={onCloseModal}>Close</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
