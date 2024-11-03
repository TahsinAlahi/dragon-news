import LoginWebsites from "./LoginWebsites";
import FindUsLink from "./FindUsLink";
import QZone from "./QZone";

function Aside() {
  return (
    <aside className="lg:w-1/4">
      <LoginWebsites />
      <FindUsLink />
      <QZone />
    </aside>
  );
}

export default Aside;
