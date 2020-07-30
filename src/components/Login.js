import React, { useEffect } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

import config from "../authConfig";

const Login = () => {
  useEffect(() => {
    const oidc = (process.env.NODE_ENV !== 'production')
      ? config.dev.oidc : config.prod.oidc
    const { pkce, issuer, clientId, redirectUri, scopes } = oidc;
    const widget = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an OIDC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: issuer.split('/oauth2')[0],
      clientId,
      redirectUri,
      authParams: {
        pkce,
        issuer,
        display: 'page',
        responseMode: pkce ? 'query' : 'fragment',
        scopes,
      },
    });

    widget.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called beacuse we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      },
    );
  }, []);

  return (
    <div>
      <div id="sign-in-widget" />
    </div>
  );
};

export default Login;
