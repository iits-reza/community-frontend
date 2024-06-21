import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Header } from "./components/header/header.tsx";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import LanguageDetector from "i18next-browser-languagedetector";
import Home from "./components/home/home.tsx";
import About from "./components/about/about.tsx";
import Programs from "./components/programs/programs.tsx";
import Footer from "./components/footer/footer.tsx";
import Donations from "./components/donations/donations.tsx";
import Faq from "./components/faq/faq.tsx";
import { Element } from "react-scroll";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fa"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });
const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `,
});

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>
      <FontAwesomeIcon
        icon={faCircleNotch}
        className="animate-spin bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      />
    </h3>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <Element name="HomeFC" className="element">
            <Home />
          </Element>
          <About />
          <Programs />
          <Donations />
          <Faq />
          <Element name="ContactFC">
            <Footer />
          </Element>

          <Routes>
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>
  </Suspense>
);
