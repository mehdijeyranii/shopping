import { Header } from "../components/header";
import { Hero } from "../components/hero";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto p-2">
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
