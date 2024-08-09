// routes/home/index.tsx
import About from "../../components/about/about";
import Programs from "../../components/programs/programs";
// import Donations from "../../components/donations/donations";
import Faq from "../../components/faq/faq";
import HomeComponent from "../../components/home/home";
import { useState } from "react";
import { MembershipModal } from "../../components/membershipModal/membershipModal";
import { gql, useQuery } from "@apollo/client";

const GET_FAQS = gql`
  query Faqs {
    faqs {
      title
      content {
        document
      }
    }
  }
`;

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { error, loading, data } = useQuery(GET_FAQS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const faqData = data.faqs;

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
      {/* {faqData.map((faq) => ( */}
      <Faq faqData={faqData} />
      {/* ))} */}
    </div>
  );
};
