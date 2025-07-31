interface ButtonProps {
  variant?: 'dark' | 'light';
  href?: string;
  target?: '_blank' | '_self';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
export default function Button({ href, target = '_self', onClick, variant = 'light', children, type, ...props }: ButtonProps) {
  const className = `button button--${variant} ${props.className}`;

  if (href) {
   return <a className={className} target={target} href={href} rel="noreferrer">{children}</a>;
  }

  return (
    <button type={type} onClick={onClick} {...props}>
      {children}
    </button>
  )
}