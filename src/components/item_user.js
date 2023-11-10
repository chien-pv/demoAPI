import axios from "axios";

function ItemUser({ id, name, email, gender, handleDelete }) {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>
        <button
          onClick={() => {
            handleDelete(id);
          }}
          type="button"
          class="btn btn-outline-danger"
        >
          Delete
        </button>
        <button type="button" class="btn btn-outline-warning">
          Edit
        </button>
      </td>
    </tr>
  );
}
export default ItemUser;
