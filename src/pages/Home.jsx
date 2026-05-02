import Courselist from "../components/Courselist"
import Hero from "../components/Hero"

function Home() {
  return (
    <>
    <div className="w-full min-h-screen flex justify-between items-center px-20">
      <Hero/>
      
    </div>
    <Courselist/>
    </>
    
  )
}

export default Home
