import React, { useEffect, useState } from 'react'
import cat2 from '../assets/cat2.svg'
import cat1 from '../assets/cat1.svg'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'


export default function SignIn() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setError] = useState('')

    const isInvalid = password === '' || email === ''


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
          
            history.push(ROUTES.DASHBOARD)
        } catch (err) {
            setEmail('')
            setPassword('')
            setError(err.message)
        }
    }

    useEffect(() => {
        document.title = 'Login - Pets'
    }, [])
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
            <img src={cat2} alt="pet"  className="mr-10"  />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border rounded border-gray-primary mb-4 ">
                    <h1 className="flex justify-center w-full">
                    <img src={cat1} alt="pet" className="p-5 bg-no-repeat bg-center " /> 
                    </h1>
                    {err && <p className="mb-4 text-xs text-red-500">{err}</p>}
                    <form onSubmit={handleLogin} method="POST">
                        <input type="email" placeholder="Email Address" aria-label="Enter your email"
                            onChange={({ target }) => setEmail(target.value)} value={email}
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <input type="password" placeholder="Your Password" aria-label="Enter your password"
                            onChange={({ target }) => setPassword(target.value)} value={password}
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <button type="submit" disabled={isInvalid} className={`bg-blue-500 w-full rounded h-8 font-bold  text-white  ${isInvalid && 'opacity-50'}`}>Login</button>

                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white rounded p-4 border border-gray-primary ">
                    <p className="text-sm">Don`t have an account? {''}
                        <Link to={ROUTES.SIGNUP} className="font-bold text-blue-500 ">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )

}