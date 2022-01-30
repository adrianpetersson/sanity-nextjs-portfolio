import { FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';

function Switch({ theme, toggleTheme, mobile }) {
  return (
    <Toggler mobile={mobile} onClick={toggleTheme}>
      <MoonIcon animate={theme} />
      <Icon animate={theme} />
    </Toggler>
  );
}

const MoonIcon = styled(FiMoon)`
  color: orange;
  opacity: ${(props) => (props.animate === 'dark' ? '0' : '1')};
  font-size: 25px;
  position: absolute;
  transition: all 1s ease-in-out;
  transform: ${(props) =>
    props.animate === 'light' ? 'rotate(-360deg)' : 'rotate(270deg)'};
`;
const Icon = styled(FiSun)`
  opacity: ${(props) => (props.animate === 'light' ? '0' : '1')};
  font-size: 25px;
  color: orange;
  transition: all 1s ease-in-out;
  transform: ${(props) =>
    props.animate === 'light' ? 'rotate(270deg)' : 'rotate(-270deg)'};
`;
const Toggler = styled.button`
  background: ${({ theme }) => theme.modeSwitch};
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  align-items: center;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.toggleIcon};
  transition: all ${(props) => props.theme.transitionTime};
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Switch;
