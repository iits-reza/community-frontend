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
      id
      title
      eventDate
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
      eventTime
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
      <HomeComponent />
      <About />
      {/* <Donations /> */}
      {faqLoading && "Loading..."}
      {faqError && (
        <p className="text-rose-800 font-medium text-lg p-5 text-center  bg-orange-200">
          Error loading! Server error please try again
        </p>
      )}
      <Programs eventsData={lastThreeEventData} />
      {lastEventLoading && "Loading..."}
      {lastEventError && (
        <p className="text-rose-800 font-medium text-lg p-5 text-center  bg-orange-200">
          Server error please try again
        </p>
      )}
      <Faq faqData={faqsInfo} />
    </div>
  );
};
