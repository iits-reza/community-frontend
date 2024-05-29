import { Button } from "../button";
import heroImageHome from "../../images/heroHomePage.svg";

const Home = () => {
  return (
    <div className="p-[80px] flex flex-row gap-[80px] ">
      <div className="flex flex-col gap-[25px]">
        <h1 className="text-[40px] font-title w-[600px]">
          Join to your community today and participate in community events
        </h1>
        <p className="w-[600px] text[24px]">
          Charithy is here to help you distribute aid in a safe, reliable, and
          secure manner. We ensure that your donations reach the right people.
        </p>
        <div className="flex gap-2">
          <Button variant="primary">Join now</Button>
          <Button variant="secondary">How community center works</Button>
        </div>
      </div>
      <img
        src={heroImageHome}
        alt="Hero image home page"
        className=" w-[600px] h-[424px] border-2 border-primary"
      />
    </div>
  );
};
export default Home;
