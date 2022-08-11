import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { links } from "../utils/constants";
import { BsPlayCircleFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import useSWR from "swr";
import Loading from "./Loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Nav = () => {
  const { data, error } = useSWR(
    `${process.env.url}/api/header-links?populate=*`,
    fetcher
  );
  const router = useRouter();

  const [toggle, setToggle] = useState(false);

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <NavContainer
      style={{
        background:
          router.asPath === "/" ? "var(--clr-primary-1)" : "var(--clr-white)",
      }}
    >
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <a>
              <Image
                alt="Revo Video"
                src={
                  router.asPath === "/"
                    ? "/images/Revo_Logo_white.svg"
                    : "/images/Revologo.svg"
                }
                width={171}
                height={67}
                quality={100}
                objectFit="contain"
                priority
              />
            </a>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setToggle(!toggle)}
          >
            <FaBars />
          </button>
        </div>

        {toggle ? (
          <SidebarContainer>
            <aside className={`${toggle ? "sidebar show-sidebar" : "sidebar"}`}>
              <div className="sidebar-header">
                <Link href="/">
                  <a>
                    <Image
                      alt="Revo Video"
                      src="/images/Revo_Logo_white.png"
                      width={172}
                      height={69}
                      className="logo"
                    />
                  </a>
                </Link>
                <button
                  className="close-btn"
                  onClick={() => setToggle(!toggle)}
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="links">
                {data.data.map((link, id) => {
                  const { url, text } = link.attributes;
                  return (
                    <li key={id}>
                      <Link href={url}>
                        <a onClick={() => setToggle(!toggle)}>{text}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <BsPlayCircleFill className="icon" />
            </aside>
          </SidebarContainer>
        ) : (
          <ul className="nav-links">
            {data.data.map((link, id) => {
              const { url, text } = link.attributes;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a className={router.pathname === url ? "active" : "home"}>
                      {text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  /* background: var(--clr-primary-1); */
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-black);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }

  .social-icons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
  }

  .social-icons li {
    padding: 0.5rem;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-1);
        font-family: "Mont";
        font-size: 1.4rem;
        text-transform: capitalize;
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-1);
        }
      }
      .active {
        border-bottom: 2px solid var(--clr-primary-1);
      }
      .home:hover {
        border-bottom: 2px solid var(--clr-white);
      }
    }
  }
`;

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-black);
    transition: var(--transition);
    cursor: pointer;

    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .icon {
    width: 64px;
    height: 64px;
  }
  .logo {
    /* justify-self: center;
    height: 45px; */
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: center;
    font-size: 1.75rem;
    text-transform: capitalize;
    padding: 0.5rem 1.5rem;
    color: var(--clr-black);
    transition: var(--transition);
    font-family: "Mont";
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    background-image: linear-gradient(
      to top,
      rgba(69, 213, 107, 0.73),
      #45d56b
    );
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Nav;

// import styled from "styled-components";
// import { FaBars } from "react-icons/fa";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Image from "next/image";
// import { links } from "../utils/constants";
// import { useAppContext } from "../context/app_context";

// const Nav = () => {
//   const router = useRouter();
//   const { openSidebar } = useAppContext();

//   return (
//     <NavContainer
//       style={{
//         background:
//           router.asPath === "/" ? "var(--clr-primary-1)" : "var(--clr-white)",
//       }}
//     >
//       <div className="nav-center">
//         <div className="nav-header">
//           <Link href="/">
//             <a>
//               <Image
//                 alt="Revo"
//                 src={
//                   router.asPath === "/"
//                     ? "/images/Revo_Logo_white.svg"
//                     : "/images/Revologo.svg"
//                 }
//                 width={171}
//                 height={67}
//                 quality={100}
//                 objectFit="contain"
//                 priority
//               />
//             </a>
//           </Link>
//           <button type="button" className="nav-toggle" onClick={openSidebar}>
//             <FaBars />
//           </button>
//         </div>
//         <ul className="nav-links">
//           {links.map((link) => {
//             const { id, url, text } = link;
//             return (
//               <li key={id}>
//                 <Link href={url}>
//                   <a className={router.pathname === url ? "active" : "home"}>
//                     {text}
//                   </a>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </NavContainer>
//   );
// };

// const NavContainer = styled.nav`
//   /* background: var(--clr-primary-1); */
//   height: 9rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .nav-center {
//     width: 90vw;
//     margin: 0 auto;
//     max-width: var(--max-width);
//   }
//   .nav-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }
//   .nav-toggle {
//     background: transparent;
//     border: transparent;
//     color: var(--clr-black);
//     cursor: pointer;
//     svg {
//       font-size: 2rem;
//     }
//   }
//   .nav-links {
//     display: none;
//   }
//   .cart-btn-wrapper {
//     display: none;
//   }

//   .phone-btn {
//     display: none;
//   }

//   .social-icons {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     margin: 1rem;
//   }

//   .social-icons li {
//     padding: 0.5rem;
//   }

//   @media (min-width: 992px) {
//     .nav-toggle {
//       display: none;
//     }
//     .nav-center {
//       display: grid;
//       grid-template-columns: auto 1fr auto;
//       align-items: center;
//     }
//     .nav-links {
//       display: flex;
//       justify-content: flex-end;
//       li {
//         margin: 0 0.5rem;
//       }
//       a {
//         color: var(--clr-grey-1);
//         font-family: "Mont";
//         font-size: 1.4rem;
//         text-transform: capitalize;
//         padding: 0.5rem;
//         &:hover {
//           border-bottom: 2px solid var(--clr-primary-1);
//         }
//       }
//       .active {
//         border-bottom: 2px solid var(--clr-primary-1);
//       }
//       .home:hover {
//         border-bottom: 2px solid var(--clr-white);
//       }
//     }
//     .cart-btn-wrapper {
//       display: grid;
//     }
//     .phone-btn {
//       font-size: 1.4rem;
//       letter-spacing: var(--spacing);

//       display: flex;
//       /* justify-content: center; */
//       align-items: center;
//       color: var(--clr-grey-1);

//       .icon {
//         margin-right: 0.2rem;
//         color: var(--clr-primary-1);
//       }
//     }
//   }
// `;

// export default Nav;
