import React, { useState } from "react";
import styled from "styled-components";
import { categories } from "../utils/constants";
import Select from "react-select";
import { Tabs } from "antd";

const { Items } = Tabs;

function callback(key) {
  // console.log(key);
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted #000",
    boxShadow: "none",
    fontSize: "1.2rem",
    background: "var(--clr-primary-1)",
    fontFamily: "MontBold",
    color: "var(--clr-white)",
    cursor: "pointer",
  }),
};

const Categories = () => {
  // const [value, setValue] = useState(0);

  // const { heading, subHeading } = howItWorks.data.attributes;

  // console.log(heading);

  const [selectedOption, setSelectedOption] = useState(categories[0]);

  return (
    <NavContainer>
      <h1 className="title text-center onlydesktop">Revo for</h1>

      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        centered="true"
        className="onlydesktop"
      >
        {categories.map((link, index) => {
          const { id, text, components } = link;
          return (
            <Items tab={text} key={id}>
              {components}
            </Items>
          );
        })}
      </Tabs>

      <div className="onlymobile navmob">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={categories}
          className="mobselect"
          styles={customStyles}
        />

        {selectedOption.components}
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin: 0 auto;
  /* padding: 2rem 0; */

  .navmob {
    width: 90vw;
    margin: 0 auto;
  }

  .css-qc6sy-singleValue {
    font-size: 1.2rem;
  }

  .ant-tabs-nav-wrap {
    border-radius: 3rem;
    background: var(--clr-primary-1);
    padding: 0.5rem;
    margin: 0 3rem;
  }
  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none;
  }

  .ant-tabs-tab {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.38);
    margin: 0 3rem;
    cursor: pointer;
    font-family: "MontSemiBold";
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--clr-white);
  }

  .ant-tabs-ink-bar {
    position: absolute;
    background: var(--clr-white);
    pointer-events: none;
  }

  .mobselect .css-1s2u09g-control {
    border-radius: 3rem;
    /* padding: 1rem; */
    box-shadow: none;
    font-size: 1.2rem;
    background: var(--clr-primary-1);
    font-family: "MontBold";
    border: none;
    text-align: center;
    color: var(--clr-white);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;

    .css-tlfecz-indicatorContainer {
      color: var(--clr-white);
    }
    .css-1okebmr-indicatorSeparator {
      display: none;
    }

    .css-qc6sy-singleValue {
      color: var(--clr-white);
    }

    #react-select-2-listbox {
      background: red !important;
    }
  }

  select::-ms-expand {
    display: none; /* Remove default arrow in Internet Explorer 10 and 11 */
  }

  @media (min-width: 992px) {
    .active-btn {
      border-bottom: 1px solid var(--clr-white);
      opacity: 1;
    }
    .ant-tabs-tab {
      font-size: 1.75rem;
    }
  }
`;

export default Categories;
