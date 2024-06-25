import Accordion from "../accordion/accordion";
import { useTranslation } from "react-i18next";
const accordionData = [
  {
    title: "What is charity",
    descirption:
      "Charity is the voluntary provision of assistance to those in need. It serves as a humanitarian act, and is unmotivated by self-interest. Various philosophies about charity exist, with frequent associations with religion.",
  },
  {
    title: "What is charity",
    descirption:
      "Charity is the voluntary provision of assistance to those in need. It serves as a humanitarian act, and is unmotivated by self-interest. Various philosophies about charity exist, with frequent associations with religion.",
  },
  {
    title: "What is charity",
    descirption:
      "Charity is the voluntary provision of assistance to those in need. It serves as a humanitarian act, and is unmotivated by self-interest. Various philosophies about charity exist, with frequent associations with religion.",
  },
  {
    title: "What is charity",
    descirption:
      "Charity is the voluntary provision of assistance to those in need. It serves as a humanitarian act, and is unmotivated by self-interest. Various philosophies about charity exist, with frequent associations with religion.",
  },
];
function Faq() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col p-[80px]" id="faq">
      <h1 className="text-[40px] text-center font-title">{t("faq.title")}</h1>
      {accordionData.map((accordion) => (
        <Accordion
          title={accordion.title}
          description={accordion.descirption}
        />
      ))}
    </div>
  );
}

export default Faq;
