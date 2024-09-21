import React from "react";
import { Header } from "../../components/header/header";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { useQuery, gql } from "@apollo/client";
import { Link as ScrollLink } from "react-scroll";

import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
const GET_ABOUT = gql`
  query About($where: AboutWhereUniqueInput!) {
    about(where: $where) {
      id
      title
      content {
        document
      }
    }
  }
`;
const AboutCommunity: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_ABOUT, {
    variables: {
      where: { id: 1 },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p className="text-rose-800 font-medium text-lg p-5 text-center  bg-orange-200">
        Server error please try again
        <Button
          onClick={() => navigate("/")}
          className="flex gap-4 items-center rounded-3xl"
        >
          ← Go to home
        </Button>
      </p>
    );

  const renderers: DocumentRendererProps["renderers"] = {
    // use your editor's autocomplete to see what other renderers you can override
    inline: {
      bold: ({ children }) => {
        return <strong>{children}</strong>;
      },
    },
    block: {
      paragraph: ({ children, textAlign }) => {
        return <p style={{ textAlign }}>{children}</p>;
      },
    },
  };
  return (
    <>
      <Header>
        <ul
          className={`flex  ${
            isMobile ? "flex-col bg-white w-full" : "flex-row"
          } justify-between gap-x-[24px] border-l-2 border-primary pl-[50px] h-full`}
        >
          <li
            onClick={() => navigate("/")}
            className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md"
          >
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              href="/"
              onClick={() => navigate("/")}
            >
              <FontAwesomeIcon icon={faCertificate} className="mr-3" />
              <a>{t("header.home")}</a>
            </ScrollLink>
          </li>

          <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
            <ScrollLink
              to="footer"
              spy={true}
              smooth={true}
              offset={0}
              duration={490}
              className="gap-3 flex items-center"
              href="#footer"
            >
              <FontAwesomeIcon icon={faCertificate} />
              <a>{t("header.contact")}</a>
            </ScrollLink>
          </li>
        </ul>
      </Header>
      <div className="flex flex-col pt-[160px] p-[80px] px-[300px] gap-[50px]">
        <h1 className="font-primary text-section-title">{data.about.title}</h1>
        <DocumentRenderer
          document={data.about.content.document}
          renderers={renderers}
        />
      </div>
    </>
  );
};
export default AboutCommunity;
