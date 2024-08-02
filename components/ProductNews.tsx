import { news } from "@/data";
import Button from "./Button";
import TextGradient from "./TextGradient";
import NewsCard from "./NewsCard";

const ProductNews = () => {
  return (
    <div className="w-full px-10">
      <div className="flex items-center py-8 gap-5 flex-col md:flex-row justify-center md:justify-between ">
        <TextGradient text="Product in the news" />
        <div>
          <Button text="Browse All News" href="/" border={false} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pb-10">
        {news.map((item,idx)=>(
            <div key={`news-${idx}`} className="w-full lg:w-1/3">
                <NewsCard image={item.cover} title={item.titlle} description={item.description} date={item.date} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductNews;
