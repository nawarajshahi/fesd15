const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    get = async () => {
        try {
            const res = await fetch(HOUSES_ENDPOINT);
            return await res.json();
        } catch(e) {
            console.log("There is an error with get request on houseApi", e);
        }
        
    }

    put = async (house) => {
        try {
            const res = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });

            return await res.json();

        } catch(e) {
            console.log("Error updating a house", e);
        }
    }
}

export const housesApi = new HousesApi();