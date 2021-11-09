import { AppState, Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import Router from "next/router";
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_REDIRECT_URI } from "../auth0";
import "../styles/globals.css";

const onRedirectCallback = (appState: AppState) => {
  Router.replace(appState?.returnTo || "/");
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={AUTH0_REDIRECT_URI}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      onRedirectCallback={onRedirectCallback}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
