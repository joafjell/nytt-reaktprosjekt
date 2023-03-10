import { Link } from "react-router-dom"

export default function Login({setLogin, login, user, exists, setExists}){
    
    const handleSubmit= (e) => {
        e.preventDefault()
    }

    const handleChange= (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        setLogin((prev) => ({...prev,[inputName]: inputValue}))
    }
    console.log(login)


    const handleClick= () => {
        login.username === user.username ? setExists(true) : setExists(false)
    }

    console.log(exists)

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Brukernavn:</label>
            <input name="username" id="username" type="text" placeholder="Ola Nordmann.." onChange={handleChange}></input>
            <label htmlFor="password">Passord:</label>
            <input name="password" id="password" type="password" placeholder="********" onChange={handleChange}></input>
            <button type="submit" onClick={handleClick}>Logg inn</button>
        </form>
        {exists === false ? <p>Brukeren finnes ikke, <Link to="register">Register</Link></p> : null}
        </>
    )
}