// routes/home/index.tsx
import About from "../../components/about/about";
import Programs from "../../components/programs/programs";
import Donations from "../../components/donations/donations";
import Faq from "../../components/faq/faq";
import HomeComponent from "../../components/home/home";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-black/[.06] gap-y-[100px]">
      <HomeComponent />
      <About />
      <Programs />
      <Donations />
      <Faq />
    </div>
  );
};
