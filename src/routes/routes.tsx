import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "@/pages/account/Account";
import HomePage from "@/pages/homepage/Homepage";
import NotFound from "@/pages/not-found/NotFound";
import Promotion from "@/pages/promotion/Promotion";
import Wallet from "@/pages/wallet/Wallet";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
