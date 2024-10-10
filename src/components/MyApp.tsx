import React from "react";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";
import Authorize from "./authorize/Authorize";
import Layout from "./layout/Layout";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@/../i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MyApp = () => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <MantineProvider>
        <App>
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider>
              <Authorize>
                <ZMPRouter>
                  <Layout />
                </ZMPRouter>
              </Authorize>
            </SnackbarProvider>
          </QueryClientProvider>
        </App>
      </MantineProvider>
    </RecoilRoot>
  );
};
export default MyApp;
