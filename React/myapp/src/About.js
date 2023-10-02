import React, {useState} from "react";

export default function About() {
  const [myData, setMyData] = useState([]);
  fetch("https://fakestoreapi.com/products")
    .then((res)=> res.json())
    .then((myData)=> setMyData(myData));
  return (
    <div>
      {
        <div className="card">
        {myData.map((item,id)=>(
          <div key={id} className="card">
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
        </div>
      }
    </div>
  );
}
