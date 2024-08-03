import Image from "next/image"
import Button from "./Button"
import Card from "./Card"
import TextGradient from "./TextGradient"

const OpenSource = () => {
  return (
    <div className="w-full">
      <Card variants="w-4/5  p-5 mx-auto flex flex-col gap-10">
        <div className="w-full flex flex-col gap-5 md:flex-row">
            <div className="w-full md:w-1/2 p-5 flex flex-col gap-5">
                <TextGradient text="Transparent, audited, &open source" />
                <p className="text-gray-400">
                Torem ipsum dolor sit amet consectetur. Nulla quisque scelerisque eget quis. Eu amet amet eu interdum.
                </p>
                <div>
                <Button text="Browse all features" border={true} href="/" />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center
             items-center">
                <Image src={'/open-source-code-image.png'} alt="open source code image" height={528} width={400} priority />
            </div>
        </div>
        <div className="w-full flex flex-col gap-5 md:flex-row">
            <div className="w-full p-6 md:w-1/2 rounded border border-[#282D45] bg-[#060B27]">
                <h2 className="text-2xl text-white font-bold">Product Mail</h2>
                <p className="text-gray-400">
                    Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.
                </p>
                <div className="flex justify-center items-center">
                <Image src={'/product-mail-image.png'} className="pt-5" alt="prooduct-mail-image" priority width={488} height={211}/>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 rounded border border-[#282D45] bg-[#060B27]">
                <h2 className="text-2xl text-white font-bold">Product Mail</h2>
                <p className="text-gray-400">
                    Honsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.
                </p>
                <div className="flex justify-center items-center">
                <Image src={'/product-ui-image.png'} className="pt-5" alt="prooduct-ui-image" priority width={488} height={211}/>
                </div>
            </div>
        </div>
      </Card>
    </div>
  )
}

export default OpenSource
