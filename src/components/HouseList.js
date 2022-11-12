import React, { Component } from 'react';
import HouseApi from './HouseApi.js';
import House from './House.js';

export default class HousesList extends Component {
    state = {
        houses: []
    };

    //We want to be able to perform CRUD Operations when root component is mounted
    componentDidMount() {
        this.getAllHouses();
    };


    getAllHouses = async () => {
        const houseList = await HouseApi.get();
        this.setState({ houseList });
    };


    updateHouse = async (house) => { 
        await HouseApi.put(house); 
        this.getAllHouses();
    };

    render() {
        return (
            <div className='houseList'>
                {/* We need to be able to display all the houses on respective house
                components. So, loop over each house and display on respective House component */}
                {this.state.houses.map((house, index) => (
                    <House 
                        house={house}
                        key={index}
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        )
    }
}

