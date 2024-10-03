import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimationRoutes } from "zmp-ui";
import Account from "@/pages/account/Account";
import Language from "@/pages/account/language/Language";
import ChatBot from "@/pages/homepage/chatbot/ChatBot";
import HomePage from "@/pages/homepage/Homepage";
import Payment from "@/pages/homepage/payment/Payment";
import QrReader from "@/pages/homepage/qr-reader/QRReader";
import NotFound from "@/pages/not-found/NotFound";
import Promotion from "@/pages/promotion/Promotion";
import Wallet from "@/pages/wallet/Wallet";

const AppRoutes = () => {
  return (
    <AnimationRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/account" element={<Account />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="/qrcode" element={<QrReader />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/account/language" element={<Language />} />
      <Route path="*" element={<NotFound />} />
    </AnimationRoutes>
  );
};
export default AppRoutes;
