import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
    
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    alert("Login sucessfully");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <input type="email"name="email"placeholder="Enter Email"value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

      
        <div>
          <input type="password"name="password"placeholder="Enter Password"value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <br />


        <div>
          <label><input type="checkbox"name="remember"checked={formData.remember}
              onChange={handleChange}
            />
            Remember </label>
        </div>

        <br />


        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;