import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BASE_URL = "https://openapi.programming-hero.com/api";

interface Catagory {
  category_id: string;
  category_name: string;
}

function Catagories() {
  const [categories, setCatagories] = useState<Catagory[]>([]);

  useEffect(() => {
    async function getCatagories() {
      const res = await fetch(`${BASE_URL}/news/categories`);
      const data = await res.json();

      setCatagories(data.data.news_category);
    }

    getCatagories();
  }, []);

  return (
    <div className="lg:w-1/3 h-40">
      <h2 className="text-lg font-semibold mb-4">All Catagories</h2>
      <ul className="w-full flex flex-col gap-1 items-start text-center">
        {categories.map((category) => (
          <NavLink
            to={`/category/:${category.category_id}`}
            key={category.category_id}
            className={`font-semibold py-2 w-full rounded-lg`}
          >
            {category.category_name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Catagories;
