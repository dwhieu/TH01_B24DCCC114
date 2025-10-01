import React from "react";
import TextCounter from "./Bai1";
import TrafficLight from "./Bai2";
import TodoList from "./Bai3";
import RegisterForm from "./Bai5";
function App() {
  return (
    <div className="App">
      <h1>Bài 1:Bộ đếm ký tự</h1>
      <TextCounter />
      <h1>Bài 2:Đèn giao thông</h1>
      <TrafficLight />
      <h1>Bài 3:Danh sách công việc</h1>
      <TodoList />
      <h1>Bài 5:Form Đăng ký</h1>
      <RegisterForm />
    </div>
  );
}

export default App;