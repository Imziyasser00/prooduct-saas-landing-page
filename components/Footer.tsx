import { socials } from "@/data"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-5 flex-col-reverse md:flex-row justify-between items-center border-t py-6 border-[#282D45]">
      <div className="text-white">
      <p>Copyright © Product | Created by<Link href={'https://www.yassirimzi.com'} className="underline px-2">www.yassirimzi.com</Link> </p>
      </div>
      <div className="flex items-center gap-5">
      {socials.map((item)=>(
        <Link href={item.link} target="_blank">
          <Image src={item.icon} alt="social icon" width={34} height={34} />
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Footer
