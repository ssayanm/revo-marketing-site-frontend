import { Row, Col } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { social } from "../utils/constants";
import ReactPlayer from "react-player/lazy";

const HomeHero = ({ home }) => {
  const { heading, subHeading, heroVideo, buttonText, buttonLink } =
    home.data.attributes;

  return (
    <Wrapper>
      <div className="section-center">
        <Row gutter={32} justify="center" align="middle" className="herorow">
          <Col sm={24} md={24} lg={12} data-aos="fade-up">
            <article className="content">
              <h1 className="title" style={{ display: "none" }}>
                {heading}
              </h1>
              <p style={{ display: "none" }}>{subHeading}</p>
              <h1 className="title">
                The Future of Shopping is Commerce Enabled Content
              </h1>
              <h3>
                Revo Video is an authentic content led marketing and shopping
                platform.
              </h3>
              <p>
                Create shoppable videos once and then distribute across social
                media networks, embed into websites and content, shop on TV via
                QR codes and more! Content is always shoppable in both Live and
                VOD format creating an endless distribution channel across all
                major platforms creating thousands of new revenue streams.
              </p>
              <p style={{ display: "none" }}>
                Omnichannel platform Create shoppable videos once and then
                distribute across social media networks, embed into websites and
                content, shop on TV via QR codes and more!
              </p>
              <p style={{ display: "none" }}>
                Videos are always shoppable in both Live and VOD format creating
                an endless distribution channel across all major platforms
                creating thousands of new revenue streams.
              </p>
              <div className="onlymobile" data-aos="zoom-in">
                <div className="player-wrapper">
                  <ReactPlayer
                    url={
                      heroVideo.data.attributes.url
                        ? heroVideo.data.attributes.url
                        : "/videos/REVO_video_V3_06_24.m4v"
                    }
                    playing={false}
                    muted={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    // image="/images/herovideo.jpg"
                    className="react-player"
                  />
                </div>
              </div>
              <div className="btn-section">
                <Link href={`/${buttonLink}`}>
                  <a className="btn btn-start"> {buttonText}</a>
                </Link>
              </div>

              <p className="smallfont" style={{ display: "none" }}>
                Available now on all platforms
              </p>
              <ul className="social-icons" style={{ display: "none" }}>
                {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                    <li key={id}>
                      <a href={url} target="_blank">
                        {icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          </Col>
          <Col sm={24} md={24} lg={12} data-aos="zoom-in">
            <div className="onlydesktop">
              <div className="player-wrapper">
                <ReactPlayer
                  url={
                    heroVideo.data.attributes.url
                      ? heroVideo.data.attributes.url
                      : "/videos/homevideo.mp4"
                  }
                  playing={true}
                  muted={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  className="react-player"
                  // image="/images/herovideo.jpg"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-1);
  padding: 4rem 2rem;
  p {
    margin-top: 2rem;
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .smallfont {
    font-size: 1.25rem;
  }
  .btn-shopify {
    margin-top: 1rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .btn-start {
    text-align: center;
    width: 12rem;
    margin: 0 auto;
  }

  .btn-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    text-align: center;
  }
  @media (min-width: 992px) {
    padding: 5rem 2rem;

    .title {
      text-align: left;
    }

    p {
      font-size: 1.75rem;
      text-align: left;
    }
    .smallfont {
      font-size: 1.5rem;
    }
    .btn-shopify {
      margin-top: 0rem;
      text-align: center;
      margin-bottom: 0rem;
    }

    .btn-start {
      width: auto;
      margin: 0 auto;
    }

    .btn-section {
      display: block;
      /* width: 31rem; */
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      margin-top: 2rem;
    }
  }

  @media (min-width: 1367px) {
    padding: 5rem 2rem;
  }
`;

export default HomeHero;
