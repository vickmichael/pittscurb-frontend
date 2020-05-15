import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

const Autocomplete = () => {
    const dispatch = useDispatch();

    const handlePlaceChange = (place) => {
        dispatch({ type: 'UPDATE_PLACE', value: place });
    };
    
    const urlBase = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCsZl0YbAGyjngFuAuaoSDIMUJAW8omovM&libraries=places";

    // TODO: handle enter keyDown to select the first option (will trigger place_changed listener and alter state)

    useEffect(() => {
        loadScript(urlBase, () => {
            const input = document.getElementById('autocomplete');
            const autocomplete = new google.maps.places.Autocomplete(input); // eslint-disable-line no-undef
            autocomplete.setTypes('establishment');
            autocomplete.addListener('place_changed', () => {
                handlePlaceChange(autocomplete.getPlace());
            });
        });
    });
    
    return (
        <div>
            <input
                id="autocomplete"
                type="text"
                placeholder="Search a business, address, or intersection"
            />
        </div>
    );

    // loads the script at the URL and triggers the callback when it's ready
    function loadScript(url, callback) {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = url;

    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
  }
};

export default Autocomplete;
