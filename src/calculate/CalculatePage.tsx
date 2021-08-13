/* eslint-disable react/jsx-pascal-case */
import { Row } from "react-bootstrap";
import useCalculator from "./useCalculate";
import { Container_CalculatorPage, Rainbow_Header, Digit_Box, Number_Of_Input, Operator_Symbol, Calculator_Button, Created_Footer } from "./style/CalculatePage.styled";

function CalculatePage() {
  const { setCalculationValue, setOperator, getCurrentDisplayText, deletePrevNumber, clearDisplayText, onCalculate, getOperator } = useCalculator();

  return (
    <Container_CalculatorPage>
      <Rainbow_Header>Calculatory</Rainbow_Header>
      <Row>
        <Digit_Box>
          {getCurrentDisplayText()
            //เอาค่าจาก string แปลงเป็น Array ละ 1 ตัวอักษร
            .split("")
            .map((value: string, index: any) => {
              return <Number_Of_Input key={index} flat className="dib" value={value} />;
            })}
          <Operator_Symbol>{getOperator()}</Operator_Symbol>
        </Digit_Box>
      </Row>
      <Row className="justify-content-md-center">
        <Calculator_Button onClick={setCalculationValue.bind(null, 7)}>7</Calculator_Button>
        <Calculator_Button onClick={setCalculationValue.bind(null, 8)}>8</Calculator_Button>
        <Calculator_Button onClick={setCalculationValue.bind(null, 9)}>9</Calculator_Button>
        <Calculator_Button onClick={setOperator.bind(null, "+")}>+</Calculator_Button>
      </Row>
      <Row className="justify-content-md-center">
        <Calculator_Button onClick={setCalculationValue.bind(null, 4)}>4</Calculator_Button>
        <Calculator_Button onClick={setCalculationValue.bind(null, 5)}>5</Calculator_Button>
        <Calculator_Button onClick={setCalculationValue.bind(null, 6)}>6</Calculator_Button>
        <Calculator_Button onClick={setOperator.bind(null, "-")}>-</Calculator_Button>
      </Row>
      <Row className="justify-content-md-center">
        <Calculator_Button onClick={setCalculationValue.bind(null, 1)}>1</Calculator_Button>
        <Calculator_Button onClick={setCalculationValue.bind(null, 2)}>2</Calculator_Button>
        <Calculator_Button onClick={setCalculationValue.bind(null, 3)}>3</Calculator_Button>
        <Calculator_Button onClick={setOperator.bind(null, "*")}>*</Calculator_Button>
      </Row>
      <Row className="justify-content-md-center">
        <Calculator_Button onClick={setCalculationValue.bind(null, 0)}>0</Calculator_Button>
        <Calculator_Button onClick={clearDisplayText}>C</Calculator_Button>
        <Calculator_Button onClick={deletePrevNumber}>{"<-"}</Calculator_Button>
        <Calculator_Button onClick={setOperator.bind(null, "÷")}>÷</Calculator_Button>
      </Row>
      <Row className="justify-content-md-center">
        <Calculator_Button onClick={onCalculate}>=</Calculator_Button>
      </Row>
      <Created_Footer>created by Papichaya-Dev</Created_Footer>
    </Container_CalculatorPage>
  );
}

export default CalculatePage;
