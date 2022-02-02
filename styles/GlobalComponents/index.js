import styled from 'styled-components';
import breakpoint from '../../utility/breakpoints';

export const Section = styled.section`
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: ${(props) => (props.space ? 'space-between' : 'center')};
  max-width: ${(props) => (props.blogstyle ? '790px' : '1300px')};
  position: relative;
  grid-gap: ${(props) => props.gridgap || '0'};
  grid-template-columns: 1fr 1fr;
  padding: ${(props) => props.padding || '0'};
  @media only screen and ${breakpoint.device.lg} {
    display: ${(props) => (props.grid ? 'grid' : 'flex')};
  }
`;

export const Label = styled.span`
  width: 100%;
  font-size: 13px;
  display: inline-block;
  margin-right: 14px;
  color: black;
  background: #f2f2f2;
  padding: 5px 10px;
  line-height: 22px;
  border-radius: 3px;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: unset;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: ${({ padding }) => padding && '40px'};
  padding-bottom: ${({ padding }) => padding && '20px'};

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
