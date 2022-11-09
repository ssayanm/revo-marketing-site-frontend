import { Row, Col } from "antd";
import styled from "styled-components";
import Link from "next/link";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const HomeHero = ({ homev1 }) => {
  const { heading, subHeading, heroVideo, heroPara, buttonText, buttonLink } =
    homev1.data.attributes;

  return (
    <Wrapper>
      <div className="section-center">
        <Row gutter={32} justify="center" align="middle" className="herorow">
          <Col sm={24} md={24} lg={12} data-aos="fade-up">
            <div className="content">
              <h1 className="title">{heading}</h1>
              <h3>{subHeading}</h3>
              <p>{heroPara}</p>

              {/*<h1 className="title">
                The most robust video shopping solution, period.
              </h1>
              <p>
                VOD, Live & 1:1 all with one-click pay. Get more sales and
                conversions with Revo.
              </p>*/}
              <div className="onlymobile" data-aos="zoom-in">
                <div className="player-wrapper">
                  <ReactPlayer
                    // url={
                    //   heroVideo.data.attributes.url
                    //     ? heroVideo.data.attributes.url
                    //     : "/videos/RevoHeroFinal1.m4v"
                    // }
                    url="/videos/RevoHeroFinal1.m4v"
                    playing={false}
                    muted={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    image="/images/herovideo.jpg"
                    className="react-player"
                  />
                </div>
              </div>
              <div className="btn-section">
                <Link href={`/${buttonLink}`}>
                  <a className="btn btn-start"> {buttonText}</a>
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={24} md={24} lg={12} data-aos="zoom-in">
            <div className="onlydesktop">
              <div className="player-wrapper">
                <ReactPlayer
                  // url={
                  //   heroVideo.data.attributes.url
                  //     ? heroVideo.data.attributes.url
                  //     : "/videos/RevoHeroFinal1.m4v"
                  // }
                  url="/videos/RevoHeroFinal1.m4v"
                  playing={true}
                  muted={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  className="react-player"
                  image="/images/herovideo.jpg"
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
