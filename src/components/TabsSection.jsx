import Button from "./Button/Button";

export default function TabsSection({active, onChange}){
    return (
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active === 'main'} onClickParam={()=> onChange('main')}>Главная</Button>
            <Button isActive={active === 'feedback'} onClickParam={()=> onChange('feedback')}>Обратная связь</Button>
        </section>
    )
}