import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Phone number submitted: ${phone}`);
  };

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, world!</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter your phone number:{" "}
          <input
            type="tel"
            value={phone}
            onChange={handleChange}
            placeholder="e.g. 123-456-7890"
            required
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {phone && <p>Your phone number: {phone}</p>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
