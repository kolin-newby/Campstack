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
    <div className={`${className} ${styles.Card}`} {...restProps}>
      {title && <span>{title}</span>}
      {children}
    </div>
  );
};
