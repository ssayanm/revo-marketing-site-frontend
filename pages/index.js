import axios from "axios";
import Meta from "../components/Meta";
import HomeHero from "../components/HomeHero";
import HomeSectionA from "../components/HomeSectionA";
import HomeSectionB from "../components/HomeSectionB";
import HomeSectionC from "../components/HomeSectionC";
import HomeSectionD from "../components/HomeSectionD";
import HomeSectionE from "../components/HomeSectionE";
import Loading from "../components/Loading";

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
      <HomeHero home={home} />

      {/* <HomeSectionA home={home} />*/}
      <HomeSectionB home={home} />

      <HomeSectionD home={home} />
      <HomeSectionC home={home} />
      <HomeSectionE home={home} />
    </>
  );
};

export default Home;
