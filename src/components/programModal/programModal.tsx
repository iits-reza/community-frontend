import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";

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
      <Dialog
        open={true}
        onClose={() => console.log("closed")}
        className="relative z-50 "
      >
        {/* <div className="fixed inset-0 flex  items-center justify-center p-4 "> */}
        <div
          className="fixed inset-0 flex  items-center justify-center p-4 bg-black bg-opacity-20"
          onClick={onCloseModal}
        >
          <DialogPanel className="relative space-y-4 bg-white p-12 h-4/5 lg:w-[1000px] lg:h-[800px] overflow-scroll border-[2px] border-primary ">
            <FontAwesomeIcon
              icon={faClose}
              // onClick={onCloseModal}
              onClick={onCloseModal}
              size="xl"
              className="absolute top-2 right-1 cursor-pointer hover:opacity-45"
            />
            <img src={imageSrc} className="w-1/2" />
            <DialogTitle className="font-bold">{title}</DialogTitle>
            <DocumentRenderer document={description} renderers={renderers} />
            <p>{timeData}</p>
            <div className="flex gap-4">
              <button
                onClick={onCloseModal}
                className="bg-rose-500 p-2 rounded-md text-white"
              >
                Close Dialogue
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
