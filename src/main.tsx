import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router/index.tsx";
import { fetchChannelAPI } from "./apis/list.ts";

fetchChannelAPI().then((res) => {
  console.log(res);
});

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
