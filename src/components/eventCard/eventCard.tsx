import { Button } from "../button";

type Props = {
  imageSrc: string;
  author: string;
  title: string;
  date: string;
  buttonText: string;
  className: string;
  onClick: () => void;
};

export const EventCard = ({
  imageSrc,
  buttonText,
  date,
  title,
  className,
  author,
  onClick,
}: Props) => {
  return (
    <div
      className={`flex flex-col gap-4 p-[10px] ${className} cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full overflow-hidden"
      />
      <p>{title}</p>
      <p>Posted by: {author}</p>
      <span>{date}</span>
      <Button variant="secondary">{buttonText}</Button>
    </div>
  );
};
