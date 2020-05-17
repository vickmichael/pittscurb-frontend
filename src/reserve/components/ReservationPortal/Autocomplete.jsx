import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const { destination } = useSelector((state) => state.spotSearch);
  const dispatch = useDispatch();
  const inputRef = useRef();

  // 4800m = 3 miles
  const searchRadius = 4800;
  const defaultCenter = { lat: 40.44, lng: -79.99 };

  const handlePlaceChange = (place) => {
    dispatch({ type: 'UPDATE_PLACE', value: place });
  };

  // TODO: handle enter keyDown to select the first option
  // (will trigger place_changed listener and alter state)

  // calculate bounds for geographic biasing
  const geoBias = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        return new google.maps.Circle( // eslint-disable-line no-undef
          { center, radius: searchRadius },
        ).getBounds();
      });
    } else {
      return new google.maps.Circle( // eslint-disable-line no-undef
        { center: defaultCenter, radius: searchRadius },
      ).getBounds();
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const autocomplete = new google.maps.places.Autocomplete(inputRef.current);

    autocomplete.setTypes('establishment');
    autocomplete.setBounds(geoBias());
    autocomplete.addListener('place_changed', () => {
      handlePlaceChange(autocomplete.getPlace());
    });

    if(destination && destination.name && destination.formatted_address) {
      document.getElementById("autocomplete").value = destination.name + ", " + destination.vicinity;
    }

  }, [inputRef]);

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
