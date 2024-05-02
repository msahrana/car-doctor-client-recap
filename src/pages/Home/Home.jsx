import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Features from "../../components/Features/Features";
import Products from "../../components/Products/Products";
import Service from "../../components/Service/Service";
import Team from "../../components/Team/Team";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Contact></Contact>
      <Products></Products>
      <Team></Team>
      <Features></Features>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
