import Banner from './components/Banner/Banner'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Creative from './components/Creative/Creative'
import Navbar from './components/Navbar/Navbar'
import Review from './components/Review/Review'
import Services from './components/Services/Services'
import We from './components/We/We'
import Work from './components/Work/Work'

function App() {


  return (
   <>
   <div className='relative'>
    <Navbar />
    <Banner className='absolute top-0 left-0' />
   </div>
   <Services />
   <We />
   <Work />
   <Creative />
   <Review />
   <Blog />
   <Contact />
   </>
  )
}

export default App
