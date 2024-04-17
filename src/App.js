import React from "react";
import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import PostPage from "./pages/PostPage";
import RootPage from "./pages/RootPage";
import Writer from "./pages/WriterPage";
import PostListPage from "./pages/PostList";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import Logout from "./components/noticeboard/auth/Logout";
// import UpdaterPage from "./pages/UpdaterPage";

export default function App() {
  return (
    <Routes>
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/login" element={<LoginPage type="login" />} />
      <Route path="/signup" element={<LoginPage type="signup" />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/post/write" element={<Writer />} />
      <Route path="/post/:id" element={<PostPage />} />
      {/* // <Route path="/post/update/:id" element={<UpdaterPage />} /> */}
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
