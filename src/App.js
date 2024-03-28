import React from "react";
import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import CounterPage from "./pages/CounterPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Routes>
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/post" element={<PostListPage />} />
      <Route path="/" element={<RootPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/todos",
//     element: <Todos />,
//   },
//   {
//     path: "/counter",
//     element: <Counter />,
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }
