import CTA from "@components/sections/cta";
import FAQ from "@components/sections/faq";
import Logo from "@components/sections/logo";
import Features from "@components/sections/feature";
import Navbar from "@components/sections/Navbar";
import Footer from "@components/sections/Footer";
import SearchBar from "@components/sections/search";

const Home = () => {
  return (
    <>
      <Navbar />
      <Logo />
      <SearchBar />
      <Features />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
