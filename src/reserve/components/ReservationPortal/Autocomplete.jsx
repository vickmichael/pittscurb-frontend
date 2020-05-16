import React, { useEffect, useRef } from 'react';

import { useDispatch } from 'react-redux';

const Autocomplete = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();

    // 4800m = 3 miles
    const searchRadius = 4800;
    const defaultCenter = { lat: 40.44, long: -79.99};

    const handlePlaceChange = (place) => {
        dispatch({ type: 'UPDATE_PLACE', value: place });
    };

    // TODO: handle enter keyDown to select the first option (will trigger place_changed listener and alter state)

    // calculate bounds for geographic biasing 
    const geoBias = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const center = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                };
                return new google.maps.Circle( // eslint-disable-line no-undef
                    { center: center, radius: searchRadius }
                ).getBounds();
            });
        }
        else {
            return new google.maps.Circle( // eslint-disable-line no-undef
                { center: defaultCenter, radius: searchRadius }
            ).getBounds();
        }
    }

    useEffect(() => {
        const autocomplete = new google.maps.places.Autocomplete(inputRef.current); // eslint-disable-line no-undef

        autocomplete.setTypes('establishment');
        autocomplete.setBounds(geoBias());
        autocomplete.addListener('place_changed', () => {
            handlePlaceChange(autocomplete.getPlace());
        });
    }, [inputRef])  

    return (
        <div>
            <input
                id="autocomplete"
                ref={inputRef}
                type="text"
                placeholder="Search a business, address, or intersection"
            />
        </div>
    );
};

export default Autocomplete;
