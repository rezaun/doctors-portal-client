import React from 'react';

const InfoCard = ({img, cardTitle, description, bgclass}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl p-5 ${bgclass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />
                </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>               
            </div>
        </div>
    );
};

export default InfoCard;