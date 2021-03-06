import React, {useState} from 'react';

function Contact () {
    const [formState, setFormState] = useState({name: '', email:'', message:''});
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    
    return (
        <section>
          <h1>Contact me</h1>
          <p>Name, email, and message are required fields!</p>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" defaultValue={formState.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" defaultValue={formState.email} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" defaultValue={formState.message} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
}

export default Contact;