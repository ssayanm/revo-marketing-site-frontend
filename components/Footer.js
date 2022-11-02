import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPlay,
} from "react-icons/fa";
import styled from "styled-components";
import useSWR from "swr";
import Loading from "./Loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Footer = () => {
  const { data, error } = useSWR(
    `${process.env.url}/api/footer-links?populate=*`,
    fetcher
  );

  // {
  //   console.log(data.data[1].attributes.text);
  // }

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );
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
            <li>
              <Link href={data.data[0].attributes.url}>
                <a target="_blank">{data.data[0].attributes.text}</a>
              </Link>
            </li>
            <li>
              <Link href={data.data[1].attributes.url}>
                <a target="_blank">{data.data[1].attributes.text}</a>
              </Link>
            </li>
          </ul>
          <div className="onlymobile">
            <ul className="nav-links">
              <li>
                <Link href={data.data[2].attributes.url}>
                  <a>{data.data[2].attributes.text}</a>
                </Link>
              </li>
              <li>
                <Link href={data.data[3].attributes.url}>
                  <a>{data.data[3].attributes.text}</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="onlymobile">
            <ul className="social-icons">
              <li>
                <Link href={data.data[4].attributes.url}>
                  <a target="_blank">
                    <FaLinkedin className="social-icon "></FaLinkedin>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/revovideo">
                  <a target="_blank">
                    <FaFacebookSquare className="social-icon "></FaFacebookSquare>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/revovideo/">
                  <a target="_blank">
                    <FaInstagramSquare className="social-icon "></FaInstagramSquare>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="onlydesktop">
          <ul className="nav-links">
            <li>
              <Link href={data.data[2].attributes.url}>
                <a>{data.data[2].attributes.text}</a>
              </Link>
            </li>
            <li>
              <Link href={data.data[3].attributes.url}>
                <a>{data.data[3].attributes.text}</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="onlydesktop">
          <ul className="social-icons">
            <li>
              <Link href={data.data[4].attributes.url}>
                <a target="_blank">
                  <FaLinkedin className="social-icon "></FaLinkedin>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com/people/Revo-Video/100084040729038/">
                <a target="_blank">
                  <FaFacebookSquare className="social-icon "></FaFacebookSquare>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/revovideo/">
                <a target="_blank">
                  <FaInstagramSquare className="social-icon "></FaInstagramSquare>
                </a>
              </Link>
            </li>
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

  .social-icons li {
    margin: 0.5rem 0.5rem;
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
    .social-icons li {
      margin: 0.5rem 0.5rem;
    }
  }
`;
export default Footer;
