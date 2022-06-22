import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";
import { GrClose } from "react-icons/gr";
// import { featuresPrice } from "../utils/constants";
import { Table } from "antd";
import Image from "next/image";
import Link from "next/link";

const Price = ({ pricing, features }) => {
  const { pricingImage, priceImageLink } = pricing.data.attributes;

  const featuresPrice = features.data.map((items) => items.attributes);

  const columnsfordesktop = [
    {
      title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: "40%",
    },
    {
      title: "for DTC",
      dataIndex: "dtc",
      key: "dtc",
      render: (text, record) => (
        <div className="text-center">
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
    {
      title: "for Brands",
      dataIndex: "brands",
      key: "brands",
      render: (text, record) => (
        <div className="text-center">
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
    {
      title: "for Enterprise",
      dataIndex: "enterprise",
      key: "enterprise",
      render: (text, record) => (
        <div className="text-center">
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
    <>
      <Wrapper>
        <Table
          dataSource={featuresPrice}
          columns={columnsfordesktop}
          pagination={false}
          className="onlydesktop"
          id={1}
        />
      </Wrapper>
      <center className="space">
        <Link href={`/${priceImageLink}`}>
          <a>
            <Image
              alt="Revo Video"
              src={
                pricingImage.data.attributes.url
                  ? pricingImage.data.attributes.url
                  : "/images/pricingim.png"
              }
              width={250}
              height={252}
              objectFit="cover"
            />{" "}
          </a>
        </Link>
      </center>
    </>
  );
};

const Wrapper = styled.section`
  box-shadow: var(--dark-shadow);
  width: 90vw;
  border-radius: 1rem;
  font-size: 0.75rem;
  /* margin: 0 auto; */
  background-color: var(--clr-white);
  font-family: "Mont";

  @media (min-width: 992px) {
    width: 80vw;
    font-size: 1.2rem;
    padding: 2rem;
    margin: 0 auto;
    margin-bottom: 2rem;

    .ant-table-thead > tr > th {
      font-family: "MontBold";
      font-size: 1.1rem;

      :not(:first-child) {
        text-align: center;
      }
    }
  }
`;
export default Price;
