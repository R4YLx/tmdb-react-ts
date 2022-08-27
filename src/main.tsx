import "./css/index.css";

import App from "./App";

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import LocalStorageContextProvider from "./contexts/LocalStorageContextProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<LocalStorageContextProvider>
					<App />
				</LocalStorageContextProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);
