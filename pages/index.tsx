import { useAuth0 } from "@auth0/auth0-react";
import type { NextPage } from "next";
import Dashboard from "../views/dashboard";

const Home: NextPage = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default Home;
