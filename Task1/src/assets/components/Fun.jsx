import { useState } from "react"
import './Fun.css'



function Fun() {
  const [Dark, IsDark] = useState(false);

  function toggleTheme() {
    IsDark(!Dark);
  }

  return (
    <div
      style={{
        backgroundColor: Dark ? "black" : "white",
        color: Dark ? "white" : "black",
        height: "100vh", width:"5000px"
      }}
    >
      <button onClick={toggleTheme}>Switch Theme</button>
      <h1>{Dark ? "Dark Mode" : "Light Mode"}</h1>
    </div>
  );
}

export default Fun;








// echo "# React" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/mohmdsaalim/React.git
// git push -u origin main







