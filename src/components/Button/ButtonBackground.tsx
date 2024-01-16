type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  backgroundColor: string;
  borderColor?: string;
  between?: boolean;
  radius?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
};

export function ButtonBackground({
  backgroundColor,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  children,
  borderColor,
  between,
  radius,
  ...props
}: Props) {
  return (
    <button
      {...props}
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor ? borderColor : "transparent",
        borderWidth: "1px",
        borderRadius: radius ? `${radius}px` : "0px",
        paddingLeft: paddingLeft ? `${paddingLeft}px` : "48px",
        paddingRight: paddingRight ? `${paddingRight}px` : "48px",
        paddingTop: paddingTop ? `${paddingTop}px` : "16px",
        paddingBottom: paddingBottom ? `${paddingBottom}px` : "16px",
      }}
      className={` w-full gap-3 flex ${
        between ? "justify-between" : ""
      } items-center justify-center`}
    >
      {children}
    </button>
  );
}
