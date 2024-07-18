import React from "react";
import { Header } from "../../components/header/header";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const AboutCommunity: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <Button
          onClick={() => navigate("/")}
          className="flex gap-4 items-center"
        >
          <FontAwesomeIcon icon={faHome} className="" />
          Go back to Home
        </Button>
      </Header>
      <div className="flex flex-col pt-[160px] p-[80px] gap-[50px]">
        <h1 className="font-primary text-section-title">About our community</h1>
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officia
          obcaecati eius esse quos praesentium doloremque harum excepturi
          impedit vero repellat, commodi suscipit dolorum ad incidunt modi quia
          quibusdam explicabo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt officia obcaecati eius esse quos praesentium
          doloremque harum excepturi impedit vero repellat, commodi suscipit
          dolorum ad incidunt modi quia quibusdam explicabo. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Sunt officia obcaecati eius
          esse quos praesentium doloremque harum excepturi impedit vero
          repellat, commodi suscipit dolorum ad incidunt modi quia quibusdam
          explicabo.
        </p>
        <h1 className="font-primary text-section-title">About our community</h1>
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officia
          obcaecati eius esse quos praesentium doloremque harum excepturi
          impedit vero repellat, commodi suscipit dolorum ad incidunt modi quia
          quibusdam explicabo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt officia obcaecati eius esse quos praesentium
          doloremque harum excepturi impedit vero repellat, commodi suscipit
          dolorum ad incidunt modi quia quibusdam explicabo. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Sunt officia obcaecati eius
          esse quos praesentium doloremque harum excepturi impedit vero
          repellat, commodi suscipit dolorum ad incidunt modi quia quibusdam
          explicabo.
        </p>
        <h1 className="font-primary text-section-title">About our community</h1>
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officia
          obcaecati eius esse quos praesentium doloremque harum excepturi
          impedit vero repellat, commodi suscipit dolorum ad incidunt modi quia
          quibusdam explicabo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt officia obcaecati eius esse quos praesentium
          doloremque harum excepturi impedit vero repellat, commodi suscipit
          dolorum ad incidunt modi quia quibusdam explicabo. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Sunt officia obcaecati eius
          esse quos praesentium doloremque harum excepturi impedit vero
          repellat, commodi suscipit dolorum ad incidunt modi quia quibusdam
          explicabo.
        </p>
        <h1 className="font-primary text-section-title">About our community</h1>
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officia
          obcaecati eius esse quos praesentium doloremque harum excepturi
          impedit vero repellat, commodi suscipit dolorum ad incidunt modi quia
          quibusdam explicabo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt officia obcaecati eius esse quos praesentium
          doloremque harum excepturi impedit vero repellat, commodi suscipit
          dolorum ad incidunt modi quia quibusdam explicabo. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Sunt officia obcaecati eius
          esse quos praesentium doloremque harum excepturi impedit vero
          repellat, commodi suscipit dolorum ad incidunt modi quia quibusdam
          explicabo.
        </p>
      </div>
    </>
  );
};
export default AboutCommunity;
