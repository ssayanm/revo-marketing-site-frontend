import Link from "next/link";
import styled from "styled-components";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";

const HomeSectionE = ({ homev1 }) => {
  const {
    HomeSectionEheading,
    HomeSectionEsubheading,

    HomeSectionEbutton,
    HomeSectionEbuttonLink,
  } = homev1.data.attributes;

  return (
    <Wrapper>
      <Row gutter={16} justify="center" align="middle">
        <Col data-aos="fade-up">
          {/* <ReactMarkdown children={HomeSectionEheading} className="title" />*/}
          <h3 className="title">
            Unleash the power of social selling <br></br>anywhere and everywhere
          </h3>
          <center>
            <Link href={`/${HomeSectionEbuttonLink}`}>
              <a className="btn"> {HomeSectionEbutton}</a>
            </Link>
          </center>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-1);
  /* background-image: url("/images/Revo_BG_3.png");
  background-position: -16% 120%;
  background-repeat: no-repeat;
  position: relative; */
  /* background-image: url("/images/Revo_BG_3.png");
  background-position: center center; */
  margin: 0 auto;
  padding: 6rem 2rem;

  .title p {
    margin-bottom: 0rem;
    font-family: "MontBold", sans-serif;
    font-size: 2.2rem;
  }

  p {
    text-align: center;
    font-family: "MontSemiBold", sans-serif;
    font-size: 1.75rem;
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;
    .title p {
      font-size: 3.5rem;
    }

    .title {
      margin-bottom: 2rem;
      text-align: center;
    }
    p {
      font-size: 2.3rem;
    }
  }
`;

export default HomeSectionE;
