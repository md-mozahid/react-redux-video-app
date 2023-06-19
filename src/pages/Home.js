import VideoGrid from "../components/grid/VideoGrid";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";
import Footer from "../components/ui/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
