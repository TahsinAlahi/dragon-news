import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BASE_URL = "https://openapi.programming-hero.com/api";

interface Category {
  category_id: string;
  category_name: string;
}

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  function activeClasses({ isActive }: { isActive: boolean }) {
    return `font-semibold py-2 w-full rounded-lg hover:bg-gray-400 hover:text-black ${
      isActive ? "bg-gray-400 text-black" : "text-gray-500 bg-transparent"
    }`;
  }

  useEffect(() => {
    async function getCategories() {
      const res = await fetch(`${BASE_URL}/news/categories`);
      const data = await res.json();

      setCategories(data.data.news_category);
    }

    getCategories();
  }, []);

  return (
    <div className="lg:w-1/3 h-40">
      <h2 className="text-xl font-semibold mb-4">All Catagories</h2>
      <ul className="w-full flex flex-col gap-1 items-start text-center">
        {categories.map((category) => (
          <NavLink
            to={`/category/:${category.category_id}`}
            key={category.category_id}
            className={activeClasses}
          >
            {category.category_name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
