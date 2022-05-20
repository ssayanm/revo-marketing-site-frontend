import Image from "next/image";
import styled from "styled-components";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";

const HomeSectionB = ({ home }) => {
  const {
    HomeSectionBheading,
    HomeSectionBimage,
    HomeSectionBiconsHeadingA,
    HomeSectionBiconsDescA,
    HomeSectionBiconsHeadingB,
    HomeSectionBiconsDescB,
    HomeSectionBiconsHeadingC,
    HomeSectionBiconsDescC,
    HomeSectionBiconsHeadingD,
    HomeSectionBiconsDescD,
  } = home.data.attributes;
  return (
    <Wrapper>
      <div className="section-center">
        <Row gutter={16}>
          <Col data-aos="fade-up">
            <h3>{HomeSectionBheading}</h3>
          </Col>
        </Row>
        <Row gutter={[48, 32]}>
          <Col sm={24} md={12}>
            <Row gutter={[48, 32]}>
              <Col sm={24} md={12} data-aos="fade-up">
                <Image
                  alt="revo"
                  src="/images/cart.png"
                  width={49}
                  height={49}
                  objectFit="cover"
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsfrG0HgAGlwKRsbTehgAAAABJRU5ErkJggg=="
                />
                <ReactMarkdown
                  children={HomeSectionBiconsHeadingA}
                  className="heading"
                />

                <p className="desc">{HomeSectionBiconsDescA}</p>
              </Col>
              <Col sm={24} md={12} data-aos="fade-up">
                {" "}
                <Image
                  alt="revo"
                  src="/images/eng.png"
                  width={49}
                  height={49}
                  objectFit="cover"
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsfrG0HgAGlwKRsbTehgAAAABJRU5ErkJggg=="
                />
                <ReactMarkdown
                  children={HomeSectionBiconsHeadingB}
                  className="heading"
                />
                <p className="desc">{HomeSectionBiconsDescB}</p>
              </Col>
            </Row>
            <Row gutter={[48, 32]}>
              <Col sm={24} md={12} className="space" data-aos="fade-up">
                {" "}
                <Image
                  alt="revo"
                  src="/images/dollar.png"
                  width={49}
                  height={49}
                  objectFit="cover"
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsfrG0HgAGlwKRsbTehgAAAABJRU5ErkJggg=="
                />
                <ReactMarkdown
                  children={HomeSectionBiconsHeadingC}
                  className="heading"
                />
                <p className="desc">{HomeSectionBiconsDescC}</p>
              </Col>
              <Col sm={24} md={12} className="space" data-aos="fade-up">
                <Image
                  alt="revo"
                  src="/images/analytics.png"
                  width={83}
                  height={41}
                  objectFit="cover"
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsfrG0HgAGlwKRsbTehgAAAABJRU5ErkJggg=="
                />
                <ReactMarkdown
                  children={HomeSectionBiconsHeadingD}
                  className="heading"
                />

                <p className="desc">{HomeSectionBiconsDescD}</p>
              </Col>
            </Row>
          </Col>
          <Col sm={24} md={12} className="imagecon" data-aos="zoom-in">
            <Image
              alt="revo"
              src={HomeSectionBimage.data.attributes.formats.large.url}
              // src="/images/features.png"
              width={1000}
              height={625}
              objectFit="cover"
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsfrG0HgAGlwKRsbTehgAAAABJRU5ErkJggg=="
            />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 2rem;
  background: var(--clr-black);

  .imagecon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 2.7rem;
  }

  .heading {
    font-size: 1.75rem;
    margin: 1rem 0;
  }

  .desc {
    font-size: 1.2rem;
  }

  h3,
  h4 {
    color: var(--clr-white);
  }
  .container {
    padding: 0 2rem;
    text-align: center;
  }

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    /* line-height: 1.3; */
    color: var(--clr-white);
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;

    .header {
      padding-left: 4rem;
    }

    .services-center {
      gap: 2.5rem;
    }

    h3 {
      font-size: 4.3rem;
    }

    .heading {
      font-size: 2rem;
    }

    .desc {
      font-size: 1.25rem;
    }
  }
`;
export default HomeSectionB;
