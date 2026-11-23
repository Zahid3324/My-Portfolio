type SkillIconProps = {
  name: string;
  glyph: string;
  color: string;
};

export default function SkillIcon({ name, glyph, color }: SkillIconProps) {
  return (
    <div className="skill-icon" title={name}>
      <span className="skill-glyph" style={{ color }}>
        {glyph}
      </span>
      <span>{name}</span>
    </div>
  );
}
