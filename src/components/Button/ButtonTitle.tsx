type Props = {
  title: string;
  color: string;
  bold?: number;
};
export function ButtonTitle({ title, color, bold }: Props) {
  return (
    <h1
      style={{
        color: color,
        fontWeight: bold ? bold : 400,
      }}
      className="text-lg"
    >
      {title}
    </h1>
  );
}
