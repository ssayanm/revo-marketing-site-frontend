import Link from "next/link";
import styled from "styled-components";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";
import { Carousel } from "antd";
import { BsChatRightQuote } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

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
          <Carousel dots="true" effect="fade" autoplay="true">
            <div className="text-center ">
              <p className="title">
                "StreamStyle (Revo Video) helped us in the digital
                transformation of our business making it easy for our
                consultants to convert prospects into customers. Automating most
                of the processes that used to happen manually saved a lot of
                time that our field can now invest in more revenue generating
                activities.”
              </p>
              <Image
                alt="Revo Video"
                src="/images/Fabio Fiorellino - Tocara.jpg"
                // src="/images/paymentprocess.png"
                width={150}
                height={150}
                objectFit="cover"
                className="testi"
                // quality={100}
              />
              <p className="sub">
                - Fabio Fiorellino <br /> Vice President, Digital, Tocara
              </p>
            </div>
            <div className="text-center ">
              <p className="title">
                "Using Revo Video's platform was a seamless experience as it was
                very intuitive, straightforward and easy to use. The live format
                is a great way to have an authentic discussion about products
                that allow our customers to ask questions and participate in
                real time.”
              </p>
              <Image
                alt="Revo Video"
                src="/images/Shannon Britt - Olura.jpg"
                // src="/images/paymentprocess.png"
                width={150}
                height={150}
                objectFit="cover"
                className="testi"
                // quality={100}
              />
              <p className="sub">
                - Shannon Britt <br /> CEO and Co-Founder, Olura
              </p>
            </div>
            <div className="text-center ">
              <p className="title">
                "This is a software you need to have if you are an e-commerce
                entrepreneur looking to bring in more sales.”
              </p>
              <Image
                alt="Revo Video"
                src="/images/Oyeta Kokoroko - Okoko Cosmetiques.jpg"
                // src="/images/paymentprocess.png"
                width={150}
                height={150}
                objectFit="cover"
                className="testi"
                // quality={100}
              />
              <p className="sub">
                - Oyéta Kokoroko <br /> Founder & CEO, OKOKO Cosmétiques Inc.
              </p>
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
    margin-bottom: 2rem;
    font-family: "MontSemiBold", sans-serif;
    font-size: 1.75rem;
    text-align: center;
  }

  .sub {
    font-size: 1.2rem;
    margin: 2rem 0;
  }

  .testi {
    border-radius: 50%;
    text-align: center;
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
    /* top: 18rem; */
  }

  .ant-carousel .slick-dots li {
    margin-right: 0.5rem;
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;
    .title {
      font-size: 1.75rem;
    }

    .sub {
      font-size: 1.25rem;
      /* padding-left: 5rem; */
      /* text-align: right; */
    }

    .ant-carousel .slick-dots {
      /* top: 15rem; */
    }
  }
`;

export default HomeSectionTestimonials;
