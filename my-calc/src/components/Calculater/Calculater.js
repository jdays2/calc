import { useState } from "react";
import Button from "./Button/Button";
import styles from "./Calculater.module.css";

function Calculater() {
  let buttonsData = [
    { value: "C", isOperator: true },
    { value: "+/-", isOperator: true },
    { value: "%", isOperator: true },
    { value: "/", isOperator: true },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: "x", thueMeaning: "*", isOperator: true },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: "-", isOperator: true },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: "+", isOperator: true },
    { value: 0, isZero: true },
    { value: ",", thueMeaning: ".", isOperator: true },
    { value: "=", isOperator: true },
  ];

  const [data, setData] = useState("");

  function getСalculation(value) {
    setData(data + value);
    if (value === "+/-") {
      // String(eval(data));
      setData(String(data * -1));
    }
    if (value === "%") {
      // String(eval(data));
      setData(String(data / 100));
    }
    if (value === "=") {
      setData(String(eval(data)));
    } else if (value === "C") {
      setData("");
    }
  }

  return (
    <>
      <div className={styles.clc}>
        <div className={styles.counter}>{data}</div>
        <div className={styles.clcWrapper}>
          {buttonsData.map((b) => {
            return (
              <Button
                value={b.value}
                isOperator={b.isOperator}
                isZero={b.isZero}
                getСalculation={getСalculation}
                thueMeaning={b.thueMeaning}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.discriptions}>
        Господа! Кнопка % - просто показывает одну сотую от числа, либо 0, когда
        поле ввода пустое.
      </div>
    </>
  );
}
export default Calculater;
