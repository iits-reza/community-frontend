import { Button } from "../button";
import Event1 from "../../images/event1.svg";
import Event2 from "../../images/event2.svg";
import Event3 from "../../images/event3.svg";

const events = [
  {
    title: "Your Generosity Saves Lives",
    time_date: "2024/08/08 02:20pm",
    image: Event1,
  },
  {
    title: "A Bright Future for Indonesian Children",
    time_date: "2024/08/08 02:20pm",
    image: Event2,
  },
  {
    title: "Care for victims affected by floods",
    time_date: "2024/08/08 02:20pm",
    image: Event3,
  },
];

const Programs = () => {
  return (
    <div className="flex flex-col p-[80px] gap-[25px]" id="programs">
      <div className="flex flex-row justify-between">
        <h1 className="text-[40px] font-title">Events and Programs</h1>
        <Button variant="primary">All events & programs</Button>
      </div>
      <div className="flex flex-row justify-between gap-[20px]">
        {events.map((event) => (
          <div className=" flex flex-col gap-4">
            <img
              src={event.image}
              alt={event.title}
              className="w-[354px] h-[200px]"
            />
            <p>{event.title}</p>
            <span>{event.time_date}</span>
            <Button variant="secondary">View more</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
