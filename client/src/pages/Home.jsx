import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
    <div className="bg-indigo-950 h-full">
      <CategoryMenu />
      <div className="map w-screen">
        <Map />
      </div>
    </div>
  );
};

export default Home;
