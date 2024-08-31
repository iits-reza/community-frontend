import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { DocumentRenderer } from "@keystone-6/document-renderer";

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
  const renderers: DocumentRendererProps["renderers"] = {
    // use your editor's autocomplete to see what other renderers you can override
    inline: {
      bold: ({ children }) => {
        return <strong>{children}</strong>;
      },
    },
    block: {
      paragraph: ({ children, textAlign }) => {
        return <p style={{ textAlign }}>{children}</p>;
      },
    },
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
          <DialogPanel className="relative space-y-4 bg-white p-12 w-[1000px] h-[700px] overflow-hidden overflow-scroll border-[2px] border-primary ">
            <FontAwesomeIcon
              icon={faClose}
              onClick={onCloseModal}
              size="xl"
              className="absolute top-2 right-5 cursor-pointer hover:opacity-45"
            />
            <img src={imageSrc} className="w-1/2" />
            <DialogTitle className="font-bold">{title}</DialogTitle>
            <DocumentRenderer document={description} renderers={renderers} />
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
