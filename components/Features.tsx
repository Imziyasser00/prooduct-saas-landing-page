import TextGradient from "./TextGradient";
import FeatureCard from "./FeatureCard";
import { featuresCards } from "@/data";

const Features = () => {
  return (
    <div className="w-full px-8 pb-10">
      <div className="w-full flex flex-col md:flex-row justify-center items-center pb-12">
        <div className="w-full md:w-2/3 text-center md:text-left">
        <div className="w-4/5 leading-loose">
          <TextGradient text="Powerful features to help you manage all your leads" />
        </div>
        </div>
        <div className="w-full md:w-1/3 text-gray-400 text-center md:text-left inline-block items-center justify-center">
          <p className="w-full mx-auto">
            Apsum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
            vel.
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {featuresCards.map((item)=>(
          <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Features;
