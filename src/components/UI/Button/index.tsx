interface ButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
  onClick: Function;
  children: React.ReactNode;
}

function Button({ variant, onClick, children, className }: ButtonProps) {
  return (
    <button
      className={`text-sm px-4 py-2 hover:shadow-lg rounded-lg border border-primary-navy ${
        variant === "secondary"
          ? "text-primary-navy"
          : "bg-primary-navy text-primary-teal"
      } ${className && className}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button;
