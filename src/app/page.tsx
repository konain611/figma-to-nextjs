import Featured from "./components/featureditems";
import LatestItems from "./components/latestitems";
import NavBar from "./components/navbar";
import PromoPage from "./components/promotionalpage";

export default function Home(){
  return (
    <div>
      <NavBar/>
      <PromoPage/>
      <Featured/>
      <LatestItems/>
    </div>
  )
}