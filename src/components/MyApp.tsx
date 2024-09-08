import React from "react";
import { RecoilRoot } from "recoil";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";
import Authorize from "./authorize/Authorize";
import Layout from "./layout/Layout";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <Authorize>
            <ZMPRouter>
              <Layout />
            </ZMPRouter>
          </Authorize>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
