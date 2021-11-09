import { GetTokenSilentlyOptions, useAuth0 } from "@auth0/auth0-react";
import useSWR from "swr";
import { AUTH0_AUDIENCE } from "../auth0";

type GetAccessTokenSilently = (
  options?: GetTokenSilentlyOptions | undefined
) => Promise<string>;

function fetcher(getAccessTokenSilently: GetAccessTokenSilently) {
  return async (url: string) => {
    const accessToken = await getAccessTokenSilently({
      audience: AUTH0_AUDIENCE,
      scope: "openid profile email",
    });

    const r = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return r.json();
  };
}

export default function useAPI<T>(url: string) {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  const shouldFetch = !isLoading && isAuthenticated && typeof url === "string";

  return useSWR<T>(
    shouldFetch ? [url] : null,
    fetcher(getAccessTokenSilently),
    {
      shouldRetryOnError: false,
    }
  );
}
