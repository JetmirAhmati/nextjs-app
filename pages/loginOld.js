import Head from 'next/head'
import { useState, useEffect } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseClient'

const About = () => {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user, setUser] = useState("")


    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

            setRegisterEmail('')
            setRegisterPassword('')

        } catch (error) {
            console.log(error.message)
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log('user register', user);

            setLoginEmail('')
            setLoginPassword('')

        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('authstageChanged', currentUser)
            setUser(currentUser)
        })

        return unsubscribe
    }, [])

    return (
        <div className='grid'>
            <Head>
                <title>Login page</title>
            </Head>
            <h1>Login and Register page</h1>

            <div>
                <h3>Register User</h3>
                <input placeholder='Email...' value={registerEmail} onChange={(event) => setRegisterEmail(event.target.value)}></input>
                <input placeholder='Password' value={registerPassword} onChange={(event) => setRegisterPassword(event.target.value)}></input>
                <button onClick={register}>Create User</button>
            </div>


            <div>
                <h3>Login User</h3>
                <input placeholder='Email...' onChange={(event) => setLoginEmail(event.target.value)}></input>
                <input placeholder='Password' onChange={(event) => setLoginPassword(event.target.value)}></input>
                <button onClick={login}>Login</button>
            </div>

            <div>
                <h3>User Logged In: {user?.email} </h3>
                <br />
                <br />
                <button onClick={logout}>LogOut</button>
            </div>
        </div>
    )
}

export default About