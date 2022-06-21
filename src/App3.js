import "./styles3.css";
import Navbar3 from "./Components3/Navbar3";
import CardDr from "./Components3/CardDr";
import CardJH from "./Components3/CardJH";
import CardDrJH from "./Components3/CardDrJH";
import CardDr2 from "./Components3/CardDr2";
import SearchBox from "./Components3/SearchBox";
import Pfp from "./Components3/pfp";

export default function App() {
  return (
    <div className="App">
      <Navbar3 />
      <SearchBox />
      <Pfp />
      <div className="info2"># Results for: Drake</div>
      <div className="Sectiona">
        <CardDr />
        <CardJH />
        <CardDrJH />
        <CardDr2 />
        <CardJH />
      </div>
      <div className="Sectionb">
        <CardDr />
        <CardJH />
        <CardDrJH />
        <CardDr2 />
        <CardJH />
      </div>
    </div>
  );
}
