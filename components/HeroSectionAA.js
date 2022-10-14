import { BsPlayCircle } from "react-icons/bs";
import styled from "styled-components";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";

const HomeSectionAA = ({ home }) => {
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
            {/*     <BsPlayCircle className="icon" />
            <ReactMarkdown children={HomeSectionDheading} className="title1" />*/}

            <h1 className="title1">Grow your business with shoppable videos</h1>
          </Col>
          <Row className="space" data-aos="fade-up">
            <Col sm={24} md={12} xl={8}>
              {/* <p className="header">{HomeSectionDbulletA}</p>
              <p className="info">{HomeSectionDbulletAdesc}</p>*/}
              <p className="circle">1</p>
              <p className="header">Short From Video</p>
              <p className="info">
                Leverage existing content to create shoppable videos
              </p>

              <Image
                alt="revovideo"
                src="https://via.placeholder.com/500"
                width={600}
                height={559}
                objectFit="contain"
                quality={100}
              />

              <div className="btn-section">
                <Link href="/get-started">
                  <a className="btn1 btn-start"> Learn More</a>
                </Link>
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} className="colspace">
              <p className="circle">2</p>
              <p className="header">Live Shopping</p>
              <p className="info">
                Use an engaging creator to promote shopping during a live event
              </p>
              <Image
                alt="revovideo"
                src="https://via.placeholder.com/500"
                width={600}
                height={559}
                objectFit="contain"
                quality={100}
              />

              <div className="btn-section">
                <Link href="/get-started">
                  <a className="btn1 btn-start"> Learn More</a>
                </Link>
              </div>
              {/* <p className="header">{HomeSectionDbulletB}</p>
            <p className="info">{HomeSectionDbulletBdesc}</p>*/}
            </Col>
            <Col sm={24} md={12} xl={8} className="colspace">
              <p className="circle">3</p>
              <p className="header">1:1 Video Shopping</p>
              <p className="info">
                Personalized shopping experience between brand and consumer
              </p>
              <Image
                alt="revovideo"
                src="https://via.placeholder.com/500"
                width={600}
                height={559}
                objectFit="contain"
                quality={100}
              />

              <div className="btn-section">
                <Link href="/get-started">
                  <a className="btn1 btn-start"> Learn More</a>
                </Link>
              </div>
              {/*<p className="header">{HomeSectionDbulletC}</p>
        <p className="info">{HomeSectionDbulletCdesc}</p>*/}
            </Col>
          </Row>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* min-height: 50vh; */
  padding: 6rem 2rem 4rem;
  background: var(--clr-black);
  /* background-image: url("/images/circle.png"); */
  /* background-repeat: no-repeat; */
  /* padding: 6rem 2rem; */
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
    /* background: var(--clr-primary-1); */
    color: var(--clr-white);
    font-size: 1.3rem;
    border-bottom: 1px solid var(--clr-white);
    padding-bottom: 0.3rem;
    line-height: 2rem;
    font-family: "MontSemiBold", sans-serif;

    &:hover {
      color: var(--clr-primary-1);
      /* background: var(--clr-white); */
      border-bottom: 1px solid var(--clr-primary-1);
    }
  }

  .btn-section {
    padding-top: 0.75rem;
  }

  .icon {
    /* width: 64px;
    height: 64px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 2rem; */
  }

  .header {
    font-size: 1.75rem;
    font-family: "MontSemiBold", sans-serif;
    color: var(--clr-primary-1);
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
      font-size: 1.6rem;
    }
  }
`;

export default HomeSectionAA;
