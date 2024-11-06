import dateFormatter from "../utils/dateFormatter";
import bookmarkImg from "../assets/bookmark.png";
import shareImg from "../assets/share.png";
import starImg from "../assets/star.png";
import viewImg from "../assets/view.png";

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

function NewsCard({ news }: { news: categoryNewsTypes }) {
  const { weekDay, day, month, year } = dateFormatter(
    new Date(news.author.published_date)
  );

  return (
    <article className="w-full rounded-lg overflow-hidden border-1 border-gray-400 lg:shadow-md shadow-sm">
      <div className="w-full flex items-center justify-between bg-gray-400/20 px-5 py-4 lg:mb-4 mb-3 lg:px-5 lg:pt-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 aspect-square rounded-full mr-3"
        />
        <div className="flex flex-col justify-between flex-1">
          <h2 className="font-bold">{news.author.name}</h2>
          <p className="text-sm text-gray-600">{`${weekDay}, ${day} ${month} ${year}`}</p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={bookmarkImg}
            alt="Bookmark the article"
            className="w-5 cursor-pointer"
          />
          <img
            src={shareImg}
            alt="Share the article"
            className="w-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center lg:px-5 lg:pb-4">
        <h1 className="text-xl font-bold lg:mb-5 mb-4">{news.title}</h1>
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full lg:mb-6 mb-4"
        />
        <p className="text-gray-600 lg:pb-6 border-b-2 lg:mb-5 mb-4 border-gray-500/30">
          {news.details.slice(0, 150)}...
          <span className="text-orange-600 font-bold cursor-pointer">
            Read More
          </span>
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Array(Math.round(news.rating.number < 5 ? news.rating.number : 5))
              .fill(true)
              .map((_, index) => (
                <img src={starImg} alt="Star" key={index} />
              ))}
            <span>{news.rating.number}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={viewImg} alt="View" className="w-6 aspect-square" />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
