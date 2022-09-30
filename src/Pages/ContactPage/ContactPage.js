import React, {useState} from 'react'
import './ContactPage.css';

export default function ContactPage ({contacts, setContacts}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, {
      name: name,
      phone: phone,
      email: email
    }])
    setName("");
    setPhone("");
    setEmail("");
  }

  return (
    <div className="new-contact-container">
      <form className="card">
        <div className="header">
          <h2>New Contact</h2>
          <hr />
        </div>
        <input type="text" placeholder='Name' value={name}
          onChange={(e)=> {
            setName(e.target.value)
          }}/>
        <input type="tel" placeholder='Phone Number' value={phone}
          onChange={(e)=> {
            setPhone(e.target.value)
          }}
        />
        <input type="email" placeholder='Email' value={email}
          onChange={(e)=> {
            setEmail(e.target.value)
          }}
        />
        <button onClick={handleSubmit}>Add</button>

      </form>
    </div>
  )
}
