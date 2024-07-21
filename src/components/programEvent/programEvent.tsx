import { Button } from "../button";

type Props = {
  imageSrc: string;
  title: string;
  date: string;
  buttonText: string;
  className: string;
  onClick: () => void;
};

export const ProgramEvent = ({
  imageSrc,
  buttonText,
  date,
  title,
  className,
  onClick,
}: Props) => {
  return (
    <div
      className={`flex flex-col gap-4 p-[10px] ${className}`}
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full overflow-hidden"
      />
      <p>{title}</p>
      <span>{date}</span>
      <Button variant="secondary">{buttonText}</Button>
    </div>
  );
};
