import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "link" | "onlyIcon" | "border";
  onClick?: () => void;
};

function Button({ children, className, variant = "primary", onClick }: ButtonProps | any) {
  const styles: Record<string, string> = {
    primary: `bg-primary text-white px-4 md:px-6 xl:px-8 py-3`,
    border: `border-2 border-primary text-primary px-4 md:px-6 xl:px-8 py-3`,
    link: `hover:text-primary duration-500`,
    onlyIcon: "p-3 bg-white rounded-full drop-shadow-lg",
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
