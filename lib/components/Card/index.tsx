import styles from "./styles.module.css";

type CustomProps = {
  title?: string;
};

type CombinedProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  CustomProps;

export const Card = (props: CombinedProps) => {
  const { title, className, children, ...restProps } = props;

  return (
    <div className={`${className} ${styles.Card} flex flex-col p-10 rounded-xl bg-black/10`} {...restProps}>
      {title && <h1 className={`${styles.titleText} text-2xl pb-4`}>{title}</h1>}
      <div className={`${styles.bodyContainer}`}>{children}</div>
    </div>
  );
};
