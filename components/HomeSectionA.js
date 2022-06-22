import styled from "styled-components";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
import { Row, Col } from "antd";

const HomeSectionA = ({ home }) => {
  const { HomeSectionAtext, HomeSectionAimage } = home.data.attributes;
  return (
    <Wrapper>
      <Row gutter={16} justify="center" align="middle">
        <Col sm={24} md={12} xl={12} data-aos="fade-up">
          <BsPlayCircleFill className="icon" />
          <p>{HomeSectionAtext}</p>
        </Col>
        <Col sm={24} md={12} xl={10} data-aos="fade-up">
          {" "}
          <Image
            alt="Revo Video"
            src={
              HomeSectionAimage.data.attributes.formats.large.url
                ? HomeSectionAimage.data.attributes.formats.large.url
                : "/images/Revo_image_homepage_Section_1.png"
            }
            width={1000}
            height={625}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsfrG0HgAGlwKRsbTehgAAAABJRU5ErkJggg=="
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 2rem;
  background-image: url("/images/circle.png");
  background-position: 0% 50%;
  background-repeat: no-repeat;
  margin: 0 auto;

  p {
    /* max-width: 45em; */
    font-family: "MontSemiBold", sans-serif;
    margin-top: 2rem;
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  .icon {
    width: 64px;
    height: 64px;
    text-align: center;
  }
  @media (min-width: 992px) {
    background-position: 120% 50%;
    padding: 9rem 2rem;

    p {
      font-size: 2.2rem;
      text-align: left;
      margin-bottom: 0rem;
    }
  }
`;

export default HomeSectionA;
