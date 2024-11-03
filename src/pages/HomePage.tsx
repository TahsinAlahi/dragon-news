import Catagories from "../components/Categories";
import NewsCards from "../components/NewsCards";

function HomePage() {
  return (
    <aside className="col-span-3 grid lg:grid-cols-3">
      <Catagories />
      <NewsCards />
    </aside>
  );
}

export default HomePage;
