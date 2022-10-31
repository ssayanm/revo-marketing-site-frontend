import Link from "next/link";
import styled from "styled-components";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";

const HomeSectionE = ({ homev1 }) => {
  const { HomeSectionEheading, HomeSectionEbutton, HomeSectionEbuttonLink } =
    homev1.data.attributes;

  return (
    <Wrapper>
      <Row gutter={16} justify="center" align="middle">
        <Col data-aos="fade-up">
          <ReactMarkdown children={HomeSectionEheading} className="title" />
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
  margin: 0 auto;
  padding: 6rem 2rem;
  .title {
    text-align: center;
  }

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
