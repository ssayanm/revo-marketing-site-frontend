import Meta from "../components/Meta";
import PressSection from "../components/PressSection";
import axios from "axios";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      `${process.env.url}/api/featured-presses/?sort[position]=ASC&populate=*`
    );

    const channels = res.data;
    if (!channels)
      return (
        <div>
          <Loading />
        </div>
      );
    return { props: { channels } };
  } catch (error) {
    return { error };
  }
};

const press = ({ channels }) => {
  return (
    <main>
      <Meta title="Press" />
      <PressSection channels={channels} />
    </main>
  );
};
export default press;
