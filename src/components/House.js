import React from 'react';
import AddRoomForm from './AddRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house, rooms: house.rooms.filter((room) => room._id !== roomId)
        };

        updateHouse(updatedHouse);
    }

    const addRoom = (newRoom) => updateHouse({...house, rooms: [...house.rooms, newRoom]});


    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => {
                <li key={index}>
                    <label>
                        {`Room: ${room.name} || Area: ${room.area}`}
                        &nbsp; &nbsp;
                    </label>
                    <button onClick={(e) => deleteRoom(room._id)}>
                        Delete Room
                    </button>
                </li>
            })}
        </ul>
    );

    return (
        <div>
            <h2>{house.name}</h2>
            {
                rooms({rooms, houseId: house._id, deleteRoom})
            }
            <AddRoomForm addRoom={addRoom} />
        </div>
    )
}