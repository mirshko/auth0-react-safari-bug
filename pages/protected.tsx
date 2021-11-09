import { withAuthenticationRequired } from "@auth0/auth0-react";
import type { NextPage } from "next";

const Protected: NextPage = () => {
  return (
    <div>
      <h1>Protected</h1>
    </div>
  );
};

export default withAuthenticationRequired(Protected, {
  returnTo: "/protected",
});
