import './Button.css'

function Button({ children, onClick, style={}}) {

    return (
        <button onClick={onClick} style={style} type="submit" className="form-submit">
            {children}</button>
		
    )
}

export default Button