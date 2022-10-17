import styled from "styled-components";
import { BsPlayFill } from "react-icons/bs";
import Image from "next/image";
import { Row, Col } from "antd";
import ReactPlayer from "react-player/lazy";
import useSWR from "swr";
import Loading from "./Loading";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MediaOutlets = () => {
  const { data, error } = useSWR(
    `${process.env.url}/api/how-it-works?populate=*`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <Wrapper>
      <Row
        gutter={[48, 48]}
        justify="center"
        align="middle"
        className="section"
      >
        <Col sm={24} md={12} data-aos="zoom-in">
          <Image
            alt="Revo Video"
            src="/images/Weekly_Schedule.jpg"
            width={1000}
            height={625}
            objectFit="cover"
            // quality={100}
          />
        </Col>
        <Col sm={24} md={12} data-aos="fade-up">
          {/*  <div className="iconbar">
            <BsPlayFill className="icon" />
          <h1 className="title">{data.data[6].attributes.heading}</h1>
          </div>
              <ReactMarkdown children={data.data[6].attributes.subHeading} />
        */}
          <h1 className="title">For Media Outlets</h1>
          <p>
            Develop a slate of programming tied to Shoppable Videos and create
            Live shopping events that drive consumers back to your properties
            and enhance engagement and activation.
          </p>
          <div className="onlydesktop">
            <Link href="/get-started">
              <a className="btn btn-start"> Try it Free</a>
            </Link>
          </div>
          <center className="onlymobile">
            <Link href="/get-started">
              <a className="btn btn-start"> Try it Free</a>
            </Link>
          </center>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-black);
  color: var(--clr-white);
  padding: 0rem;

  .btn-start {
    margin-top: 2rem;
    background: var(--clr-white);
    color: var(--clr-black);

    &:hover {
      background: var(--clr-primary-1);
      color: var(--clr-white);
    }
  }
  .title {
    text-align: center;
    color: var(--clr-white);
  }

  .section {
    padding: 2rem 0rem 1rem;
  }

  p {
    margin-top: 0rem;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0rem;
    color: var(--clr-white);
  }

  .title {
    font-size: 2rem;
  }

  .iconbar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 2rem;
      height: 2rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 992px) {
    padding: 0rem 2rem;

    .section {
      padding: 3rem 6rem 0;
    }

    .section .ant-col {
      padding: 1rem 0;
    }

    p {
      text-align: left;
      margin-bottom: 0rem;
      margin-top: 0rem;
    }

    .title {
      text-align: left;
      font-size: 3rem;
    }

    .iconbar {
      justify-content: flex-start;
      align-items: baseline;
      flex-direction: row;
    }
  }
`;

export default MediaOutlets;
