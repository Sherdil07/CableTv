import React, { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState("");

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/write-json", { data });
      console.log("Data sent to server");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <textarea
        value={data}
        onChange={handleDataChange}
        placeholder="Enter JSON data..."
      />
      <button onClick={handleSubmit}>Save Data</button>
    </div>
  );
}

export default Dashboard;
