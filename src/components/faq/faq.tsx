import Accordion from "../accordion/accordion";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  description: string;
};

const renderers: DocumentRendererProps["renderers"] = {
  inline: {},
  block: {
    paragraph: ({ children }) => {
      return <p className="whitespace-pre-line ">{children}</p>;
    },
  },
};

function Faq({ title, description }: Props) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col px-20" id="faq">
      <h1 className="text-[40px] text-center font-title">{t("faq.title")}</h1>
      {/* {accordionData.map((accordion) => ( */}
      <Accordion title={title} description={description} />
      {/* ))} */}
    </div>
  );
}

export default Faq;
