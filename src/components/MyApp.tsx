import React from "react";
import { RecoilRoot } from "recoil";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";
import Authorize from "./authorize/Authorize";
import AppRoutes from "../routes/routes";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <Authorize>
            <ZMPRouter>
              <AppRoutes />
            </ZMPRouter>
          </Authorize>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
