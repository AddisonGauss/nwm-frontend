import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#3a7257" : "#000")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#60ce29" : "#60ce29")};
    color: ${({ dark }) => (dark ? "#000" : "#000")};
    text-decoration: none;
  }
`
