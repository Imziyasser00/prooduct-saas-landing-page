import Image from "next/image";
import Button from "./Button";

type NewsProps = {
  image: string;
  title: string;
  description: string;
  date: string;
};

const NewsCard = ({ image, title, description, date }: NewsProps) => {
  return (
    <div className="p-4 h-full rounded w-full bg-[#0E1330] border border-[#282D45]">
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <div className="flex justify-center items-center">
          <Image src={image} alt={title} width={342} height={230} />
          </div>
          <h2 className="text-2xl py-5 font-bold text-white">{title}</h2>
          <p className="text-gray-500 flex-grow pb-7">{description}</p>
        </div>
        <div className="flex border-gray-500 border-t justify-between pt-5 items-center">
          <p className="text-gray-400">{date}</p>
          <Button text="Read More" border={false} href="/" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
