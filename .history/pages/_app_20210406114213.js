import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";

import Login from "./login";
import { auth, db } from "../firebase";
import Loading from "../components/Sidebar/Loading/Loading";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  if (loadin) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
