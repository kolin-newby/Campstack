import styles from "./styles.module.css";

export const CardContainer = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={`${className} ${styles.CardContainer} @container w-full`} {...restProps}>
      <div className={`w-full h-full grid grid-cols-1 p-6 gap-6 @lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4`}>
        {children}
      </div>
    </div>
  );
};
