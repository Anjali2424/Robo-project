import React from 'react';

export default function Card({id, name, email}) {
    return (
        <div className='abc'>
            <img src={`https://robohash.org/${id}`} alt="profile_img_roboproject"/>
            <div>
            <h2>{name}</h2>
                <p>{email} </p>
            </div>
        </div>
    )
}