import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/index.css";
import "antd/dist/antd.css";
import { AppProvider } from "../context/app_context";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      once: false,
      delay: 200,
      duration: 1200,
      offset: 50,
    });
  }, []);
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
