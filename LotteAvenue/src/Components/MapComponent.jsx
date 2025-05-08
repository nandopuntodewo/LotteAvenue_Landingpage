import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = () => {
  const [markerPosition, setMarkerPosition] = useState([
    -7.050448250546526, 110.39244526768879,
  ]); // Default position
  const [searchQuery, setSearchQuery] = useState("");
  const provider = new OpenStreetMapProvider();

  const handleSearch = async () => {
    const results = await provider.search({ query: searchQuery });
    if (results && results.length > 0) {
      const { y, x } = results[0]; // Get the first result
      setMarkerPosition([y, x]); // Update marker position
      mapInstance.setView([y, x], 13); // Center the map on the new location
    } else {
      alert("Location not found");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Call the search function on Enter key press
    }
  };

  let mapInstance;

  useEffect(() => {
    mapInstance = L.map("map").setView(markerPosition, 18);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 25,
    }).addTo(mapInstance);

    const marker = L.marker(markerPosition).addTo(mapInstance);
    marker.bindPopup("You are here!").openPopup();

    return () => {
      mapInstance.remove();
    };
  }, [markerPosition]);

  return (
    <div className="flex flex-col items-center" id="maps">
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress} // Add key press event handler
          placeholder="Search for a location"
          className="p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-md"
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Search
        </button>
      </div>
      <div id="map" className="h-96 w-3/4 rounded-md shadow-md"></div>
      <div className="text-center p-5">
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-4 md:mb-8">
          Find Your GoodHair Here!
        </h1>
      </div>
      <div className="h-3 separator"></div>
    </div>
  );
};

export default MapComponent;
