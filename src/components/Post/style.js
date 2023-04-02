import styled from "styled-components";

export const PostStyle = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
  display: flex;
  background-color: ${({ theme }) => theme.branco};
  border-radius: 0.3rem;
  gap: 0.5rem;

  figure {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  .content {
    width: 84%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .user-info {
      h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }

      p {
        color: ${({ theme }) => theme.azulClaro};
      }
    }

    article {
      width: 99%;
      display:flex;
      flex-direction: column;
      gap:0.3rem;

      p {
        word-break: break-all;
      }
      .localizacao{
        opacity:85%;
        color: gray;
      }
    }
  }
`;