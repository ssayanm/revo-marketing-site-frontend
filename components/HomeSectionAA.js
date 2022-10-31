import { BsPlayCircle } from "react-icons/bs";
import styled from "styled-components";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

const HomeSectionAA = ({ homev1 }) => {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  const {
    HomeSectionAheading,
    HomeSectionABoxAicon,
    HomeSectionABoxAimage,
    HomeSectionABoxAheading,
    HomeSectionABoxAsubHeading,
    HomeSectionABoxAbutton,
    HomeSectionABoxAbuttonLink,

    HomeSectionABoxBicon,
    HomeSectionABoxBimage,
    HomeSectionABoxBheading,
    HomeSectionABoxBsubHeading,
    HomeSectionABoxBbutton,
    HomeSectionABoxBbuttonLink,

    HomeSectionABoxCicon,
    HomeSectionABoxCimage,
    HomeSectionABoxCheading,
    HomeSectionABoxCsubHeading,
    HomeSectionABoxCbutton,
    HomeSectionABoxCbuttonLink,
  } = homev1.data.attributes;
  return (
    <Wrapper>
      <div className="section-center">
        <Row gutter={16} justify="center" align="middle">
          <Col data-aos="fade-up">
            {/*  <h1 className="title">{HomeSectionAheading}</h1>*/}
            <h1 className="title">Grow your business with shoppable videos</h1>
          </Col>
          <Row className="space" data-aos="fade-up">
            <Col sm={24} md={12} xl={8}>
              <p className="circle">{HomeSectionABoxAicon}</p>
              <p className="header">{HomeSectionABoxAheading}</p>
              <p className="info">{HomeSectionABoxAsubHeading}</p>
              <div className="onlydesktop" data-aos="zoom-in">
                <div className="player-wrapper">
                  <ReactPlayer
                    url={
                      HomeSectionABoxAimage.data.attributes.url
                        ? HomeSectionABoxAimage.data.attributes.url
                        : "/videos/createplaylist.m4v"
                    }
                    playing={true}
                    muted={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    className="react-player"
                    image="https://via.placeholder.com/400"
                  />
                </div>
              </div>
              <div className="onlymobile" data-aos="zoom-in">
                <div className="player-wrapper">
                  <ReactPlayer
                    url={
                      HomeSectionABoxAimage.data.attributes.url
                        ? HomeSectionABoxAimage.data.attributes.url
                        : "/videos/createplaylist.m4v"
                    }
                    playing={false}
                    muted={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    className="react-player"
                    image="https://via.placeholder.com/400"
                  />
                </div>
              </div>
              <div className="btn-section">
                <Link href={`/${HomeSectionABoxAbuttonLink}`}>
                  <a className="btn1 btn-start">{HomeSectionABoxAbutton}</a>
                </Link>
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} className="colspace">
              <p className="circle">{HomeSectionABoxBicon}</p>
              <p className="header">{HomeSectionABoxBheading}</p>
              <p className="info">{HomeSectionABoxBsubHeading}</p>

<<<<<<< HEAD:components/HeroSectionAA.js

              */}
              <p className="circle">1</p>
              <p className="header">Short Form Video</p>
              <p className="info">
                Leverage existing content to create shoppable videos
              </p>
              <div className="onlydesktop">
=======
              <div className="onlydesktop" data-aos="zoom-in">
>>>>>>> staging:components/HomeSectionAA.js
                <div className="player-wrapper">
                  <ReactPlayer
                    url={
                      HomeSectionABoxBimage.data.attributes.url
                        ? HomeSectionABoxBimage.data.attributes.url
                        : "/videos/Liveshow.m4v"
                    }
                    playing={true}
                    muted={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    className="react-player"
                    image="https://via.placeholder.com/400"
                  />
                </div>
              </div>
              <div className="onlymobile" data-aos="zoom-in">
                <div className="player-wrapper">
                  <ReactPlayer
                    url={
                      HomeSectionABoxBimage.data.attributes.url
                        ? HomeSectionABoxBimage.data.attributes.url
                        : "/videos/Liveshow.m4v"
                    }
                    playing={false}
                    muted={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    className="react-player"
                    image="https://via.placeholder.com/400"
                  />
                </div>
              </div>
              <div className="btn-section">
                <Link href={`/${HomeSectionABoxBbuttonLink}`}>
                  <a className="btn1 btn-start">{HomeSectionABoxBbutton}</a>
                </Link>
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} className="colspace">
              <p className="circle">{HomeSectionABoxCicon}</p>
              <p className="header">{HomeSectionABoxCheading}</p>
              <p className="info">{HomeSectionABoxCsubHeading}</p>

              <div className="onlydesktop" data-aos="zoom-in">
                <div className="player-wrapper">
                  <ReactPlayer
                    url={
                      HomeSectionABoxCimage.data.attributes.url
                        ? HomeSectionABoxCimage.data.attributes.url
                        : "/videos/VideoShopping.m4v"
                    }
                    playing={true}
                    muted={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    className="react-player"
                    image="https://via.placeholder.com/400"
                  />
                </div>
              </div>

              <div className="onlymobile" data-aos="zoom-in">
                <div className="player-wrapper">
                  <ReactPlayer
                    url={
                      HomeSectionABoxCimage.data.attributes.url
                        ? HomeSectionABoxCimage.data.attributes.url
                        : "/videos/VideoShopping.m4v"
                    }
                    playing={false}
                    muted={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    className="react-player"
                    image="https://via.placeholder.com/400"
                  />
                </div>
              </div>
              <div className="btn-section">
                <Link href={`/${HomeSectionABoxCbuttonLink}`}>
                  <a className="btn1 btn-start">{HomeSectionABoxCbutton}</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 2rem 4rem;
  background: var(--clr-black);
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 1.75rem;
  }

  .circle {
    background: var(--clr-primary-1);
    color: var(--clr-white);
    border-radius: 50%;
    padding-top: 0.2rem;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .btn-start {
    color: var(--clr-white);
    font-size: 1.3rem;
    border-bottom: 1px solid var(--clr-white);
    padding-bottom: 0.3rem;
    line-height: 2rem;
    font-family: "MontSemiBold", sans-serif;

    &:hover {
      color: var(--clr-primary-1);
      border-bottom: 1px solid var(--clr-primary-1);
    }
  }

  .btn-section {
    padding-top: 0.75rem;
  }

  .header {
    font-size: 1.75rem;
    font-family: "MontSemiBold", sans-serif;
    color: var(--clr-primary-1);
    margin-bottom: 0.75rem;
  }

  .info {
    font-size: 1.2rem;
    color: var(--clr-white);
  }

  .title1 h1 {
    margin-bottom: 0rem;
    font-family: "MontBold", sans-serif;
    font-size: 2.2rem;
    color: var(--clr-white);
  }

  h1 {
    margin-bottom: 0rem;
    font-family: "MontBold", sans-serif;
    font-size: 2.2rem;
    color: var(--clr-white);
  }

  .colspace {
    padding: 2rem 0rem;
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;
    .ant-col {
      padding: 0 2rem;
    }

    .colspace {
      /* padding: 0rem; */
    }
    .icon {
      width: 113px;
      height: 113px;
    }

    .title1 h1 {
      font-size: 3.5rem;
    }

    h1 {
      font-size: 3.5rem;
    }

    .title1 {
      margin-bottom: 2rem;
    }

    h3 {
      margin-bottom: 1.5rem;
      font-size: 4.3rem;
    }
    h4 {
      font-size: 39.5px;
      font-family: "Mont", sans-serif;
      margin-bottom: 1.5rem;
      letter-spacing: normal;
      line-height: 1.1;
    }
    .header {
      font-size: 2rem;
    }

    .info {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1439px) and (min-width: 1366px) {
    .header {
      font-size: 2rem;
    }

    .info {
      font-size: 1.7rem;
    }
  }

  @media (min-width: 1440px) {
    .header {
      font-size: 2rem;
    }

    .info {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 2011px) {
    .header {
      font-size: 2rem;
    }

    .info {
      font-size: 1.5rem;
    }
  }
`;

export default HomeSectionAA;
