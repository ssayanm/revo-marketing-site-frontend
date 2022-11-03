import Link from "next/link";
import styled from "styled-components";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";
import { Carousel } from "antd";
import { BsChatRightQuote } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const contentStyle = {
  //   height: "160px",
  //   color: "var(--clr-primary-1)",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
};

const HomeSectionTestimonials = ({ homev1 }) => {
  const { HomeSectionEheading, HomeSectionEbutton, HomeSectionEbuttonLink } =
    homev1.data.attributes;

  return (
    <Wrapper>
      <Row gutter={16} justify="center" align="middle">
        <Col sm={24} md={16} xl={16} data-aos="fade-up">
          <Carousel dots="true" effect="fade">
            <div>
              <div className="title">
                "This is an amazing tool. It is definitely the future of eComm.
                <span className="sub">
                  <br className="onlymobile" />- happy customer
                </span>
                "
              </div>
            </div>
            <div>
              <span className="title">"</span>
              <span className="title">Lorem Lorem</span>
              <span className="sub">- happy customer</span>
              <span className="title">"</span>
            </div>
            <div>
              <h3 className="title">Lorem Lorem</h3>
            </div>
            <div>
              <h3 className="title">Lorem Lorem</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background: var(--clr-primary-1); */
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

  .sub {
    font-size: 1.2rem;
  }

  p {
    text-align: center;
    font-family: "MontSemiBold", sans-serif;
    font-size: 1.75rem;
  }

  .ant-carousel .slick-dots li.slick-active {
  }
  .ant-carousel .slick-dots li.slick-active button {
    background: var(--clr-green-light);
  }

  .ant-carousel .slick-dots li button {
    margin-top: 1rem;
    background: var(--clr-light);
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .ant-carousel .slick-dots {
    top: 18rem;
  }

  .ant-carousel .slick-dots li {
    margin-right: 0.5rem;
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
    .sub {
      font-size: 1.5rem;
      padding-left: 5rem;
      text-align: right;
    }
    p {
      font-size: 2.3rem;
    }

    .ant-carousel .slick-dots {
      top: 15rem;
    }
  }
`;

export default HomeSectionTestimonials;
