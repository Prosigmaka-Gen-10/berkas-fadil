import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import App from "./App";
import ArticleList from "./pages/ArticleList";
import ArticleForm from "./pages/ArticleForm";
import CategoryList from "./pages/CategoriesList";
import CategoryForm from "./pages/CategoriesForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/articles" replace />} />
          <Route path="articles" element={<ArticleList />} />
          <Route path="articles/form" element={<ArticleForm />} />
          <Route path="articles/form/:articleId" element={<ArticleForm />} />
          <Route path="categories" element={<CategoryList />} />
          <Route path="categories/form" element={<CategoryForm />} />
          <Route
            path="categories/form/:categoryId"
            element={<CategoryForm />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
