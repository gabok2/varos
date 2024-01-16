type Props = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

export function ButtonRoot({ children, fullWidth }: Props) {
  return <div className={`${fullWidth ? "w-full" : ""}`}>{children}</div>;
}
