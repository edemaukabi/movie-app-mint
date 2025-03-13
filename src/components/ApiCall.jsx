import { useState, useEffect } from "react";
import axios from "axios";

const ApiCallFetch = () => {
  const [user, setUser] = useState({ name: "" });
  const [listOfUser, setListOfUser] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({ name: "" });
        alert("Added: " + data.name + " with id: " + data.id + " added successfully")
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/listOfUser?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setListOfUser(data);
      })
      .catch((err) => console.log(err));
  }, []);


  const handleChange = (e) =>
    setUser({ id: Date.now(), name: e.target.value });
  return (
    <div>
      <h3>API CALL</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" value={user.name} name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {listOfUser.map((post) => (
          <li key={post.id}>
            <span style={{marginRight: "5px"}}>ID: {post.id}</span>
            <span>Title: {post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ApiCallAxios = () => {
  const [user, setUser] = useState({ name: "" });
  const [listOfUser, setListOfUser] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", user)
      .then((res) => {
        setUser({ name: "" });
        alert("Added: " + res.data.name + " with id: " + res.data.id + " added successfully")
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setListOfUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const handleChange = (e) =>
    setUser({ id: Date.now(), name: e.target.value });
  return (
    <div>
      <h3>API CALL</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" value={user.name} name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>
            <span style={{marginRight: "5px"}}>Name: {user.name}</span>
            <span>Phone: {user.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCallAxios;
