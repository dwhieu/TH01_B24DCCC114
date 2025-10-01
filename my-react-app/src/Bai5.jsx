import React, { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      setSubmittedData(null);
    } else {
      setError("");
      setSubmittedData(form);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Form Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên"
          value={form.name}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "5px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "5px" }}
        />
        <input
          type="text"
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "5px" }}
        />
        <button type="submit">Đăng ký</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submittedData && (
        <div style={{ marginTop: "15px" }}>
          <h3>Thông tin đã nhập:</h3>
          <p>Tên: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Mật khẩu: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
