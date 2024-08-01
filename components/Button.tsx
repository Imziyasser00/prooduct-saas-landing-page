import Link from 'next/link'

type ButtonProps = {
    text :string,
    href:string,
    border:boolean,
}


const Button = ({text,href,border} : ButtonProps) => {
  return (
    <Link
        href={href}
        className={`hidden lg:inline-block ${border ? "border border-1 border-gray-300" : "bg-purple-100" }  px-6 rounded-full py-3`}
      >
        {text}
      </Link>
  )
}

export default Button
