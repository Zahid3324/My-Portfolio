type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  id,
}: SectionTitleProps) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {description ? <p className="section-subtitle">{description}</p> : null}
    </div>
  );
}
