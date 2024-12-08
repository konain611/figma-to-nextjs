import Featured from "./components/featureditems";
import LatestItems from "./components/latestitems";
import NavBar from "./components/navbar";
import PromoPage from "./components/promotionalpage";
import Promotion from "./components/promotionalpage2";
import Offers from "./components/shopexoffer";
import Trending from "./components/trending";

export default function Home(){
  return (
    <div>
      <NavBar/>
      <PromoPage/>
      <Featured/>
      <LatestItems/>
      <Offers/>
      <Promotion/>
      <Trending/>
    </div>
  )
}