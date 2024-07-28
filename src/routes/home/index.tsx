// routes/home/index.tsx
import About from "../../components/about/about";
import Programs from "../../components/programs/programs";
// import Donations from "../../components/donations/donations";
import Faq from "../../components/faq/faq";
import HomeComponent from "../../components/home/home";
import { useState } from "react";
import { MembershipModal } from "../../components/membershipModal/membershipModal";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      {isModalOpen && (
        <MembershipModal
          description="No descripotion"
          onCloseModal={setIsModalOpen}
          title="Title"
          // onClose={}
        />
      )}
      <HomeComponent setIsModalOpen={setIsModalOpen} />
      <About />
      {/* <Donations /> */}
      <Programs />
      <Faq />
    </div>
  );
};
