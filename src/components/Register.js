import { useState } from "react"
import { Link } from "react-router-dom"

export default function Register({user, setUser}){
    const [complete, setComplete] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        setUser((prev) => ({...prev, [inputName]: inputValue}))
    }

    const handleClick = () => {
        user.password === user.checkpass ? setComplete(true) : console.log("passordene er ikke like")
    }
    
    return(
        <>
        {complete ? <p>Bruker ble laget, <Link to="/">Log inn</Link></p> : <form onSubmit={handleSubmit}>
            <label htmlFor="username">Make a username:</label>
            <input id="username" name="username" placeholder="Ola Nordmann" type="text" onChange={handleChange}></input>
            <label htmlFor="password">Make a password:</label>
            <input id="password" name="password" placeholder="******" onChange={handleChange}></input>
            <label htmlFor="checkpass">Confirm password:</label>
            <input id="checkpass" name="checkpass" placeholder="******" type="password" onChange={handleChange}></input>
            <button onClick={handleClick} type="submit">Register</button>
        </form>}
        </>
    )
}