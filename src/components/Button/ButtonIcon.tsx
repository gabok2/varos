import Image from "next/image";
type Props = {
  icon?: string;
  width?: number;
  height?: number;
};
export function ButtonIcon({ icon, height, width }: Props) {
  return (
    <Image src={`${icon}.svg`} width={width} height={height} alt={"logo"} />
  );
}
