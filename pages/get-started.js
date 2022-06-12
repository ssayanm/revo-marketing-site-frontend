import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import Meta from "../components/Meta";

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "25472727",
          formId: "2e48dd4d-3794-438e-8ee3-5f7a00abf1dc",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <>
      <Meta title="Get Started" />
      <Wrapper>
        <Row gutter={[32, 32]} justify="center" align="middle">
          <Col sm={24} md={12} lg={8} data-aos="fade-up">
            <div className="box">
              <div className="contenta">
                <h1 className="title">Let's Go!</h1>
              </div>

              <div id="hubspotForm" data-aos="fade-up"></div>
            </div>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 2rem 1rem;
  font-family: "Mont";
  font-size: 1rem;

  .box {
    box-shadow: var(--dark-shadow);
    padding: 2rem 1rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    background-color: var(--clr-white);
    border: 1px solid var(--clr-primary-1);
  }

  .hs-button {
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 0.75rem 2rem;
    font-size: 1.2rem;

    display: block;
    font-family: "MontSemiBold";
    transition: var(--transition);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    border-color: transparent;
    margin: 2rem auto 0 auto;

    &:hover {
      color: var(--clr-black);
      background: var(--clr-white);
    }
  }

  input[type="text"],
  input[type="email"],
  select {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid var(--clr-primary-1);
    border-radius: 4px;
    box-sizing: border-box;
    margin: 1rem 0;
  }

  .title {
    text-align: center;
  }

  @media (min-width: 992px) {
    padding: 2rem 2rem 5rem 2rem;
    font-size: 1.2rem;
    .box {
      padding: 3rem;
    }

    .hs-button {
    }
  }
`;

export default HubspotContactForm;
