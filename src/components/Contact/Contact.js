import React from 'react';
import './Contact.css';
import Form from "./Form";

const Contact = () => {
    return (
        <section className='contact'>
            <div className="container">
                <h2 className='contact__title title'>Связаться со мной</h2>
                <p className='contact__subtitle'>Если у вас есть предложение или проект который хотите реализовать, оставьте свои контакты.</p>
                <Form/>
            </div>
        </section>
    );
};

export default Contact;