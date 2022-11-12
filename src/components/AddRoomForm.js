import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);
    const { addRoom } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            addRoom({name, area});
            setArea('');
        } else {
            console.log('Invalid entry');
        }
    };

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    return (
        <div>
            <h2>New Room</h2>
             <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Room name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />&nbsp; &nbsp;
                <input
                    type='text'
                    placeholder='Room area'
                    onChange={handleAreaInput}
                    value={area} 
                />&nbsp; &nbsp;
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};