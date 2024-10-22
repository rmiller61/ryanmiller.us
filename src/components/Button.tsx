interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <a
      {...props}
      className="button inline-flex ease-in-out duration-500 transition-all px-8 py-3 text-white rounded-full font-bold items-center gap-2.5"
    >
      {children}
    </a>
  );
}
