import Meta from "../components/Meta";
import InspirationSection from "../components/InspirationSection";
import axios from "axios";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      `${process.env.url}/api/featured-channels/?sort[position]=ASC&populate=*`
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

const inspiration = ({ channels }) => {
  return (
    <main>
      <Meta title="Inspiration" />
      <InspirationSection channels={channels} />
    </main>
  );
};
export default inspiration;
