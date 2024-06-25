import { useTranslation } from "react-i18next";
import { Button } from "../button";

function Donations() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-row bg-[#123E23] justify-between p-[80px]"
      id="donations"
    >
      <div className="flex flex-col justify-between gap-[90px]">
        <h1 className="font-title text-[40px] text-white w-[600px]">
          {t("donations.title")}
        </h1>
        <Button variant="secondary" className="w-[200px]">
          {t("donations.donate_button")}
        </Button>
      </div>
      <div className="flex flex-row">
        <video
          src="https://www.youtube.com/watch?v=JnYBvLY0GOg"
          width="750"
          height="500"
          controls
        ></video>
      </div>
    </div>
  );
}

export default Donations;
