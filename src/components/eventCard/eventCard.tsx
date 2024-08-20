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
  const formatDate = (date: string) => {
    // new Date(date, "MM/dd/yyy - hh:mm PM");
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Date(date).toLocaleString("en-US", options);
  };

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
      <span>{formatDate(date)}</span>
      <Button variant="secondary">{buttonText}</Button>
    </div>
  );
};
