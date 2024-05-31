import React, { useEffect, useState } from 'react';

const App = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.969541861336673&lng=77.69190827830462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
                const de = await response.json();
                console.log(de);
                const restaurantsData = de?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                console.log(restaurantsData);
                    setRestaurants(restaurantsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Swiggy Restaurants</h1>
            <div id="restaurants">
                {restaurants?.length > 0 ? (
                    restaurants.map((restaurant, index) => (
                        <div key={index} className="restaurant">
                            <h2>{restaurant.info.name}</h2>
                            <p>{restaurant.info.avgRating}</p>


                            {/* <p>Cuisine: {restaurant..cuisine.join(', ')}</p>
                            <p>Rating: {restaurant.info.rating}</p> */}
                        </div>
                    ))
                ) : (
                    <p>No restaurants available</p>
                )}
            </div>
        </div>
    );
};

export default App;

    