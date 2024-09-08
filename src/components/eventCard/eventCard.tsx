import { Button } from "../button";

type Props = {
  imageSrc: string;
  author: string;
  title: string;
  eventDate: string;
  buttonText: string;
  className: string;
  onClick: () => void;
  eventTime: string;
};

export const EventCard = ({
  imageSrc,
  buttonText,
  eventDate,
  title,
  className,
  author,
  eventTime,
  onClick,
}: Props) => {
  const formatDate = (date: string) => {
    // new Date(date, "MM/dd/yyy - hh:mm PM");
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(date).toLocaleString("en-US", options);
  };

  return (
    <div
      className={`flex flex-col gap-4  cursor-pointer shadow-md hover:shadow-2xl rounded-xl p-5  border-stone-400 ${className}`}
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full overflow-hidden"
      />
      <span>{eventTime}</span>
      <p>{title}</p>
      {!author === null && <p>Posted by: {author.name}</p>}
      {console.log(author)}
      <span>{formatDate(eventDate)}</span>
      <Button variant="secondary">{buttonText}</Button>
    </div>
  );
};
