import Header from "./components/Header";

export default function App() {
  return (
      <div className="w-full">
        <div className="bg-main w-full">
          <Header className='flex flex-wrap justify-between p-8 xl:px-12 items-center' />
        </div>
      </div>
  )
}