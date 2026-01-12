import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) =>
      theme === "netflix" ? "'Helvetica Neue', sans-serif" : "'Arial', sans-serif"};
    background-color: ${({ theme }) =>
      theme === "netflix" ? "#0f0f0f" : "#0a1a2f"};
    color: #ffffff;
    transition: background-color 0.4s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;
