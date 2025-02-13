// routes/home/index.tsx
import About from "../../components/about/about";
import Programs from "../../components/programs/programs";
// import Donations from "../../components/donations/donations";
import Faq from "../../components/faq/faq";
import HomeComponent from "../../components/home/home";
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { EventCard } from "../../components/eventCard/eventCard";
import EventTemplateSrc from "../../images/event1.svg";
import Accordion from "../../components/accordion/accordion";

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
// const eventOfflineTemplate = [
//   {
//     id: 1,
//     eventDate: "2025-02-15",
//     imageSrc: EventTemplateSrc,
//     title: "Community meeting",
//     author: "John Doe",
//     eventTime: "18:00",
//   },
//   {
//     id: 2,
//     eventDate: "2025-02-15",
//     imageSrc: EventTemplateSrc,
//     title: "Community meeting",
//     author: "John Doe",
//     eventTime: "18:00",
//   },
//   {
//     id: 3,
//     eventDate: "2025-02-15",
//     imageSrc: EventTemplateSrc,
//     title: "Community meeting",
//     author: "John Doe",
//     eventTime: "18:00",
//   },
// ];
export const Home = () => {
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
      <HomeComponent />
      <About />
      {/* Porgramms section */}

      <Programs eventsData={lastThreeEventData} />
      {lastEventLoading && "Loading..."}
      {lastEventError && (
        <div className="flex flex-col gap-2 p-8">
          <p className="text-rose-800 font-medium text-lg p-5 text-center  bg-orange-200">
            Server is offline, please try again
          </p>
          <div className="flex flex-row gap-3">
            <EventCard
              key={1}
              onClick={() => {}}
              className="w-[300px] h-[300px] lg:w-[360px] lg:h-[430px]"
              buttonText="View more"
              eventDate="10-10-2025"
              imageSrc={EventTemplateSrc}
              title="COmmunity meeting"
              author="John Doe"
              eventTime="18:20"
            />
            <EventCard
              key={1}
              onClick={() => {}}
              className="w-[300px] h-[300px] lg:w-[360px] lg:h-[430px]"
              buttonText="View more"
              eventDate="10-10-2025"
              imageSrc={EventTemplateSrc}
              title="COmmunity meeting"
              author="John Doe"
              eventTime="18:20"
            />
            <EventCard
              key={1}
              onClick={() => {}}
              className="w-[300px] h-[300px] lg:w-[360px] lg:h-[430px]"
              buttonText="View more"
              eventDate="10-10-2025"
              imageSrc={EventTemplateSrc}
              title="COmmunity meeting"
              author="John Doe"
              eventTime="18:20"
            />
          </div>
        </div>
      )}

      {/* Frequently ask questions section */}

      <Faq faqData={faqsInfo} />
      {faqLoading && "Loading..."}
      {faqError && (
        <div className="flex flex-col gap-2 p-8">
          <p className="text-rose-800 font-medium text-lg p-5 text-center  bg-orange-200">
            Server is offline, please try again
          </p>
          <div className="flex flex-col gap-3">
            <Accordion
              title="هدف انجمن چیست؟"
              description="
          انجمن، تشكل غير دولتي، غير انتفاعي و غير سياسي است كه با هدف حمايت از مصرف كنندگان و در چهارچوب قانون حمايت از حقوق مصرف كنندگان با مشاركت آحاد مردم تشكيل مي شود و مطابق اساسنامه مصوب شوراي عمومي موسس انجمن نسبت به پيگيري مطالبات مصرف كنندگان و ساير تكاليف قانوني متصوره را اقدام مي نمايد.

"
            />
            <Accordion
              title="Can I be a member of community"
              description="Any one is very welcomed to join the community and we are gonna be happy if you support our community center"
            />
            <Accordion
              title="Is the community none-profit"
              description="Yes our community is none-profit"
            />
          </div>
        </div>
      )}
    </div>
  );
};
