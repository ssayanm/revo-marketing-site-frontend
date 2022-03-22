import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const PriceList = ({ title, info, image, id }) => {
  return (
    <Wrapper>
      <div className="container">
        <Image
          alt={title}
          src={image.url}
          width={800}
          height={450}
          // className="accent-img"
        />
      </div>
      <footer>
        <h4>{title}</h4>
        <p>
          <ReactMarkdown children={info} />
        </p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    background: var(--clr-white);
    /* margin-top: 1rem; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    line-height: 2;
    padding: 2rem;
  }
  footer h5 {
    font-weight: bold;
  }

  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    /* color: var(--clr-primary-5); */
    letter-spacing: var(--spacing);
  }
`;
export default PriceList;
