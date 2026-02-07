interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

const Logo = ({ variant = "light", className = "h-10" }: LogoProps) => {
  const textColor = variant === "light" ? "#ffffff" : "#0c2340";
  const dotColor = "#2a9d8f";

  return (
    <svg
      viewBox="0 0 185 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* DA */}
      <text
        x="0"
        y="44"
        fontFamily="Barlow, sans-serif"
        fontWeight="700"
        fontSize="48"
        fill={textColor}
      >
        DA
      </text>
      {/* Dot */}
      <circle cx="78" cy="28" r="5" fill={dotColor} />
      {/* AI */}
      <text
        x="86"
        y="44"
        fontFamily="Barlow, sans-serif"
        fontWeight="700"
        fontSize="48"
        fill={dotColor}
      >
        AI
      </text>
    </svg>
  );
};

export default Logo;
