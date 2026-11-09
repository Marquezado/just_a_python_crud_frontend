import Cards from "./src/components/cards";
import Header from "./src/components/hearder";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-screen-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-400">
        <Header/>
      </div>
      <div className="w-full flex p-4 flex-wrap content-center bg-gray-300">
        <Cards/>
      </div>
      
    </>

    
  );
}
