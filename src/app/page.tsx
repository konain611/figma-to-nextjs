import Discount from "./components/discount";
import Featured from "./components/featureditems";
import LatestBlog from "./components/latestBlog";
import LatestItems from "./components/latestitems";
import PromoPage from "./components/promotionalpage";
import Promotion from "./components/promotionalpage2";
import Promo from "./components/promotionalPage3";
import Offers from "./components/shopexoffer";
import TopCategories from "./components/topCategories";
import Trending from "./components/trending";

export default function Home(){
  return (
    <div>
      <PromoPage/>
      <Featured/>
      <LatestItems/>
      <Offers/>
      <Promotion/>
      <Trending/>
      <Discount/>
      <TopCategories/>
      <Promo/>
      <LatestBlog/>
    </div>
  )
}