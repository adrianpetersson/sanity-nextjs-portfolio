import styled from "styled-components";

export const Section = styled.section`
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  margin: 0 auto;
  align-items: center;
  display:flex;
  justify-content: ${(props) => (props.space ? "space-between" : "center")};
  max-width: ${(props) => (props.blogstyle ? "790px" : "1300px")};
  position: relative;
  grid-gap: ${(props) => (props.gridgap || "0")};
  grid-template-columns: 1fr 1fr;
  padding: ${(props) => (props.padding || "0")};  
  @media (min-width: 960px) {
  display: ${(props) => (props.grid ? "grid" : "flex")};

  }
`;

export const Label = styled.span`
  width: 100%;
  font-size: 13px;
  display: inline-block;
  margin-right: 14px;
  color: #757575;
  background: #f2f2f2;
  padding: 5px 10px;
  line-height: 22px;
  border-radius: 3px;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media (min-width: 960px) {
    display: unset;
  }
`;
