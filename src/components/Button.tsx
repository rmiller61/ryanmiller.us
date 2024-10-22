interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <a
      {...props}
      className="button inline-block ease-in-out duration-500 transition-all px-8 py-3 text-white rounded-full font-bold"
    >
      {children}
    </a>
  );
}
