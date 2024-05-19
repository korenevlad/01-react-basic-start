import Header from "./components/Header/Header"
import TeachingSection from "./components/TeachingSection"
import AdvantagesSection from "./components/AdvantagesSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import { useState } from "react"

export default function App() {
  const[tab, setTab] = useState('main')

  return (
    <>
      <Header/>
      <main> 
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>
        {tab === 'main' &&(
          <>
            <TeachingSection/>
            <AdvantagesSection/>
          </>
        )}
        {tab === 'feedback' && <FeedbackSection/>}
      </main>
    </>
  )
}
