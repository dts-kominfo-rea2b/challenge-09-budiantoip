// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (data) => {
    const {name, phone, email, photo} = data.data;
    return (
        <div className='card' key={phone}>
          <div className='row'>
            <div className='avatar-container'>
              <div className='photo'>
                <img className='img' alt='contact' src={photo} />
              </div>
            </div>
            <div className='details-container'>
              <div className='content'>
                <h3>{name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Contact;