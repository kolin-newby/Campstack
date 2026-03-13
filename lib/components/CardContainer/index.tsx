import styles from "./styles.module.css";

export const CardContainer = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) => {
  const { className, ...restProps } = props;

  return (
    <div className={`${className} ${styles.CardContainer}`} {...restProps} />
  );
};
