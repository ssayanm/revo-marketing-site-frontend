import styled from "styled-components";

const HomeHeaderBanner = ({ home }) => {
  const { headerBanner, headerBannerText } = home.data.attributes;

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

/***Partnership with ReachTV:** Giving Revo Video access to more than 40 million consumers. **[Read the coverage](https://www.pymnts.com/news/ecommerce/2022/revo-videos-mission-to-make-every-video-shoppable-with-just-one-click&target=_blank)** */
