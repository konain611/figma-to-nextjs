import Featured from "./components/featureditems";
import NavBar from "./components/navbar";
import PromoPage from "./components/promotionalpage";

export default function Home(){
  return (
    <div>
      <NavBar/>
      <PromoPage/>
      <Featured/>
    </div>
  )
}