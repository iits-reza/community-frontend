// routes/home/index.tsx
import About from "../../components/about/about";
import Programs from "../../components/programs/programs";
import Donations from "../../components/donations/donations";
import Faq from "../../components/faq/faq";
import HomeComponent from "../../components/home/home";
import { JoinModal } from "../../components/joinModal/joinModal";

export const Home = () => {
  return (
    <div className="">
      <JoinModal
        description="No descripotion"
        onCloseModal={() => console.log("closed")}
        title="Title"
      />
      <HomeComponent />
      <About />
      {/* <Donations /> */}
      <Programs />
      <Faq />
    </div>
  );
};
