import classes from './Button.module.css'

export default function Button({children, onClickParam, isActive}){
    return (
        <button className={isActive ? `${classes.button} ${classes.active}` : classes.button} onClick={onClickParam}>
            {children}
        </button>
    )
}   