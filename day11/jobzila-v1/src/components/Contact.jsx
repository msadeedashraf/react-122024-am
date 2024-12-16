//import React from 'react'

const Contact = () => {
  return (
    <main>
    <section id="contact-form-section">
      <h2>Contact Form</h2>

      <form id="contact-form" action="submit_form.php" method="post">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <input type="submit" value="Submit" />
      </form>
    </section>
  </main>
  )
}

export default Contact
