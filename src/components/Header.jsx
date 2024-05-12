import logo from '/logo-name.svg'
import { useState } from 'react'

export default function Header(){
    const [nowDate, setNowDate] = useState(new Date())
    setInterval(() => setNowDate(new Date()),1000)
    return(
      <header>
        <img src = {logo} alt="Result"></img>
          {/* <h3>Result University </h3> */}
          <span>Время сейчас: { nowDate.toLocaleTimeString() }</span>
        </header>
    )
  }  