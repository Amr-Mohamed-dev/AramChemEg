import { motion } from "framer-motion";
import BlogSection from "./BlogSection";
import HeroSection from "./HeroSection";
import OurDevelopers from "./OurDevelopers";
import OurProjects from "./OurProjects";
import NewsLetter from "../../components/NewsLetter";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <HeroSection />
      <OurProjects />
      {/* <BlogSection /> */}
      <NewsLetter />
    </motion.div>
  );
};

export default Home;
