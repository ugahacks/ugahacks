import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { AuthContextProvider, useAuth } from "../context/AuthContext";
import Login from "./login";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AuthContextProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AuthContextProvider>
  );
}

export default MyApp;
