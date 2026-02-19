import React, { useEffect, useState } from "react";

function App() {
  const [traffic, setTraffic] = useState(null);
  const [energy, setEnergy] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/traffic")
      .then((res) => res.json())
      .then((data) => setTraffic(data));

    fetch("http://localhost:5000/energy")
      .then((res) => res.json())
      .then((data) => setEnergy(data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Smart City Dashboard</h1>

      <h2>Traffic</h2>
      {traffic ? (
        <p>
          Area: {traffic.area} | Traffic: {traffic.traffic}%
        </p>
      ) : (
        <p>Loading traffic...</p>
      )}

      <h2>Energy</h2>
      {energy ? (
        <p>
          Zone: {energy.zone} | Usage: {energy.usage} kWh
        </p>
      ) : (
        <p>Loading energy...</p>
      )}
    </div>
  );
}

export default App;

