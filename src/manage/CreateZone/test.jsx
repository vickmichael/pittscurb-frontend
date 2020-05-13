const React = window.React;
const { Map, TileLayer, Marker, Popup, GeoJson } = window.ReactLeaflet;
const mapboxAPIkey = "pk.eyJ1IjoiZmVsaXh0YW4iLCJhIjoiY2l0N3RuanV3MGI5ZTJ6cDFwZnl5emMyaCJ9.ODVgVlnonjis9Hkiz_bj9A";
const basemapUrl = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapboxAPIkey}`;
const attribution = 'Map data © OpenStreetMap contributors, CC-BY-SA, Imagery © Mapbox, Population data © US Census Bureau';

/******************************************
* Methods from Leaflet choropleth example *
*******************************************/
function getColor (d) {
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
}

function style (feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}

// highlight on mouseOver
function highlightFeature (e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });
}

// reset default style on mouseOut
function resetHighlight (component, e) {
	console.log(component.refs.geojson);
  // geojsonresetStyle(e.target);
  // how to encapsulate GeoJson component/object?
}

function zoomToFeature (e) {
  // map.fitBounds(e.target.getBounds());
  // how to encapsulate Map component/object?
}

function onEachFeature (component, feature, layer) {
console.log(arguments);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight.bind(null, component),
    click: zoomToFeature
  });
}

/***********************************/

class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 39.833,
      lng: -98.583,
      zoom: 4,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} 
           zoom={this.state.zoom}>
        <TileLayer attribution={attribution} 
        					 url={basemapUrl} 
                   id='mapbox.light' />
        
        <GeoJson data={statesData} 
        				 style={style}
                 onEachFeature={onEachFeature.bind(null, this)}
                 ref="geojson" />
        
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

window.ReactDOM.render(<SimpleExample />, document.getElementById('container'));