"use client"
/**
 * contact Page
 * Created by Nazmul Hussain 20.08.2023
 * www.nazmul.me
 */
import React, { useState } from 'react';

export default function Contact() {

    const [formData, setFormData] = useState({
            name: '',
            email: '',
            website: '',
            message: '',
        });

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            // Here you can handle the form submission, e.g., send data to a server.
            console.log('Form submitted:', formData);
        };

        return (
            <div>
                <h2>Contact Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label> <br/>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label> <br/>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Website:</label> <br/>
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Message:</label> <br/>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
}