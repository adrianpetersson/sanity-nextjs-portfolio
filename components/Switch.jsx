import { FiSun, FiMoon} from 'react-icons/fi';
import styled from "styled-components";

const Switch = ({theme, toggleTheme, mobile}) => {
  const icon = theme === "light" ? <FiMoon color={"black"} size={26} /> : <FiSun color={"white"} size={26} />

    return (
      <>
        <Toggler mobile={mobile} onClick={toggleTheme}>{icon}</Toggler>
      </>
    )
}
const Toggler = styled.button`
display: ${props => props.mobile ? "flex" : "none" };
background: transparent;
position: relative;
width: 35px;
height: 35px;
top: 65px;
right:30%;
align-items:center;
justify-content: center;
color: ${props => props.theme.toggleIcon};
transition: all ${props => props.theme.transitionTime};
border: none;
outline: none;
cursor: pointer;
@media (min-width: 960px) {
display: ${props => props.mobile ? "none" : "flex" };
right: unset;
background:#248c46;
border-radius: 4px;
top: unset;
}
`;

export default Switch
