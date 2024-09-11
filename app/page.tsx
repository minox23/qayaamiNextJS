import CTA from "@components/sections/cta";
import FAQ from "@components/sections/faq";
import Logo from "@components/sections/logo";
import Features from "@components/sections/feature";
import Navbar from "@components/sections/navbar/Navbar";
import Footer from "@components/sections/Footer";
import SearchBar from "@components/sections/search";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-12 inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Logo />
        <SearchBar />
      </div>
      <Features />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
