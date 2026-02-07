interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

const Logo = ({ variant = "light", className = "h-8" }: LogoProps) => {
  const textColor = variant === "light" ? "#ffffff" : "#0c2340";
  const dotColor = "#2a9d8f"; // teal accent

  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* D */}
      <text
        x="0"
        y="48"
        fontFamily="Barlow, sans-serif"
        fontWeight="700"
        fontSize="52"
        fill={textColor}
      >
        DA
      </text>
      {/* Dot */}
      <circle cx="108" cy="32" r="5" fill={dotColor} />
      {/* AI */}
      <text
        x="120"
        y="48"
        fontFamily="Barlow, sans-serif"
        fontWeight="700"
        fontSize="52"
        fill={textColor}
      >
        AI
      </text>
    </svg>
  );
};

export default Logo;
