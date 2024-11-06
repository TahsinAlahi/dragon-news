import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";

interface NewsType {
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

const BASE_URl = "https://openapi.programming-hero.com/api/news";

function NewsPage() {
  const { news_id } = useParams();
  const [news, setNews] = useState<NewsType>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getNews() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URl}/${news_id}`);
        const data = await res.json();

        setNews(data.data[0]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    getNews();
  }, [news_id]);

  if (isLoading || !news) return <Loader />;

  return (
    <div className="lg:col-span-3">
      <h1 className="text-xl font-semibold mb-4 lg:text-left text-center text-gray-800 lg:block hidden">
        Dragon News
      </h1>
      <div className="lg:p-6 p-3 pb-5 h-fit rounded-lg border-2 border-gray-500/10 mx-2 lg:mx-0">
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full rounded-lg object-cover object-center lg:mb-5 mb-4"
        />
        <h1 className="lg:text-2xl text-xl font-bold text-gray-700 mb-2">
          {news.title}
        </h1>
        <p className="text-gray-500 font-medium lg:mb-10 mb-6">
          {news.details}
        </p>
        <Link
          className="py-2 lg:px-5 px-3 text-white bg-red-600 hover:bg-red-700 duration-75"
          to="/"
        >
          &larr; All news in this category
        </Link>
      </div>
    </div>
  );
}

export default NewsPage;
