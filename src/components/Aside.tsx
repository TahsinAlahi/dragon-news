import LoginWebsites from "./LoginWebsites";
import FindUsLink from "./FindUsLink";

function Aside() {
  return (
    <aside className="lg:w-1/4">
      <LoginWebsites />
      <FindUsLink />
    </aside>
  );
}

export default Aside;
