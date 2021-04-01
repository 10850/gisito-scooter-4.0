import '../auth/auth.css'
import React, { useRef, useState } from "react"
import { useAuth } from '../auth/AuthContext'
import { Link, useHistory } from "react-router-dom"
import { db } from '../../firebase/firebase'

const Opret = () => {
        const fullNameRef = useRef()
        const emailRef = useRef()
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const { signup } = useAuth()
        const [error, setError] = useState("")
        const [loading, setLoading] = useState(false)
        const history = useHistory()

        async function handleSubmit(e) {
            e.preventDefault()

            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                return setError("Passwords do not match")
            }

            try {
                setError("")
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value, fullNameRef.current.value)
                await db.collection("users").add({email: emailRef.current.value, fullName: fullNameRef.current.value})
                history.push("/log-ind")
            } catch {
                setError("Failed to create an account")
            }

            setLoading(false)
        }

    return (
        <div className="OpretBruger-container">
            <h2>Opret en bruger</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <label>Fornavn og Efternavn</label>
                <input type="text" ref={fullNameRef} required />

                <label>E-mail</label>
                <input type="email" ref={emailRef} required />

                <label>Password</label>
                <input type="password" ref={passwordRef} required />

                <label>Bekræft Password</label>
                <input type="password" ref={passwordConfirmRef} required />

                <button disabled={loading} type="submit">
                    Opret Dig
                </button>
            </form>
            <div className="auth-link">
                Har allerede en bruger? <Link to="/log-ind">Log Ind</Link>
            </div>
        </div>
    )
}

export default Opret;