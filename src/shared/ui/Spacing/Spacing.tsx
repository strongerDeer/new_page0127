export default function Spacing({
  height = 16,
}: {
  height?:
    | 4
    | 8
    | 12
    | 16
    | 20
    | 24
    | 28
    | 32
    | 36
    | 40
    | 44
    | 48
    | 52
    | 56
    | 60;
}) {
  return <div style={{ height: height }}></div>;
}
