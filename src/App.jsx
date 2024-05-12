import Header from "./components/Header"
import TeachingSection from "./components/TeachingSection"
import AdvantagesSection from "./components/AdvantagesSection"


export default function App() {
  return (
    <div>
      <Header/>
      <main> 
        <TeachingSection/>
        <AdvantagesSection/>
      </main>
    </div>
  )
}
