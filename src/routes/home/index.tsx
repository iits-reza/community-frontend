// routes/home/index.tsx
import About from "../../components/about/about";
import Programs from "../../components/programs/programs";
// import Donations from "../../components/donations/donations";
import Faq from "../../components/faq/faq";
import HomeComponent from "../../components/home/home";
import { useEffect, useState } from "react";
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

const GET_LASTEVENTS = gql`
  query Events {
    events(orderBy: { createdAt: desc }, take: 3) {
      title
      dateAndTime
      content {
        document
      }
      image {
        url
        height
        width
      }
      author {
        name
      }
    }
  }
`;

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { error, loading, data } = useQuery(GET_FAQS);
  const {
    error: faqError,
    loading: faqLoading,
    data: faqData,
  } = useQuery(GET_FAQS);
  const {
    error: lastEventError,
    loading: lastEventLoading,
    data: lastEventData,
  } = useQuery(GET_LASTEVENTS);
  useEffect(() => {});

  const faqsInfo = faqData?.faqs;
  const lastThreeEventData = lastEventData?.events;

  return (
    <div className="">
      {isModalOpen && (
        <MembershipModal
          description="Here you can register your info to your community "
          onCloseModal={setIsModalOpen}
          title="Membership registration"
          // onClose={}
        />
      )}
      <HomeComponent setIsModalOpen={setIsModalOpen} />
      <About />
      {/* <Donations /> */}
      {faqLoading && "Loading..."}
      {faqError && `Error! ${faqError.message}`}
      <Programs eventsData={lastThreeEventData} />
      {lastEventLoading && "Loading..."}
      {lastEventError && `Error! ${lastEventError.message}`}
      <Faq faqData={faqsInfo} />
    </div>
  );
};
