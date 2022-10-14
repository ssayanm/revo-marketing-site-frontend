import axios from "axios";
import Meta from "../components/Meta";
import HomeHero from "../components/HomeHero";
// import HomeSectionA from "../components/HomeSectionA";
import HomeSectionB from "../components/HomeSectionB";
import HomeSectionC from "../components/HomeSectionC";
import HomeSectionD from "../components/HomeSectionD";
import HomeSectionE from "../components/HomeSectionE";
import Loading from "../components/Loading";
import HomeHeaderBanner from "../components/HomeHeaderBanner";
import HomeSectionAA from "../components/HeroSectionAA";
import HomeSectionBB from "../components/HomeSectionBB";
import HomeSectionDD from "../components/HomeSectionDD";
import DtcBrands from "../components/DtcBrands";
import HomeCategories from "../components/HomeCategories";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.url}/api/home/?populate=*`);
    const home = res.data;
    if (!home)
      return (
        <div>
          <Loading />
        </div>
      );
    return { props: { home } };
  } catch (error) {
    return { error };
  }
};

const Home = ({ home }) => {
  return (
    <>
      <Meta title="Home" />
      <HomeHeaderBanner home={home} />
      <HomeHero home={home} />
      <HomeSectionAA home={home} />
      <HomeSectionBB home={home} />
      <HomeCategories />

      <HomeSectionDD home={home} />
      {/* <HomeSectionB home={home} />*/}
      {/*<HomeSectionD home={home} />
      <HomeSectionC home={home} />*/}
      <HomeSectionE home={home} />
    </>
  );
};

export default Home;
