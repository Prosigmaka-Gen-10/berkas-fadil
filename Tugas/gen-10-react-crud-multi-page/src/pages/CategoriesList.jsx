import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const res = await fetch("http://localhost:3000/categories");
    const data = await res.json();
    setCategories(data);
  }

  async function deleteCategory(categoryId) {
    await fetch("http://localhost:3000/categories/" + categoryId, {
      method: "DELETE",
    });

    getCategories();
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <h1>Daftar Kategori</h1>

      <Link to="/categories/form">Buat Kategori</Link>

      <table width="100%" border="1">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr>
              <td>{category.category_name}</td>
              <td>
                <Link to={"/categories/form/" + category.id}>
                  <button>Edit</button>
                </Link>
                &nbsp;
                <button onClick={() => deleteCategory(category.id)}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
