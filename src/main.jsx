import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { MainPage } from "./views/MainPage.jsx";
import { Cart } from "./views/Cart.jsx";
import { Contact } from "./views/Contact.jsx";

const router = createBrowserRouter([
	{
		path: "",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <MainPage />,
			},
			{
				path: "/basket",
				element: <Cart />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
