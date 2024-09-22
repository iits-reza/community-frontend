import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";

import { useTranslation } from "react-i18next";
import Accordion from "../accordion/accordion";

type DocumentNode = {
  type: string;
  children: DocumentNode[];
  text?: string;
  bold?: boolean;
  italic?: boolean;
  [key: string]: string | boolean | DocumentNode[] | undefined;
};
interface faqData {
  title: string;
  content: {
    document: DocumentNode[];
  };
}
interface Props {
  faqData: faqData[];
}

const renderers: DocumentRendererProps["renderers"] = {
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
    <div className="flex flex-col px-5 lg:px-20" id="faq">
      <h1 className="lg:text-[40px] text-[25px] pb-[20px] text-center font-title">
        {t("faq.title")}
      </h1>
      {faqData.map((faq) => (
        <Accordion
          title={faq.title}
          description={
            <DocumentRenderer
              document={faq.content.document}
              renderers={renderers}
            />
          }
        />
      ))}
    </div>
  );
}

export default Faq;
