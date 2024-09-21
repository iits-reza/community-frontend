import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./global/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import LanguageDetector from "i18next-browser-languagedetector";
import Footer from "./components/footer/footer.tsx";
import AboutCommunity from "./routes/about/about.tsx";
import { Home } from "./routes/home";
import EventsPrograms from "./routes/Events/Events.tsx";
import EventsPage from "./routes/Events/EventPage.tsx";

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
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
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
        <Router>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about-community" element={<AboutCommunity />} />
            <Route path="/events" element={<EventsPrograms />} />
            <Route path="/events/:id" element={<EventsPage />} />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </React.StrictMode>
  </Suspense>
);
