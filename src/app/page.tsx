import "./page.scss";
import HomepageSlider from "./Components/HomepageSlider";
import OurServices from "./Components/OurServices";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div className="homepageContainer">
      <HomepageSlider />
      <OurServices />
      <AboutUs />
      <Contact />
    </div>
  );
}
