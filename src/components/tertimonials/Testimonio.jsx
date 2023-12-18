import React from 'react';
import '../../styles/tertimonials/Testimonio-styles.css';

export const Testimonio = ({ name, country, role, company, testimony, nameImage }) => {
    
    return (
        <div className='container'>
            <div className='contenedor_testimonio'>
                <div className='contenedor_testimonio__testimonio_image'>
                    <img
                        src={require(`../../assets/testimony-${nameImage}.jpg`)}
                        alt="box image" />
                </div>
                <div className='contenedor_testimonio__content'>
                    <p className='contenedor_testimonio__name'><strong>{name}</strong> en {country}</p>
                    <p className='contenedor_testimonio__role'>{role} en <strong>{company}</strong></p>
                    <p className='contenedor_testimonio__text'>"{testimony}"</p>
                </div>
            </div>
        </div>

    )
}
