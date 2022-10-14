import { BsPlayCircle } from "react-icons/bs";
import styled from "styled-components";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";

const HomeSectionBB = ({ home }) => {
  const {
    HomeSectionDheading,
    HomeSectionDbulletA,
    HomeSectionDbulletAdesc,
    HomeSectionDbulletB,
    HomeSectionDbulletBdesc,
    HomeSectionDbulletC,
    HomeSectionDbulletCdesc,
  } = home.data.attributes;
  return (
    <Wrapper>
      <div className="section-center">
        <Row gutter={16} justify="center" align="middle">
          <Col data-aos="fade-up">
            {/*<BsPlayCircle className="icon" />

  <ReactMarkdown children={HomeSectionDheading} className="title1" />*/}
            <h1 className="title1">
              Increase conversions. Lower ad cost.
              <br /> Maximize video ROI.
            </h1>
          </Col>
          <Row className="space" data-aos="fade-up">
            <Col sm={24} md={12} xl={8}>
              {/*<p className="header">{HomeSectionDbulletA}</p>
<p className="info">{HomeSectionDbulletAdesc}</p>*/}
              <p className="header">CONNECT</p>
              <Image
                alt="revovideo"
                src="https://via.placeholder.com/400"
                width={400}
                height={400}
                objectFit="contain"
                quality={100}
              />

              <p className="info">
                Connect to your store effortlessly with easy no code
                integrations.
              </p>
            </Col>
            <Col sm={24} md={12} xl={8}>
              {/*    <p className="header">{HomeSectionDbulletB}</p>
<p className="info">{HomeSectionDbulletBdesc}</p>*/}
              <p className="header">CREATE</p>
              <Image
                alt="revovideo"
                src="https://via.placeholder.com/400"
                width={400}
                height={400}
                objectFit="contain"
                quality={100}
              />
              <p className="info">
                Create a video show and add products and payment options.
              </p>
            </Col>
            <Col sm={24} md={12} xl={8}>
              {/* <p className="header">{HomeSectionDbulletC}</p>
<p className="info">{HomeSectionDbulletCdesc}</p>*/}
              <p className="header">PUBLISH</p>
              <Image
                alt="revovideo"
                src="https://via.placeholder.com/400"
                width={400}
                height={400}
                objectFit="contain"
                quality={100}
              />
              <p className="info">
                Publish the video and reach your audience wherever they are
              </p>
            </Col>
          </Row>
          <div className="btn-section">
            <Link href="/get-started">
              <a className="btn btn-start">Book a Demo</a>
            </Link>
          </div>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* min-height: 50vh; */
  background: var(--clr-primary-1);
  background-image: url("/images/circle.png");
  background-position: -16% 120%;
  background-repeat: no-repeat;
  /* background-image: url("/images/circle.png"); */
  /* background-repeat: no-repeat; */
  padding: 6rem 2rem;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 1.75rem;
  }

  .icon {
    width: 64px;
    height: 64px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 2rem;
  }

  .header {
    font-size: 1.75rem;
    font-family: "MontSemiBold", sans-serif;
    color: var(--clr-white);
    margin-bottom: 0.5rem;
  }

  .info {
    font-size: 1.2rem;
  }

  .title1 h1,
  h1 {
    margin-bottom: 0rem;
    font-family: "MontBold", sans-serif;
    font-size: 2.2rem;
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;
    .ant-col {
      padding: 0 2rem;
    }

    .icon {
      width: 113px;
      height: 113px;
    }

    .title1 h1,
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
      margin-top: 1rem;
      font-size: 1.6rem;
    }
  }
`;

export default HomeSectionBB;
