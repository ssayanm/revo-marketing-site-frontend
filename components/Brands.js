import styled from "styled-components";
import { BsPlayFill } from "react-icons/bs";
import Image from "next/image";
import { Row, Col } from "antd";
import ReactPlayer from "react-player/lazy";
import useSWR from "swr";
import Loading from "./Loading";
import ReactMarkdown from "react-markdown";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Brands = () => {
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
        <Col sm={24} md={12} data-aos="fade-up">
          <h1 className="title">{data.data[7].attributes.heading}</h1>
          <p>{data.data[7].attributes.subHeading}</p>
        </Col>
        <Col sm={24} md={12} className="widthfull" data-aos="zoom-in">
          <div className="player-wrapper1">
            <ReactPlayer
              url={
                data.data[7].attributes.image.data.attributes.url
                  ? data.data[7].attributes.image.data.attributes.url
                  : "/videos/REVO_video_V3_06_24.m4v"
              }
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
              // image="/images/herovideo.jpg"
              // quality={100}
            />
          </div>
        </Col>
        <Col sm={24} md={12} data-aos="zoom-in" className="onlydesktop">
          <Image
            alt="Revo Video"
            src={
              data.data[6].attributes.image.data.attributes.formats.large.url
                ? data.data[6].attributes.image.data.attributes.formats.large
                    .url
                : "/images/easytouse.jpg"
            }
            width={1000}
            height={625}
            objectFit="cover"
            // quality={100}
          />
        </Col>
        <Col sm={24} md={12} data-aos="fade-up">
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">{data.data[6].attributes.heading}</h1>
          </div>
          <ReactMarkdown children={data.data[6].attributes.subHeading} />
        </Col>
        <Col sm={24} md={12} data-aos="zoom-in" className="onlymobile">
          <Image
            alt="Revo Video"
            src={
              data.data[6].attributes.image.data.attributes.formats.large.url
                ? data.data[6].attributes.image.data.attributes.formats.large
                    .url
                : "/images/easytouse.jpg"
            }
            width={1000}
            height={625}
            objectFit="cover"
            // quality={100}
          />
        </Col>

        <Col sm={24} md={12} data-aos="fade-up">
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">{data.data[4].attributes.heading}</h1>
          </div>

          <p>{data.data[4].attributes.subHeading}</p>
        </Col>
        <Col sm={24} md={12} data-aos="zoom-in">
          <Image
            alt="Revo Video"
            src={
              data.data[4].attributes.image.data.attributes.formats.large.url
                ? data.data[4].attributes.image.data.attributes.formats.large
                    .url
                : "/images/Weekly_Schedule.jpg"
            }
            width={1000}
            height={434}
            objectFit="cover"
            // quality={100}
          />
        </Col>

        <Col sm={24} md={12} className="onlydesktop" data-aos="zoom-in">
          <ReactPlayer
            url={
              data.data[5].attributes.image.data.attributes.url
                ? data.data[5].attributes.image.data.attributes.url
                : "/videos/catalog_sync.mp4"
            }
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
        <Col sm={24} md={12} data-aos="fade-up">
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">{data.data[5].attributes.heading}</h1>
          </div>

          <p>{data.data[5].attributes.subHeading}</p>
        </Col>
        <Col sm={24} md={12} className="onlymobile" data-aos="zoom-in">
          <ReactPlayer
            url={
              data.data[5].attributes.image.data.attributes.url
                ? data.data[5].attributes.image.data.attributes.url
                : "/videos/catalog_sync.mp4"
            }
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
      </Row>

      <Row
        className="section-a"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12} data-aos="fade-up">
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">{data.data[0].attributes.heading}</h1>
          </div>

          <p>{data.data[0].attributes.subHeading}</p>
        </Col>
        <Col sm={24} md={12} data-aos="zoom-in">
          <ReactPlayer
            url={
              data.data[0].attributes.image.data.attributes.url
                ? data.data[0].attributes.image.data.attributes.url
                : "/videos/Live_VOD.mp4"
            }
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
      </Row>

      <div className="section-center">
        <Row
          className="section-d"
          gutter={[32, 32]}
          justify="center"
          align="middle"
        >
          <Col sm={24} md={14} data-aos="fade-up">
            <div className="iconbar">
              <BsPlayFill className="icon" />
              <h1 className="title">{data.data[3].attributes.heading}</h1>
            </div>
            <p className="para">{data.data[3].attributes.subHeading}</p>
          </Col>
          <Col sm={24} md={10} data-aos="zoom-in">
            <ReactPlayer
              url={
                data.data[3].attributes.image.data.attributes.url
                  ? data.data[3].attributes.image.data.attributes.url
                  : "/videos/VirtualTryOn.mp4"
              }
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
              // image="/images/herovideo.jpg"
              // quality={100}
            />
          </Col>
        </Row>
      </div>

      <Row
        className="section-c"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12} className="onlydesktop" data-aos="zoom-in">
          <ReactPlayer
            url={
              data.data[2].attributes.image.data.attributes.url
                ? data.data[2].attributes.image.data.attributes.url
                : "/videos/FrictionlessCheckout.mp4"
            }
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
        <Col sm={24} md={12} data-aos="fade-up">
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">{data.data[2].attributes.heading}</h1>
          </div>

          <p>{data.data[2].attributes.subHeading}</p>
        </Col>
        <Col sm={24} md={12} className="onlymobile" data-aos="zoom-in">
          <ReactPlayer
            url={
              data.data[2].attributes.image.data.attributes.url
                ? data.data[2].attributes.image.data.attributes.url
                : "/videos/FrictionlessCheckout.mp4"
            }
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
      </Row>

      <Row
        className="section-b"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12} data-aos="fade-up">
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">{data.data[1].attributes.heading}</h1>
          </div>

          <h1 className="title"></h1>
          <p>{data.data[1].attributes.subHeading}</p>
        </Col>
        <Col sm={24} md={12} data-aos="zoom-in">
          <ReactPlayer
            url={
              data.data[1].attributes.image.data.attributes.url
                ? data.data[1].attributes.image.data.attributes.url
                : "/videos/Real-TimeAnalytics.mp4"
            }
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-d {
    margin: 2rem 0 3rem 0;
    background: var(--clr-primary-1);
    height: max-content;
    padding: 2rem 0.5rem;
    border-radius: 2rem;
  }
  .title {
    text-align: center;
  }

  .section {
    padding: 2rem 0.5rem;
  }

  .section-a {
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 2rem 0.5rem;

    p {
      color: var(--clr-white);
    }
    .title {
      color: var(--clr-white);
    }
  }

  .section-b {
    background: var(--clr-white);
    color: var(--clr-black);
    padding: 2rem 0.5rem;
    p {
      color: var(--clr-black);
    }
  }

  .section-c {
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 2rem 0.5rem;

    p {
      color: var(--clr-white);
    }

    .title {
      color: var(--clr-white);
    }
  }

  p {
    margin-top: 0rem;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0rem;
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
    /* padding: 9rem 2rem; */

    .section,
    .section-a,
    .section-b,
    .section-c {
      padding: 6rem;
    }

    .section .ant-col {
      padding: 1rem 0;
    }

    .section-d {
      margin: 5rem 0 5rem 0;
      background: var(--clr-primary-1);

      padding: 6rem 4rem;
      border-radius: 2rem;
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

export default Brands;
