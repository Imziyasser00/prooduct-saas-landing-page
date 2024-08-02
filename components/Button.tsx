import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
  border: boolean;
  navbar?: boolean;
};

const Button = ({ text, href, border, navbar }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`${navbar ?" hidden lg:inline-block " : 'inline-block' } text-white ${
        border ? "border border-1 border-gray-300" : "bg-purple-100"
      } px-6 rounded-full py-3 `}
    >
      {text}
    </Link>
  );
};

export default Button;
