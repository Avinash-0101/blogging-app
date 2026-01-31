import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    try {
      const res = await axios.post('/api/user/login', form)
      const { token, user } = res.data
      localStorage.setItem('token', token)
      setMessage(`Welcome back, ${user.name}!`)
      setTimeout(() => {
        navigate('/home')
      }, 1000)
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed'
      setMessage(msg)
    }
  }

  return (
    <section className="auth-card">
      <h2>Login to your account</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {message && (
        <p
          style={{
            marginTop: '0.75rem',
            fontSize: '0.9rem',
            color: message.includes('Welcome') ? '#10b981' : '#ef4444',
          }}
        >
          {message}
        </p>
      )}
    </section>
  )
}

export default Login
