import React, {
  ChangeEvent,
  ClipboardEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useRef,
} from "react";
import styles from "./styles.module.scss";

type CodeinputProps = { count: number; error?: string; onChange: any };

const CodeInput: FC<CodeinputProps> = ({ count, error, onChange }) => {
  const inputsRef = useRef<Array<HTMLInputElement>>([]);

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  const setFocus = (id: string) => {
    const numberId = Number(id);
    if (
      inputsRef.current[numberId].value &&
      Number(id) + 1 < count &&
      !inputsRef.current[numberId + 1].value
    ) {
      inputsRef.current[numberId + 1].focus();
    }
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    if (key === "Backspace") {
      if (target.value === "") {
        if (target.previousElementSibling !== null) {
          const t = target.previousElementSibling as HTMLInputElement;
          t.value = "";
          t.focus();
          e.preventDefault();
        }
      } else {
        target.value = "";
      }
      sendResult();
    }
  };

  const sendResult = () => {
    const res = inputsRef.current.map((input) => input.value).join("");
    onChange(res);
  };

  const handleOnPaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const pastedValue = e.clipboardData.getData("Text");

    let currentInput = 0;

    for (let i = 0; i < pastedValue.length; i++) {
      const pastedCharacter = pastedValue.charAt(i);
      const currentValue = inputsRef.current[currentInput].value;
      if (!currentValue) {
        inputsRef.current[currentInput].value = pastedCharacter;
        if (inputsRef.current[currentInput].nextElementSibling !== null) {
          (
            inputsRef.current[currentInput]
              .nextElementSibling as HTMLInputElement
          ).focus();
          currentInput++;
        }
      }
    }
    sendResult();

    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFocus(e.target.id);
    sendResult();
  };

  const calculateInputs = () => {
    return new Array(count)
      .fill("")
      .map((_, i) => (
        <input
          type="text"
          key={i}
          inputMode="numeric"
          className={styles.cell}
          onKeyDown={handleOnKeyDown}
          pattern="[0-9]+"
          maxLength={1}
          onPaste={handleOnPaste}
          min="0"
          onChange={handleChange}
          id={String(i)}
          max="9"
          ref={(e: any) => (inputsRef.current[i] = e)}
          autoComplete="one-time-code"
        />
      ));
  };

  return (
    <div className={styles.root}>
      <span
        className={`${styles.inputsContainer} ${error ? styles.error : ""}`}
      >
        {calculateInputs()}
      </span>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default CodeInput;
