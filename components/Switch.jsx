import { FiSun, FiMoon} from 'react-icons/fi';
import styled from "styled-components";

const Switch = ({theme, toggleTheme, mobile}) => {
  const icon = theme === "light" ? <FiMoon color={"yellow"} size={26} /> : <FiSun color={"black"} size={26} />

    return (
      <>
        <Toggler mobile={mobile} onClick={toggleTheme}>{icon}</Toggler>
      </>
    )
}
const Toggler = styled.button`
//display: ${props => props.mobile ? "flex" : "none" };
background: ${({ theme }) => theme.modeSwitch};
margin-left: auto; 
margin-right: 20px;
display:flex;
align-items:center;
width: 35px;
height: 35px;
align-items:center;
justify-content: center;
color: ${props => props.theme.toggleIcon};
transition: all ${props => props.theme.transitionTime};
border: none;
outline: none;
border-radius: 4px;
cursor: pointer;
`;

export default Switch
