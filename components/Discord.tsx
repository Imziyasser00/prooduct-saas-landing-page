import Image from "next/image"
import Card from "./Card"
import Button from "./Button"

const Discord = () => {
  return (
    <div className="w-4/5 mx-auto h-full lg:w-full px-0 lg:px-10 pb-10">
      <Card variants="pt-32 p-10 lg:pt-0 relative h-full">
            <Image src={'/discord-bg.svg'} alt="discord bg" width={966} height={437} className="w-full " priority />
            <div className="absolute top-1/2 gap-4 h-full w-full left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center text-center flex-col text-white">
                <Image priority src={'/discord.svg'} alt="discord icon" width={65} height={50} />
                <h2 className="font-bold text-2xl lg:text-4xl">Join the community</h2>
                <p className="text-gray-400 w-4/5 md:w-3/4">
                Join our 400,000+ person community and contribute to a more private and decentralized internet. Start for free.
                </p>
                <Button text="Join Discord" border={false} href="/" />
            </div>
      </Card>
    </div>
  )
}

export default Discord
