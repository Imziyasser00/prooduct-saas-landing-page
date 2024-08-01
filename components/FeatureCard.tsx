import Image from "next/image"

type FeatureProps = {
    icon: string,
    title: string,
    description: string,
}


const FeatureCard = ({icon,title,description}:FeatureProps) => {
  return (
    <div className="bg-gray-800 p-8 rounded mx-5 md:mx-0">
      <div className="h-14  items-center flex">
        <Image src={icon} alt={icon} width={40} height={40}/>
      </div>
      <h3 className="text-white font-bold text-xl pt-6">
        {title}
      </h3>
      <p className="text-gray-400 pt-5">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
