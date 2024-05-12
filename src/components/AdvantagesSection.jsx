import Button from "./Button/Button"
import { differences } from "../data"
import { useState } from "react"


export default function AdvantagesSection(){

    const [contentType, setContentType] = useState()

    function handleClick(type){
        setContentType(type)
    }

    return (
        <section>
          <h3>Чем мы отличаемся от других?</h3>
          
          <Button isActive = {contentType === 'way'} onClickParam={()=>handleClick('way')}>Подход</Button>
          <Button isActive = {contentType === 'easy'} onClickParam={()=>handleClick('easy')}>Доступность</Button>
          <Button isActive = {contentType === 'program'} onClickParam={()=>handleClick('program')}>Концентрация</Button>

          {contentType ? <p>{differences[contentType]}</p> : <p>Нажми на кнопку</p>}
        </section>
    )
}