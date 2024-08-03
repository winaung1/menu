import React, { useState } from "react";

const address = "1290 W Colonel Rd, Salt Lake City, UT 84116";

const openGoogleMaps = () => {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  window.open(url, "_blank");
};

const openAppleMaps = () => {
  const url = `http://maps.apple.com/?q=${encodeURIComponent(address)}`;
  window.open(url, "_blank");
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(address).then(
    () => {
      alert("Address copied to clipboard!");
    },
    (err) => {
      console.error("Could not copy text: ", err);
    }
  );
};

const Address = () => {
  return (
    <div className="address">
      <h2 className="text-4xl py-4 font-semibold">Our Location</h2>
      <p>{address}</p>
      <div className="map gap-4 flex flex-col md:flex-row items-center justify-center md:space-x-4 my-2">
        <button
          className="border border-black text-black px-4 py-3 rounded-lg"
          onClick={copyToClipboard}
        >
          Copy Address
        </button>
        <button
          className="bg-white text-black px-4 py-3 rounded-lg"
          onClick={openGoogleMaps}
        >
          Open in Google Maps
        </button>
        <button
          className="bg-white text-black px-4 py-3 rounded-lg"
          onClick={openAppleMaps}
        >
          Open in Apple Maps
        </button>
      </div>
      <h2>Time: 12 PM (Noon)</h2>
    </div>
  );
};

export default Address;
