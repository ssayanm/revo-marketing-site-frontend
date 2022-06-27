import Link from "next/link";
import styled from "styled-components";
import { Row, Col } from "antd";

const HomeSectionE = ({ home }) => {
  const {
    HomeSectionEheading,
    HomeSectionEsubheading,

    HomeSectionEbutton,
    HomeSectionEbuttonLink,
  } = home.data.attributes;

  return (
    <Wrapper>
      <Row gutter={16} justify="center" align="middle" className="mainsection">
        <Col data-aos="fade-up">
          <h3 className="title">{HomeSectionEheading}</h3>
          <p>{HomeSectionEsubheading}</p>
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

  /* .mainsection {
    background-color: rgba(67, 214, 106, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  } */

  .title {
    text-align: center;
  }
  p {
    text-align: center;
    font-family: "MontSemiBold", sans-serif;
    font-size: 1.75rem;
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;
    p {
      font-size: 2.3rem;
    }
  }
`;

export default HomeSectionE;
