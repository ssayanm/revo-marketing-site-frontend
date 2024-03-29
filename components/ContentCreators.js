import styled from "styled-components";
import Image from "next/image";
import { Row, Col } from "antd";
import useSWR from "swr";
import Loading from "./Loading";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ContentCreators = () => {
  const { data, error } = useSWR(
    `${process.env.url}/api/home-v1/?populate=*`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <Wrapper>
      <Row
        gutter={[48, 48]}
        justify="center"
        align="middle"
        className="section"
      >
        <Col sm={24} md={12} data-aos="zoom-in">
          <Image
            alt="Revo Video"
            src={
              data.data.attributes.HomeSectionCBoxBimage.data.attributes.url
                ? data.data.attributes.HomeSectionCBoxBimage.data.attributes.url
                : "/images/paymentprocess.jpg"
            }
            // src="/images/paymentprocess.png"
            width={1000}
            height={625}
            objectFit="cover"
            // quality={100}
          />
        </Col>
        <Col sm={24} md={12} data-aos="fade-up">
          <h1 className="title">
            {data.data.attributes.HomeSectionCBoxBheading}
          </h1>

          <p>{data.data.attributes.HomeSectionCBoxBsubHeading}</p>
          <div className="onlydesktop">
            <Link href={`/${data.data.attributes.HomeSectionCBoxBbuttonLink}`}>
              <a className="btn btn-start">
                {" "}
                {data.data.attributes.HomeSectionCBoxBbutton}
              </a>
            </Link>
          </div>
          <center className="onlymobile">
            <Link href={`/${data.data.attributes.HomeSectionCBoxBbuttonLink}`}>
              <a className="btn btn-start">
                {" "}
                {data.data.attributes.HomeSectionCBoxBbutton}
              </a>
            </Link>
          </center>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-black);
  color: var(--clr-white);
  padding: 0rem;

  .btn-start {
    margin-top: 2rem;
    background: var(--clr-white);
    color: var(--clr-black);

    &:hover {
      background: var(--clr-primary-1);
      color: var(--clr-white);
    }
  }
  .title {
    text-align: center;
    color: var(--clr-white);
  }

  .section {
    padding: 2rem 0rem 1rem;
  }

  p {
    margin-top: 0rem;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0rem;
    color: var(--clr-white);
  }

  .title {
    font-size: 2rem;
  }

  .iconbar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 2rem;
      height: 2rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 992px) {
    padding: 0rem 2rem;

    .section {
      padding: 3rem 6rem 0;
    }

    .section .ant-col {
      padding: 1rem 0;
    }

    p {
      text-align: left;
      margin-bottom: 0rem;
      margin-top: 0rem;
    }

    .title {
      text-align: left;
      font-size: 3rem;
    }

    .iconbar {
      justify-content: flex-start;
      align-items: baseline;
      flex-direction: row;
    }
  }
`;

export default ContentCreators;
