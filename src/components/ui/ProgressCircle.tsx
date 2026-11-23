type ProgressCircleProps = {
  value: number;
  label: string;
  glyph: string;
  color?: "yellow" | "charcoal" | "olive";
};

export default function ProgressCircle({
  value,
  label,
  glyph,
  color = "yellow",
}: ProgressCircleProps) {
  const circumference = 2 * Math.PI * 28;
  const offset = circumference * (1 - value / 100);

  return (
    <div className="progress-circle">
      <div className="progress-circle-art">
        <svg aria-hidden="true" viewBox="0 0 66 66">
          <circle className="progress-track" cx="33" cy="33" r="28" />
          <circle
            className={`progress-value ring-${color}`}
            cx="33"
            cy="33"
            r="28"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="progress-center">{glyph}</span>
      </div>
      <span>{label}</span>
    </div>
  );
}
