import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useRegisterMutation } from './authApiSlice'
import useTitle from '../../hooks/useTitle'
import PulseLoader from 'react-spinners/PulseLoader'

const Register = () => {
  useTitle('User Registration')

  const userRef = useRef()
  const errRef = useRef()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [role, setRole] = useState('applicant') // default role
  const [errMsg, setErrMsg] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [register, { isLoading }] = useRegisterMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username, email, password, confirmPwd, role])

const handleSubmit = async (e) => {
  e.preventDefault()

  if (password !== confirmPwd) {
    setErrMsg("Passwords do not match")
    return
  }

  try {
    const { message } = await register({
      username,
      password,
      roles: [role]  // 👈 send as array
    }).unwrap()

    // After register, redirect to login page instead of dash
    setUsername('')
    setPassword('')
    setConfirmPwd('')
    setRole('applicant')
    navigate('/login')   // 👈 redirect to login

  } catch (err) {
    if (!err.status) {
      setErrMsg('No Server Response')
    } else if (err.status === 400) {
      setErrMsg('Missing Required Fields')
    } else if (err.status === 409) {
      setErrMsg('Username already exists')
    } else {
      setErrMsg(err.data?.message)
    }
    errRef.current.focus()
  }
}


  if (isLoading) return <div className="flex justify-center items-center h-screen"><PulseLoader color={"#1E40AF"} /></div>

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#1E40AF]">Register</h1>
          <p className="text-sm text-gray-500">Create your account</p>
        </header>

        <main>
          <p ref={errRef} className={errMsg ? "text-red-600 mb-2" : "sr-only"} aria-live="assertive">{errMsg}</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                ref={userRef}
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPwd" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirmPwd"
                type="password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:outline-none"
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <div className="flex items-center gap-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="applicant"
                    checked={role === 'applicant'}
                    onChange={(e) => setRole(e.target.value)}
                    className="h-4 w-4 text-[#10B981] focus:ring-[#10B981] border-gray-300"
                  />
                  <span>Applicant</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="employer"
                    checked={role === 'employer'}
                    onChange={(e) => setRole(e.target.value)}
                    className="h-4 w-4 text-[#10B981] focus:ring-[#10B981] border-gray-300"
                  />
                  <span>Employer</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1E40AF] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Register
            </button>
          </form>
        </main>

        <footer className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#10B981] hover:underline">Sign In</Link>
          </p>
          <Link to="/" className="block mt-2 text-sm text-[#10B981] hover:underline">Back to Home</Link>
        </footer>
      </div>
    </section>
  )
}

export default Register
