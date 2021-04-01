import '../auth/auth.css'
import React, { useRef, useState } from "react"
import { useAuth } from "../auth/AuthContext"
import { Link, useHistory } from "react-router-dom"

const LogInd = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        console.log(emailRef.current.value)
        history.push("/")
        } catch {
        setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <div className="logind-container">
            <h2>Log Ind</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <label>E-mail</label>
                <input type="email" ref={emailRef} required />

                <label>Password</label>
                <input type="password" ref={passwordRef} required />

                <button type="submit" disabled={loading} >Log Ind</button>
            </form>
            <div className="auth-link">
                Har ikke en bruger? <Link to="/opret-bruger">Opret dig nu</Link>
            </div>
        </div>
    )
}

export default LogInd;