import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials, selectCurrentToken } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'
import useTitle from '../../hooks/useTitle'
import PulseLoader from 'react-spinners/PulseLoader'

const Login = () => {
  useTitle('Employee Login')

  const userRef = useRef()
  const errRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [persist, setPersist] = usePersist()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector(selectCurrentToken)

  const [login, { isLoading }] = useLoginMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { accessToken } = await login({ username, password }).unwrap()
      dispatch(setCredentials({ accessToken }))
      setUsername('')
      setPassword('')
      navigate('/')  // redirect after login
    } catch (err) {
      if (!err.status) setErrMsg('No Server Response')
      else if (err.status === 400) setErrMsg('Missing Username or Password')
      else if (err.status === 401) setErrMsg('Unauthorized')
      else setErrMsg(err.data?.message || 'Login Failed')
      errRef.current.focus()
    }
  }

  const handleUserInput = (e) => setUsername(e.target.value)
  const handlePwdInput = (e) => setPassword(e.target.value)
  const handleToggle = () => setPersist((prev) => !prev)

  if (isLoading) return <PulseLoader color="#1E40AF" />

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#1E40AF]">Employee Login</h1>
        </header>
        <main>
          <p ref={errRef} className={errMsg ? 'text-red-600 text-sm mb-2' : 'sr-only'} aria-live="assertive">
            {errMsg}
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                value={username}
                onChange={handleUserInput}
                autoComplete="off"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2 text-gray-900 focus:ring-2 focus:ring-[#1E40AF] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePwdInput}
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2 text-gray-900 focus:ring-2 focus:ring-[#1E40AF] focus:outline-none"
              />
            </div>
            <button
              className="w-full py-2 px-4 rounded-lg bg-[#1E40AF] text-white font-semibold hover:bg-[#1e3a8a] transition duration-200"
            >
              Sign In
            </button>
            <label htmlFor="persist" className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                id="persist"
                checked={persist}
                onChange={handleToggle}
                className="h-4 w-4 text-[#10B981] border-gray-300 rounded focus:ring-[#10B981]"
              />
              Trust This Device
            </label>
          </form>
        </main>
        <footer className="mt-6 text-center">
          <Link to="/" className="text-[#10B981] hover:text-[#059669] font-medium">Back to Home</Link>
        </footer>
      </div>
    </section>
  )
}

export default Login
