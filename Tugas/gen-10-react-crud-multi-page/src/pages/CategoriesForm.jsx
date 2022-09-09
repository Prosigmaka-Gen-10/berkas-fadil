import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CategoryForm() {
  const navigate = useNavigate();
  const params = useParams();
  const isEditing = params.categoryId;

  const [formInput, setFormInput] = useState({
    category_name: "",
  });

  function handleInput(event, inputName) {
    const copyFormInput = { ...formInput };
    copyFormInput[inputName] = event.target.value;
    setFormInput(copyFormInput);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = JSON.stringify(formInput);

    const targetUrl = isEditing
      ? "http://localhost:3000/categories/" + params.categoryId
      : "http://localhost:3000/categories/";

    const method = isEditing ? "PUT" : "POST";

    await fetch(targetUrl, {
      method: method,
      body: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/categories");
  }

  async function getCategoryDetail() {
    const res = await fetch(
      "http://localhost:3000/categories/" + params.categoryId
    );
    const data = await res.json();
    setFormInput(data);
  }

  useEffect(() => {
    if (isEditing) {
      getCategoryDetail();
    }
  }, []);
  console.log(params.categoryId);

  return (
    <>
      <h1>Form Kategori</h1>

      <Link to="/categories">Kembali Ke Daftar Kategori</Link>

      <br />
      <br />
      <br />

      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Nama Kategori <br />
          <input
            type="text"
            value={formInput.category_name}
            onChange={(event) => handleInput(event, "category_name")}
          />
        </label>

        <br />
        <br />

        <button>Submit</button>
      </form>
    </>
  );
}
