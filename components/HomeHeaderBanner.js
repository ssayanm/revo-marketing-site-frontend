import styled from "styled-components";

const HomeHeaderBanner = ({ home }) => {
  const { headerBanner } = home.data.attributes;

  return (
    <Wrapper>
      {headerBanner ? (
        <div
          id="banner"
          className="d-flex justify-content-center py-4 text-center"
        >
          <span className="mx-2">
            <strong>Partnership with ReachTV:</strong>
          </span>
          <span>
            {" "}
            Giving Revo Video access to more than 40 million consumers.
            <strong>
              <a
                className="text-light"
                href="https://www.pymnts.com/news/ecommerce/2022/revo-videos-mission-to-make-every-video-shoppable-with-just-one-click/"
                target="_blank"
              >
                Read the coverage
              </a>
            </strong>
          </span>
        </div>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0.5rem;
`;

export default HomeHeaderBanner;
