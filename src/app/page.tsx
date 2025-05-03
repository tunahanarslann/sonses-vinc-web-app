import "./page.scss";
import HomepageSlider from "./Components/HomepageSlider";
import OurServices from "./Components/OurServices";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div className="homepageContainer">
      <h1 style={{position: "absolute", left:"-9999px"}}>İstanbul vinç kiralama hizmeti | Samsun vinç kiralama hizmeti | Sonses Vinç</h1>
      <HomepageSlider />
      <OurServices />
      <AboutUs />
      <Contact />
    </div>
  );
}
