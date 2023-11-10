import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function FormCreate() {
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");

  function handleSubmit() {
    axios
      .post("http://localhost:3000/users", {
        name,
        email,
        gender,
      })
      .then(function (response) {
        console.log(response);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Gender</label>
        <input
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="text"
          class="form-control"
        />
      </div>
      <button onClick={handleSubmit} type="button" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FormCreate;
