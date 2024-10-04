import React from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";
import Authorize from "./authorize/Authorize";
import Layout from "./layout/Layout";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@/../i18n";

const MyApp = () => {
  return (
    <RecoilRoot>
      <MantineProvider>
        <App>
          <SnackbarProvider>
            <Authorize>
              <ZMPRouter>
                <Layout />
              </ZMPRouter>
            </Authorize>
          </SnackbarProvider>
        </App>
      </MantineProvider>
    </RecoilRoot>
  );
};
export default MyApp;
