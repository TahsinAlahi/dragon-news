import LoginWebsites from "./LoginWebsites";
import FindUsLink from "./FindUsLink";
import QZone from "./QZone";

function Aside() {
  return (
    <aside className="col-span-1">
      <LoginWebsites />
      <FindUsLink />
      <QZone />
    </aside>
  );
}

export default Aside;
