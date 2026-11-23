import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "yellow" | "outline";
  arrow?: boolean;
};

export default function Button({
  children,
  variant = "yellow",
  arrow = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a className={`button button-${variant} ${className}`.trim()} {...props}>
      {children}
      {arrow ? (
        <svg aria-hidden="true" viewBox="0 0 20 20">
          <path d="M4 10h11m-5-5 5 5-5 5" />
        </svg>
      ) : null}
    </a>
  );
}
