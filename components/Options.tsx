import { pretectedElements } from "@/data";
import TextGradient from "./TextGradient";
import Image from "next/image";
import Card from "./Card";
import Button from "./Button";

const Options = () => {
  return (
    <div className="w-full py-10">
      <div className="text-center w-5/6 mx-auto md:w-1/2">
        <TextGradient text="Essential apps that protect your" />
      </div>
      <div className="w-3/4 xl:w-4/5 grid grid-cols-2 md:px-0 md:gap-0 xl:grid-cols-4 mx-auto items-center">
        {pretectedElements.map((item) => (
          <div className="flex items-center gap-0 justify-center" key={item.label}>
            <div className="w-16 text-center flex justify-center items-center">
              <Image
                src={item.icon}
                alt={item.label}
                className=""
                width={50}
                height={30}
              />
            </div>
            <TextGradient
              text={item.label}
              variant="p-0 text-2xl md:text-3xl"
            />
          </div>
        ))}
      </div>
      <div className="w-full">
        <Card variants="text-white w-4/5 mx-auto border my-10">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center px-4 flex-col gap-5">
              <h3 className="font-bold text-2xl">
                End-to-end encrypted inbox and messages
              </h3>
              <p className="text-gray-400">
                Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor
                mauris viverra sed volutpat mauris. Amet nisi amet commodo
                adipiscing ut imperdiet nunc.
              </p>
              <div>
                <Button text="Learn More" href="/" border={true} />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={"/encrypted-inbox-image.png"}
                alt="encrypted inbox image"
                width={515}
                height={50}
                className="w-full md:w-[90%] mx-auto h-auto"
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="w-4/5 mx-auto flex flex-col md:flex-row gap-5 h-full">
        <div className="w-full xl:w-2/5 flex flex-col">
          <Card variants="flex flex-col justify-center items-center h-full">
            <Image
              src={"/mobile-applications-image.png"}
              alt="mobile application image"
              width={271}
              height={306}
              className=""
            />
            <div className="mt-10 flex flex-col w-full">
              <h1 className="font-bold text-white text-2xl">
                Mobile applications
              </h1>
              <p className="text-gray-400 mt-5">
                Prem ipsum dolor sit amet consectetur. Viverra sed dignissim
                risus aliquet condimentum. Vulputate varius feugiat egestas
                congue
              </p>
            </div>
          </Card>
        </div>
        <div className="w-full xl:w-3/5 flex flex-col">
          <Card variants="flex flex-col gap-4 h-full">
            <h2 className="text-2xl text-white font-bold">
              Upload, share, and preview any file
            </h2>
            <p className="text-gray-400">
              Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula
              massa netus nulla ultricies purus.
            </p>
            <Image
              src={"/file-preview-image.png"}
              width={580}
              alt="file preview image"
              height={393}
              className="pt-5 flex-end"
            />
          </Card>
        </div>
      </div>
      <div className="w-full flex items-center gap-5 mt-10 justify-center">
        <Button text="Get started" href="/"  border={false}/>
        <Button text="Browse all Features" href="/"  border={true}/>
      </div>
    </div>
  );
};

export default Options;
