import styled from "styled-components";
import Image from "next/image";
import { Row, Col } from "antd";

const InspirationSection = ({ channels }) => {
  // const featuredChannels1 = channels.data.map(
  //   (items) => items.attributes.title
  // );

  return (
    <Wrapper>
      <div className="section-center">
        <div className="content">
          <h3 className="title">Featured Channels</h3>
        </div>
        <Row gutter={[32, 24]}>
          {channels.data.map((channel) => {
            const { title, subTitle, link, image } = channel.attributes;
            return (
              <Col
                sm={24}
                md={12}
                lg={8}
                key={channel.id}
                data-aos="zoom-in-up"
              >
                <div className="box">
                  <a href={`${link}`} target="_blank">
                    <Image
                      alt={title}
                      src={
                        image.data.attributes.url
                          ? image.data.attributes.url
                          : "/images/Loading_i.gif"
                      }
                      width={600}
                      height={359}
                      objectFit="contain"
                      quality={100}
                    />
                  </a>

                  <div className="textBox">
                    <h4>{title}</h4>
                    <h5>{subTitle}</h5>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <center className="space"></center>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 1rem;
  font-family: "MontSemiBold";
  background-image: url("/images/circle.png"), url("/images/circle.png");
  background-position: 0% 0%, -8% 100%;
  background-repeat: no-repeat, no-repeat;

  .title {
    text-align: center;
    font-size: 2rem;
    font-family: "MontSemiBold";
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0.5rem 0;

    :hover {
      transition: var(--transition);
      opacity: 0.751;
    }
  }

  .textBox {
    display: inline-block;
    margin-top: 1rem;
    text-align: center;
    h4,
    h5 {
      margin-bottom: 0.2rem;
      font-family: "MontSemiBold";
    }
  }

  @media (min-width: 992px) {
    padding: 4rem 2rem;
    background-position: 120% 5%, -5% 95%;

    .title {
      text-align: left;
      font-size: 2.5rem;
    }

    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1.3rem;
    }
    .content {
      width: 60rem;
    }

    .box {
      /* margin: 2rem 0 4rem 0; */
      justify-content: flex-start;
    }

    .textBox {
      margin-left: 0.5rem;
      text-align: left;
    }
  }
`;

export default InspirationSection;
