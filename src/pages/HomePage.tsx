import Catagories from "../components/Categories";
import NewsCards from "../components/NewsCards";

function HomePage() {
  return (
    <aside className="lg:col-span-3 grid lg:grid-cols-3 grid-cols-1">
      <Catagories />
      <NewsCards />
    </aside>
  );
}

export default HomePage;
