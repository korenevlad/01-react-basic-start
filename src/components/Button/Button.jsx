import './Button.css'

export default function Button({children, onClickParam, isActive}){

    return <button className={isActive ? 'button active': 'button'} onClick={onClickParam}>
                {children}
            </button>

}