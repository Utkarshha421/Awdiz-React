import { useContext } from "react";
import { AuthContext } from "./context/auth.context";
import { themeContext } from "./context/theme.context";

function Home() {
  const { state } = useContext(AuthContext);
  const { themeState, dispatch } = useContext(themeContext);
  console.log(themeState, "themeState");
  return (
    <div
      style={{
        backgroundColor: themeState.theme === "light" ? "pink" : "Green",
      }}
    >
      <h1>Home page -{state?.user?.name}</h1>
      <button
        onClick={() =>
          dispatch({ type: themeState?.theme === "light" ? "DARK" : "LIGHT" })
        }
      >
        Change {themeState?.theme === "light" ? "light" : "dark"} theme
      </button>
    </div>
  );
}

export default Home;
