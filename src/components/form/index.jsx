import React, { useState } from 'react';

import './form.scss'; // Importez votre fichier CSS

export default function ContactForm() {
    const [formData, setFormData] = useState({
        'first-name': '',
        name: '',
        'e-mail': '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('E-mail envoyé avec succès');
            } else {
                alert("Une erreur s'est produite lors de l'envoi de l'e-mail");
            }
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire', error);
            alert("Une erreur s'est produite lors de la soumission du formulaire");
        }
    };

    return (
        <div className="form">
            <form action="/contact" method="POST" className="form__container" onSubmit={handleSubmit}>
                <div className="form__champ">
                    <label htmlFor="first-name">Nom :</label>
                    <input className="box" type="text" name="first-name" id="first-name" required value={formData['first-name']} onChange={handleChange} />
                </div>
                <div className="form__champ">
                    <label htmlFor="name">Prénom :</label>
                    <input className="box" type="text" name="name" id="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form__champ">
                    <label htmlFor="adresse e-mail">Adresse e-mail :</label>
                    <input className="box" type="text" name="e-mail" id="e-mail" required value={formData['e-mail']} onChange={handleChange} />
                </div>
                <div className="form__champ">
                    <label htmlFor="phone">Téléphone :</label>
                    <input className="box" type="text" name="phone" id="phone" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form__champ">
                    <label htmlFor="message">Message :</label>
                    <textarea
                        className="box"
                        name="message"
                        id="message"
                        required
                        style={{ minHeight: "50px", resize: "vertical" }}
                        rows="8"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Saisissez votre message ici..."
                    />
                </div>
                <div className="form__check">
                    <input type="checkbox" id="conditions" className="conditions" name="conditions" required />
                    <label htmlFor="conditions">
                        J’ai pris connaissance et accepte la présente politique de confidentialité. L’envoi du présent formulaire vaut acceptation.
                    </label>
                </div>
                <div className="form__submit">
                    <input className="form__submit__button" type="submit" value="envoi" />
                </div>
            </form>
        </div>
    );
}