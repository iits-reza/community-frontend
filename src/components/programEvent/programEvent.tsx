import { Button } from "../button";

type Props = {
  imageSrc: string;
  title: string;
  date: string;
  buttonText: string;
};

export const ProgramEvent = ({ imageSrc, buttonText, date, title }: Props) => {
  return (
    <div className=" flex flex-col gap-4">
      <img src={imageSrc} alt={title} className="w-[354px] h-[200px]" />
      <p>{title}</p>
      <span>{date}</span>
      <Button variant="secondary">{buttonText}</Button>
    </div>
  );
};
