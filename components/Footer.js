import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaPlay } from "react-icons/fa";
import styled from "styled-components";
import { footerLinks, footerLinksAlt, social } from "../utils/constants";

const Footer = () => {
  return (
    <Wrapper>
      <div className="foot">
        <div data-aos="zoom-in">
          <Link href="/">
            <a>
              <Image
                alt="Revo Video"
                src="/images/Revologowhite.svg"
                width={171}
                height={67}
                quality={100}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
        <div className="onlymobile" style={{ textAlign: "right" }}>
          <FaPlay className="icon" />
        </div>

        <div>
          <ul className="nav-links">
            {footerLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a>{text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="social-icons onlymobile">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a href={url} target="_blank">
                      {icon}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="onlymobile">
          <ul className="nav-links">
            {footerLinksAlt.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a>{text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="onlydesktop">
          <ul className="nav-links">
            {footerLinksAlt.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a>{text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="onlydesktop">
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a href={url} target="_blank">
                      {icon}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <center>
          {" "}
          <div className="onlydesktop ">
            <FaPlay className="icon" data-aos="zoom-in" />
          </div>
        </center>
      </div>
      <hr />
      <p>
        Copyright &copy; {new Date().getFullYear()} Borderfree Technologies Inc.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-black);

  padding: 5rem 2rem 2rem 2rem;
  color: var(--clr-white);
  .foot {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem;
  }
  hr {
    color: var(--clr-white);
    border: 1px solid #fff;
    margin: 2rem 0;
  }

  p {
    color: var(--clr-white);
    text-align: center;
  }

  .icon {
    color: var(--clr-primary-1);
    width: 34px;
    height: 34px;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .nav-links {
    /* display: flex; */
    justify-content: flex-end;
    li {
      margin: 0.5rem 0.5rem;
    }
    a {
      color: var(--clr-white);
      font-size: 1rem;

      &:hover {
        border-bottom: 2px solid var(--clr-primary-1);
      }
    }
  }
  @media (min-width: 992px) {
    .foot {
      padding: 4rem;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: 1rem;

      /* justify-items: center; */
      align-items: center;
    }

    .nav-links {
      /* display: flex; */
      justify-content: flex-end;
      li {
        margin: 0.5rem 0.5rem;
      }
      a {
        color: var(--clr-white);
        font-size: 1.2rem;
      }
    }
  }
`;
export default Footer;
