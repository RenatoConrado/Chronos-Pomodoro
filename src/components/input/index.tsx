import styles from "./style.module.css";

interface Props extends React.ComponentProps<"input"> {
  id: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
}

function Input({ id, label: name, type = "text", ...props }: Props) {
  return (
    <>
      {name && <label htmlFor={id}>{name}</label>}
      <input className={styles.input} type={type} id={id} {...props} />
    </>
  );
}

export default Input;
