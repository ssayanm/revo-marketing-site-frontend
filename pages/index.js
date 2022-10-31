import axios from "axios";
import Meta from "../components/Meta";
import HomeHero from "../components/HomeHero";
// import HomeSectionA from "../components/HomeSectionA";
import HomeSectionB from "../components/HomeSectionB";
import HomeSectionC from "../components/HomeSectionC";
import HomeSectionD from "../components/HomeSectionD";

import Loading from "../components/Loading";
import HomeHeaderBanner from "../components/HomeHeaderBanner";
import HomeSectionAA from "../components/HomeSectionAA";
import HomeSectionBB from "../components/HomeSectionBB";
import HomeSectionCC from "../components/HomeSectionCC";
import HomeSectionDD from "../components/HomeSectionDD";
import HomeSectionE from "../components/HomeSectionE";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.url}/api/home/?populate=*`);
    const response = await axios.get(
      `${process.env.url}/api/home-v1/?populate=*`
    );

    const home = res.data;
    const homev1 = response.data;

    if (!home)
      return (
        <div>
          <Loading />
        </div>
      );
    return { props: { home, homev1 } };
  } catch (error) {
    return { error };
  }
};

const Home = ({ home, homev1 }) => {
  return (
    <>
      <Meta title="Home" />
      <HomeHeaderBanner homev1={homev1} />
      <HomeHero homev1={homev1} />
      <HomeSectionAA homev1={homev1} />
      <HomeSectionBB homev1={homev1} />
      <HomeSectionCC homev1={homev1} />
      <HomeSectionDD homev1={homev1} />
      <HomeSectionE homev1={homev1} />
    </>
  );
};

export default Home;
