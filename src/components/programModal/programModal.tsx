import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

type Props = {
  imageSrc: string;
  onCloseModal: () => void;
  title: string;
  description: string;
  timeData: string;
};

export const ProgramModal = ({
  description,
  imageSrc,
  onCloseModal,
  timeData,
  title,
}: Props) => {
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
            <img src={imageSrc} />
            <DialogTitle className="font-bold">{title}</DialogTitle>
            <Description>{description}</Description>
            <p>{timeData}</p>
            <div className="flex gap-4">
              <button onClick={onCloseModal}>Close</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
