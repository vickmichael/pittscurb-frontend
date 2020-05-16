import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

const Autocomplete = () => {
    const dispatch = useDispatch();

    // 4800m = 3 miles
    const searchRadius = 4800;
    const defaultCenter = { lat: 40.44, long: -79.99};

    const handlePlaceChange = (place) => {
        dispatch({ type: 'UPDATE_PLACE', value: place });
    };
    
    const urlBase = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCsZl0YbAGyjngFuAuaoSDIMUJAW8omovM&libraries=places";

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
                    {center: center, radius: searchRadius}
                ).getBounds();
            });
        }
        else {
            return new google.maps.Circle( // eslint-disable-line no-undef
                {center: defaultCenter, radius: searchRadius}
            ).getBounds();
        }
    }


    useEffect(() => {
        loadScript(urlBase, () => {
            const input = document.getElementById('autocomplete');
            const autocomplete = new google.maps.places.Autocomplete(input); // eslint-disable-line no-undef
            autocomplete.setTypes('establishment');
            autocomplete.setBounds(geoBias()); 
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
