import styles from "./style.module.css";

interface Props extends React.ComponentProps<"input"> {
  id: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
}

function Input({ id, label: name, type = "text", ...rest }: Props) {
  return (
    <>
      {name && <label htmlFor={id}>{name}</label>}
      <input className={styles.input} type={type} id={id} {...rest} />
    </>
  );
}

export default Input;
