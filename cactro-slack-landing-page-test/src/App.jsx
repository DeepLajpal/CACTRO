import style from './App.module.css'
import ClientSection from './Components/ClientSection/ClientSection.jsx'
import HeroSection from './Components/HeroSection/HeroSection.jsx'
import IntroSection from './Components/IntroSection/IntroSection.jsx'
import Navbar from './Components/Navbar/Navbar'
import UpdateCard from './Components/UpdateCard/UpdateCard.jsx'

function App() {

  return (
    <div className={style["appOuterContainer"]}>
      <div className={style["appInnerContainer"]}>
        <Navbar />
        <UpdateCard />
        <div className={style["mainSection"]}>
          <HeroSection />
          <ClientSection />
          <IntroSection />
        </div>

      </div>
    </div>
  )
}

export default App
