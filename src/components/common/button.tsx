interface ButtonProps {
  variant?: "dark" | "light";
  href?: string;
  target?: "_blank" | "_self";
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}
export default function Button({
  href,
  target = "_self",
  onClick,
  variant = "light",
  children,
  type,
  className,
  ...props
}: ButtonProps) {
  const classNames = `button button--${variant} ${className}`;

  if (href) {
    return (
      <a className={classNames} target={target} href={href} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
