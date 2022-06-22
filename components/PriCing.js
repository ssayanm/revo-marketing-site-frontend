import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { Col, Collapse, Row, Table } from "antd";
import { GoPrimitiveDot } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { featuresPrice } from "../utils/constants";
import { GoDash } from "react-icons/go";
import ReactMarkdown from "react-markdown";

const { Panel } = Collapse;

function callback(key) {
  // console.log(key);
}

const PriCing = ({ pricing }) => {
  const {
    pageHeading,
    dtcBoxHeading,
    dtcHeading,
    dtcsubHeading,
    dtcFeatures,
    dtcButtonText,
    dtcButtonLink,
    brandsBoxHeading,
    brandsHeading,
    brandssubHeading,
    brandsFeatures,
    brandsButtonText,
    brandsButtonLink,
    enterpriseBoxHeading,
    enterpriseHeading,
    enterprisesubHeading,
    enterpriseFeatures,
    enterpriseButtonText,
    enterpriseButtonLink,
  } = pricing.data.attributes;

  const columnsfordtc = [
    {
      title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: "65%",
    },
    {
      title: "for DTC",
      dataIndex: "dtc",
      key: "dtc",
      render: (text, record) => (
        <div key={record.id} className="text-center">
          {typeof record.dtc === "boolean" ? (
            record.dtc ? (
              <GoPrimitiveDot className="greendot" />
            ) : (
              <GrClose />
            )
          ) : (
            record.dtc
          )}
        </div>
      ),
    },
  ];

  const columnsforbrands = [
    {
      title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: "65%",
    },

    {
      title: "for Brands",
      dataIndex: "brands",
      key: "brands",
      render: (text, record) => (
        <div key={record.id} className="text-center">
          {typeof record.brands === "boolean" ? (
            record.brands ? (
              <GoPrimitiveDot className="greendot" />
            ) : (
              <GrClose />
            )
          ) : (
            record.brands
          )}
        </div>
      ),
    },
  ];

  const columnsforenterprise = [
    {
      title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: "65%",
    },

    {
      title: "for Enterprise",
      dataIndex: "enterprise",
      key: "enterprise",
      render: (text, record) => (
        <div key={record.id} className="text-center">
          {typeof record.enterprise === "boolean" ? (
            record.enterprise ? (
              <GoPrimitiveDot className="greendot" />
            ) : (
              <GrClose />
            )
          ) : (
            record.enterprise
          )}
        </div>
      ),
    },
  ];

  return (
    <Wrapper>
      <h1 className="title text-center ">{pageHeading}</h1>
      <div className="section-center space1">
        <Row gutter={[32, 32]} justify="center" align="middle">
          <Col sm={24} md={12} lg={8} data-aos="fade-up">
            <div className="box first">
              <h5>{dtcBoxHeading}</h5>
              <h3>{dtcHeading}</h3>
              <p>{dtcsubHeading}</p>
              <div className="features">
                <ReactMarkdown children={dtcFeatures} />
              </div>

              <Link href={`/${dtcButtonLink}`}>
                <a className="btn">{dtcButtonText}</a>
              </Link>
              <Collapse
                defaultActiveKey={["10"]}
                onChange={callback}
                bordered={false}
                expandIcon={({ isActive }) => (
                  <GoDash rotate={isActive ? 90 : 0} />
                )}
                className="site-collapse-custom-collapse onlymobile"
              >
                <Panel header="Hide plan features" key="10">
                  <Table
                    dataSource={featuresPrice}
                    columns={columnsfordtc}
                    pagination={false}
                    className="onlymobile"
                  />
                </Panel>
              </Collapse>
            </div>
          </Col>
          <Col sm={24} md={12} lg={8} data-aos="zoom-in-up">
            <div className="box boxmiddle">
              <h5>{brandsBoxHeading}</h5>
              <h3>{brandsHeading}</h3>
              <p>{brandssubHeading}</p>

              <div className="features">
                <ReactMarkdown children={brandsFeatures} />
              </div>

              <Link href={`/${brandsButtonLink}`}>
                <a className="btn">{brandsButtonText}</a>
              </Link>

              <Collapse
                defaultActiveKey={["12"]}
                onChange={callback}
                bordered={false}
                expandIcon={({ isActive }) => (
                  <GoDash rotate={isActive ? 90 : 0} />
                )}
                className="site-collapse-custom-collapse onlymobile"
              >
                <Panel header="Hide plan features" key="12">
                  <Table
                    dataSource={featuresPrice}
                    columns={columnsforbrands}
                    pagination={false}
                    className="onlymobile"
                  />
                </Panel>
              </Collapse>
            </div>
          </Col>
          <Col sm={24} md={12} lg={8} data-aos="fade-up">
            <div className="box">
              <h5>{enterpriseBoxHeading}</h5>
              <h3>{enterpriseHeading}</h3>
              <p>{enterprisesubHeading}</p>
              <div className="features">
                <ReactMarkdown children={enterpriseFeatures} />
              </div>

              <span className="btnn">
                <Link href={`/${enterpriseButtonLink}`}>
                  <a className="btn">{enterpriseButtonText}</a>
                </Link>
              </span>
              <Collapse
                defaultActiveKey={["1"]}
                onChange={callback}
                bordered={false}
                expandIcon={({ isActive }) => (
                  <GoDash rotate={isActive ? 90 : 0} />
                )}
                className="site-collapse-custom-collapse onlymobile"
              >
                <Panel header="Hide plan features" key="1">
                  <Table
                    dataSource={featuresPrice}
                    columns={columnsforenterprise}
                    pagination={false}
                    className="onlymobile"
                  />
                </Panel>
              </Collapse>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2em 1rem;
  font-family: "Mont";
  text-align: center;

  .title {
    text-align: center;
  }

  .site-collapse-custom-collapse {
    margin-top: 1rem;
    color: var(--clr-black);
  }

  .ant-table-thead > tr > th {
    font-family: "MontBold";
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    color: var(--clr-primary-1);
    font-family: "MontBold";
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  .featuretitle {
    p {
      text-align: left;
      color: var(--clr-black);
    }
  }

  .ant-table-thead > tr > th {
    :not(:first-child) {
      text-align: center;
    }
  }

  .box {
    box-shadow: var(--dark-shadow);
    padding: 2rem 1rem;
    border-radius: 1rem;

    margin-bottom: 2rem;
    background-color: var(--clr-white);

    h5 {
      font-size: 1.25rem;
      font-family: "MontSemiBold";
    }
    h3 {
      font-size: 1.75rem;
      font-family: "MontSemiBold";
      color: var(--clr-primary-1);
    }

    ul {
      margin: 0 auto;
      width: 15rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      word-break: break-word;
    }
    .features {
      text-align: left;
      width: 17rem;
      margin: 0 auto;
      margin-top: 2rem;
      margin-bottom: 2rem;

      p {
        font-size: 1rem;
        font-family: "Mont";
        color: var(--clr-black);
      }
    }
    pre,
    code {
      /* font-size: 1rem; */
      font-family: "Mont";

      display: contents;
      word-break: break-all;
    }
    li {
      text-align: left;
      font-size: 1rem;
    }
    p {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 992px) {
    padding: 2rem 2rem 5rem 2rem;

    .box {
      box-shadow: var(--dark-shadow);
      margin-top: 2rem;
      padding: 3rem 1rem;
      height: 39rem;
      background-color: var(--clr-white);
      position: relative;

      h5 {
        font-size: 1.75rem;
      }
      h3 {
        font-size: 2.75rem;
      }

      p {
        font-size: 1.35rem;
        color: var(--clr-light);
      }

      .features {
        p {
          font-size: 1.2rem;
        }
      }

      ul {
        margin: 0 auto;
        width: 18rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      li {
        text-align: left;
        font-size: 1.3rem;
      }
      .btnn {
        position: absolute;
        right: 0;
        bottom: 3rem;
        left: 0;
      }
    }

    .boxmiddle {
      height: 43rem;
    }

    .title {
      text-align: center;
    }
  }
`;

export default PriCing;
