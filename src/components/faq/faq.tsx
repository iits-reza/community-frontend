import Accordion from "../accordion/accordion";
import { useTranslation } from "react-i18next";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";

interface Props {
  // title: string;
  // description: React.ComponentType;
  faqData: object[];
}

const renderers: DocumentRendererProps["renderers"] = {
  // use your editor's autocomplete to see what other renderers you can override
  inline: {
    bold: ({ children }) => {
      return <strong>{children}</strong>;
    },
  },
  block: {
    paragraph: ({ children }) => {
      return <p style={{ whiteSpace: "pre-line" }}>{children}</p>;
    },
  },
};

function Faq({ faqData = [] }: Props) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col px-20" id="faq">
      <h1 className="text-[40px] pb-[20px] text-center font-title">
        {t("faq.title")}
      </h1>
      {/* {accordionData.map((accordion) => ( */}
      {faqData.map((faq) => (
        <Accordion
          title={faq.title}
          description={
            <DocumentRenderer
              document={faq.content.document || []}
              renderers={renderers}
            />
            // faq.content.document
          }
        />
      ))}
    </div>
  );
}

export default Faq;
