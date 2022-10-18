import styled from "styled-components";

const HomeHeaderBanner = ({ homev1 }) => {
  const { headerBanner, headerBannerText } = homev1.data.attributes;

  return (
    <Wrapper>
      {headerBanner ? (
        <div
          dangerouslySetInnerHTML={{ __html: headerBannerText }}
          className="banner"
        ></div>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .banner {
    padding: 0.5rem;
    background: var(--clr-black);
    text-align: center;
    color: var(--clr-white);
  }

  a {
    color: var(--clr-white);
  }
`;

export default HomeHeaderBanner;
