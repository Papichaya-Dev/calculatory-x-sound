import styled, { keyframes } from "styled-components";
import ReactDigital from "@jswork/react-digital";

export const Container_CalculatorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://news.crunchbase.com/wp-content/uploads/2017/07/giphy-1-1.gif");
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const Number_Of_Input = styled(ReactDigital)`
  margin-left: 5px;
`;

export const Calculator_Button = styled.button`
  border-radius: 10px;
  color: black;
  width: 100px;
  height: 50px;
  margin-left: 5px;
  margin-top: 5px;
  font-weight: 600;
  background-color: #b4daf0;
  font-family: "Press Start 2P", cursive;
  font-size: 12px;
`;

export const Digit_Box = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  color: black;
  width: 410px;
  height: 80px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  border: solid 2px white;
  padding: 10px;
  justify-content: flex-end;
  justify-items: center;
  background-color: #ffffff7f;
  opacity: 0.8;
`;

export const Operator_Symbol = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 20px;
  margin-left: 10px;
`;
export const rainbow = keyframes`
		0% {
    	filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(-360deg);
		}
			`;
export const Rainbow_Header = styled.div`
  font-family: "Bungee Shade", cursive;
  margin-top: 30px;
  font-size: 50px;
  font-weight: bolder;
  background-image: -webkit-linear-gradient(120deg, rgb(231, 102, 87), rgb(252, 214, 88), rgb(147, 214, 113));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: 2s linear 0s infinite normal none running ${rainbow};
`;

export const Created_Footer = styled.footer`
  font-family: "Press Start 2P", cursive;
  color: white;
  font-size: 12px;
  position: absolute;
  bottom: 3%;
`;
