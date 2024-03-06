import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
      <div className="w-full">
        <div className="bg-main">
          <Header className='flex flex-wrap justify-between p-8 xl:px-12 items-center' />
        </div>


        <div className="bg-main flex justify-center h-screen py-8 md:py-16 ">
          <Hero />
        </div>


      </div>
      
  )
}