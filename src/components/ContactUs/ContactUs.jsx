import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className="contactUs">
        <div className="heading">
            <h1>Contact Us</h1>
        </div>
        
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required />

            <input type="submit" value="Submit" id="submit"/>
        </form>
        
    </div>
  )
}

export default ContactUs