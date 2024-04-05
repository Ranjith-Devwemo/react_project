import React, { useState } from 'react';
// import "./Css/contact.css"
// import { Link } from 'react-router-dom';
import axios from "axios";
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  axios.post("http://localhost:2024/",{name,email,password}).then(res=>{alert("success"+res)}).catch(err=>{console.log("error error :"+err)})
  };

  return (
    <div className='contact'>
      <h1 className='con-h1'> Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder='Email'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Password'
            id="pass"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='submit-btn'>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
