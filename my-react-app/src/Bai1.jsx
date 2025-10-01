import React, { useState } from "react";

function TextCounter() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const charCount = text.length;
  const maxChars = 100;

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bộ đếm ký tự</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
        style={{ padding: "5px", width: "250px" }}
      />
      <p style={{ color: charCount > maxChars ? "red" : "black" }}>
        Số ký tự: {charCount}
      </p>
      {charCount > maxChars && (
        <p style={{ color: "red" }}>Bạn đã vượt quá giới hạn 100 ký tự!</p>
      )}
    </div>
  );
}

export default TextCounter;
