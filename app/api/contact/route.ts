async function handleSubmit() {
  alert("BUTTON WORKS")

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })

    const text = await response.text()

    alert(`Status: ${response.status}`)
    alert(text)

  } catch (error) {
    alert("FETCH ERROR")
    console.error(error)
  }
}