import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      onClick={() => {
        props.getСalculation(
          props.thueMeaning ? props.thueMeaning : props.value
        );
      }}
      className={`${styles.clcBtn} + ${
        props.isOperator ? styles.operations : null
      } + ${props.isZero ? styles.zero : null}`}
    >
      {props.value}
    </button>
  );
}

export default Button;
