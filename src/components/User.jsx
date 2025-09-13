import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState({ count1: 0, count2: 1 });
  const [counts, setCounts] = useState([0, 1]);

  const handleClick = () => {
    setCount((prev) => ({
      ...prev,
      count1: prev.count1 + 1,
      count2: prev.count2 + 1,
    }));
  };
  const handleClick2 = () => {
    setCounts((prev) => prev.map((val) => val + 1));
  };
  return (
    <div className="user-card">
      <h1>Count : {count.count1}</h1>
      <h1>Count2 : {count.count2}</h1>
      <h1>Count : {counts[0]}</h1>
      <h1>Count2 : {counts[1]}</h1>
      <button onClick={handleClick}>Inc Count</button>
      <button onClick={handleClick2}>Inc Count</button>

      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>Contact: @shivansh._.tandon</h4>
    </div>
  );
};

export default User;
