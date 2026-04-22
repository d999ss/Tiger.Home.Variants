interface HeroTitleProps {
  line1: string;
  line2: string;
  line3: string;
  className?: string;
}

export default function HeroTitle({ line1, line2, line3, className = '' }: HeroTitleProps) {
  return (
    <h1 className={`font-serif font-light tracking-[-0.02em] leading-[1.15] text-balance ${className}`} style={{ fontSize: 'clamp(36px, 4vw, 64px)' }}>
      <span className="block">{line1}</span>
      <span className="block">{line2}</span>
      {line3 && <span className="block">{line3}</span>}
    </h1>
  );
}
