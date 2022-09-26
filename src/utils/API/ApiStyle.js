import styled from "styled-components";

const ApiStyle = styled.div`
  height: 100vh;
  margin: 10px;
  border: 1px dotted red;

  header {
    text-align: center;
    background-color: #f1f1f1;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;

    .container-cat {
      border: 1px solid blue;

      h2 {
        font-size: 1.5rem;
      }
    }

    .container-giphy {
      border: 1px solid red;

      button {
        width: 100%;
      }
    }
  }
`;

export default ApiStyle;
