import Image from "next/image"

type testimonialProps = {
    icon: string,
    name: string,
    title:string,
    description:string,
}


const TestimonialCard = ({icon,name,title,description}:testimonialProps) => {
  return (
    <div className="min-w-1/3 p-6 text-white rounded-lg shadow-lg bg-[#0E1330] border border-[#282D45]">
      <div className="">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">

            <Image width={40} height={40} src={icon} alt={name} className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="text-lg font-bold">{name}</h4>
                <p className="text-sm text-gray-400">{title}</p>
              </div>
            </div>
            <Image width={47} height={52} src={'/testimonials-quote-icon.svg'} alt={'testimonials-quote-icon'} className="h-auto" />
        </div>
            </div>
            <p className="mt-4">{description}</p>
    </div>
  )
}

export default TestimonialCard
