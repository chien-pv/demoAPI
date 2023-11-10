import axios from "axios";
import ItemUser from "./item_user";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ListUser() {
  const navigate = useNavigate();

  let [users, setUsers] = useState([]);
  let [deleted, setDeleted] = useState(false);

  function handleDelete(id) {
    let confirm = window.confirm("Are you sure?");
    if (confirm) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((respone) => {
          console.log(respone);
          setDeleted(!deleted);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((respone) => {
        setUsers(respone.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deleted]);

  let datas = users.map((item, index) => {
    return (
      <ItemUser handleDelete={handleDelete} key={`user_${index}`} {...item} />
    );
  });
  return (
    <>
      <button
        onClick={() => {
          navigate("/new");
        }}
        type="button"
        class="btn btn-outline-info"
      >
        New
      </button>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search ... " />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{datas}</tbody>
      </table>
    </>
  );
}

export default ListUser;
