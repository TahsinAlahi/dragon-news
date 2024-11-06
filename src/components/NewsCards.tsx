import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import NewsCard from "./NewsCard";

const BASE_URl = "https://openapi.programming-hero.com/api";

interface categoryNewsTypes {
  _id: string;
  others_info: {
    is_todays_pick: boolean;
    is_trending: boolean;
  };
  category_id: string;
  rating: {
    number: number;
    badge: string;
  };
  total_view: number;
  title: string;
  author: {
    name: string;
    published_date: string;
    img: string;
  };
  thumbnail_url: string;
  image_url: string;
  details: string;
}

function NewsCards() {
  const { category_id } = useParams();
  const [newsOfCategory, setNewsOfCategory] = useState<categoryNewsTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCategoryNews() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${BASE_URl}/news/category/${
            category_id === undefined ? "01" : category_id
          }`
        );
        const data = await res.json();

        setNewsOfCategory(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getCategoryNews();
  }, [category_id]);

  if (isLoading || newsOfCategory.length === 0)
    return <Loader className="items-start" />;

  return (
    <article className="col-span-2 px-3 flex items-start justify-center flex-col gap-5 w-full">
      {newsOfCategory.map((news) => (
        <NewsCard news={news} />
      ))}
    </article>
  );
}

export default NewsCards;
