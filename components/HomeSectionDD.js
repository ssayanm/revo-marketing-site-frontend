import styled from "styled-components";
import { Row, Col } from "antd";

const HomeSectionDD = ({ homev1 }) => {
  const {
    HomeSectionDheading,
    HomeSectionDboxA,
    HomeSectionDboxALink,
    HomeSectionDboxB,
    HomeSectionDboxBLink,
    HomeSectionDboxC,
    HomeSectionDboxCLink,
  } = homev1.data.attributes;
  return (
    <Wrapper>
      <div className="section-center">
        <Row gutter={16} justify="center" align="middle">
          <Col data-aos="fade-up">
            <h1 className="title1">{HomeSectionDheading}</h1>
          </Col>
          <Row className="space" data-aos="fade-up">
            <Col sm={24} md={12} xl={12}>
              <p className="info">
                <a
                  href={HomeSectionDboxALink}
                  // href="https://www.pymnts.com/news/ecommerce/2022/revo-videos-mission-to-make-every-video-shoppable-with-just-one-click/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {HomeSectionDboxA}
                </a>
              </p>
            </Col>
            <Col sm={24} md={12} xl={12}>
              <p className="info">
                <a
                  href={HomeSectionDboxBLink}
                  // href="https://www.prnewswire.com/news-releases/revo-video-launches-its-new-all-in-one-shopping-experience-platform-on-the-reachtv-network-301611081.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {HomeSectionDboxB}
                </a>
              </p>
            </Col>
            <Col sm={24} md={24} xl={24}>
              <p className="info">
                <a
                  href={HomeSectionDboxCLink}
                  // href="https://www.prnewswire.com/news-releases/revo-video-launches-its-new-all-in-one-shopping-experience-platform-on-the-reachtv-network-301611081.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {HomeSectionDboxC}
                </a>
              </p>
            </Col>
          </Row>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-white);
  padding: 3rem 2rem 2rem;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 1.75rem;
  }

  .header {
    font-size: 1.75rem;
    font-family: "MontSemiBold", sans-serif;
    color: var(--clr-white);
    margin-bottom: 0.5rem;
  }

  .info {
    border: 1px solid var(--clr-black);
    font-size: 1.2rem;
    padding: 2rem 0.75rem;

    a {
      font-family: "MontSemiBold", sans-serif;
      color: var(--clr-black);
      :hover {
        color: var(--clr-primary-1);
      }
    }
  }

  .title1 h1,
  h1 {
    margin-bottom: 0rem;
    font-family: "MontBold", sans-serif;
    font-size: 2.2rem;
  }

  @media (min-width: 992px) {
    padding: 6rem 2rem;
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
      /* margin-bottom: 2rem; */
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
      font-size: 30px;
    }

    .info {
      font-size: 25px;
      padding: 3rem;
    }
  }
`;

export default HomeSectionDD;
