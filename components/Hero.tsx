import Image from "next/image";
import Button from "./Button";
import TextGradient from "./TextGradient";

const Hero = () => {
  return (
    <div className="w-full text-white pt-12 text-center pb-24 relative">
      <TextGradient text="A CRM dashboard for engineering teams" />
      <p className="w-3/4 md:w-3/5 textcenter mx-auto text-gray-400 pb-7">
        Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices
        non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae orci ac
        penatibus consectetur.
      </p>
      <div className="flex items-center justify-center gap-6">
        <Button text="Get a demo" href="/" border={false} />
        <Button text="View pricing" href="/" border={true} />
      </div>
      <div className="w-full flex justify-center items-center py-10">
        <Image
          src={"/hero-image.png"}
          alt="hero image"
          className=" w-3/4 lg:w-3/5"
          width={808}
          height={513}
        />
      </div>
      <div className="w-[600px] rounded-full h-[600px] bg-[#7214ff1c] translate-x-[-50%] absolute top-1/2 translate-y-[-50%] -left-30 blur-[70px]" />
      <div className="w-[600px] rounded-full h-[600px] bg-[#32cafd26] absolute top-[70%] translate-y-[-50%] right-[-20%] blur-[70px] opacity-45" />
    </div>
  );
};

export default Hero;
