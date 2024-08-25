import React from "react";
import { Header } from "../../components/header/header";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useQuery, gql } from "@apollo/client";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";
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
  const { loading, error, data } = useQuery(GET_ABOUT, {
    variables: {
      where: { id: 1 },
    },
  });
  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
        <Button
          onClick={() => navigate("/")}
          className="flex gap-4 items-center"
        >
          <FontAwesomeIcon icon={faHome} className="" />
          Go back to Home
        </Button>
      </Header>
      <div className="flex flex-col pt-[160px] p-[80px] gap-[50px]">
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
