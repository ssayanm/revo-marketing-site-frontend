import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Row, Col } from "antd";
import { GoPrimitiveDot } from "react-icons/go";

const HomeSectionC = ({ home }) => {
  const {
    HomeSectionCheading,
    HomeSectionCimage,
    HomeSectionCsubheading,
    HomeSectionCbulletA,
    HomeSectionCbulletAdesc,
    HomeSectionCbulletB,
    HomeSectionCbulletBdesc,
    HomeSectionCbulletC,
    HomeSectionCbulletCdesc,
  } = home.data.attributes;

  return (
    <Wrapper>
      <Row gutter={16} justify="center" align="middle">
        <Col sm={24} md={16} xl={12} data-aos="zoom-in">
          <div className="onlydesktop">
            <Image
              alt={HomeSectionCheading}
              src={
                HomeSectionCimage.data.attributes.formats.large.url
                  ? HomeSectionCimage.data.attributes.formats.large.url
                  : "/images/Revo_image_homepage_Section_3.png"
              }
              width={1000}
              height={625}
              objectFit="cover"
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsfrG0HgAGlwKRsbTehgAAAABJRU5ErkJggg=="
            />
          </div>
        </Col>
        <Col sm={24} md={16} xl={12} data-aos="fade-up">
          <article className="content">
            <h3 className="title">{HomeSectionCheading}</h3>
            <p>{HomeSectionCsubheading}</p>

            <div className="greeniconbar">
              <GoPrimitiveDot className="greendot" />
              <h5>{HomeSectionCbulletA}</h5>
            </div>

            <p>{HomeSectionCbulletAdesc}</p>
            <div className="greeniconbar ">
              <GoPrimitiveDot className="greendot" />

              <h5>{HomeSectionCbulletB}</h5>
            </div>

            <p className="">{HomeSectionCbulletBdesc}</p>
            <div className="greeniconbar">
              <GoPrimitiveDot className="greendot" />

              <h5>{HomeSectionCbulletC}</h5>
            </div>

            <p>{HomeSectionCbulletCdesc}</p>
          </article>
          <div className="onlymobile">
            <Image
              alt={HomeSectionCheading}
              src={
                HomeSectionCimage.data.attributes.formats.large.url
                  ? HomeSectionCimage.data.attributes.formats.large.url
                  : "/images/Revo_image_homepage_Section_3.png"
              }
              width={1000}
              height={625}
              objectFit="cover"
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsfrG0HgAGlwKRsbTehgAAAABJRU5ErkJggg=="
            />
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 2rem;

  background-image: url("/images/circle.png");
  background-position: -16% 50%;
  background-repeat: no-repeat;

  .title {
    text-align: center;
  }

  h5 {
    font-size: 1.5rem;
    font-family: "MontSemiBold", sans-serif;
    text-align: center;
  }
  p {
    /* max-width: 45em; */
    font-family: "MontSemiBold", sans-serif;
    text-align: center;
    font-size: 1.2rem;
  }
  .icon {
    width: 64px;
    height: 64px;
  }

  .greeniconbar {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* flex-direction: column; */

    .greendot {
      width: 1.5rem;
      height: 1.25rem;
    }
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;

    .greeniconbar {
      justify-content: flex-start;
      align-items: baseline;
      flex-direction: row;
    }
    .title {
      text-align: left;
    }

    h5 {
      font-size: 1.75rem;
      text-align: left;
    }
    p {
      text-align: left;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .content {
      padding-left: 5rem;
      padding-right: 4rem;
    }

    .left-space {
      padding-left: 2rem;
    }
  }
`;

export default HomeSectionC;
