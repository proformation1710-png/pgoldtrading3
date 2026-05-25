"use client"

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>

      <button
        onClick={() => {
          alert("Checking credentials...")
        }}
      >
        Login
      </button>
    </div>
  )
}