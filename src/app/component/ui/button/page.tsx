import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "link";
  onClick?: () => void;
};

function Button({ children, className, variant = "primary", onClick }: ButtonProps | any) {
  const styles: Record<string, string> = {
    primary: `bg-primary text-white px-4 md:px-6 xl:px-8 py-3`,
    link: `underline hover:text-primary duration-500`,
  };

  const buttonClassName = `${styles[variant]} ${className}`;

  return (
    <div>
      <button onClick={onClick} className={buttonClassName}>
        {children}
      </button>
    </div>
  );
}

export default Button;
