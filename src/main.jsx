import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./style/global";
import { QueryClientProvider } from "react-query";
import { client } from "./service/queryClient";
import { App } from "./app";
import * as serviceWorkerRegistration from '../pwabuilder-sw'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
        <GlobalStyle />
        <App/>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()