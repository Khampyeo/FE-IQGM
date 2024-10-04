import React from "react";
import appleImage from "@/static/images/applepay.png";
import googleImage from "@/static/images/google.png";
import paypalImage from "@/static/images/paypal.png";
import visaImage from "@/static/images/visa.png";

export const payMethods = [
  {
    id: 1,
    name: "Paypal",
    icon: <img src={paypalImage} alt="" className="object-cover w-12 h-12" />,
  },
  {
    id: 1,
    name: "Google Pay",
    icon: <img src={googleImage} alt="" className="object-cover w-12 h-12" />,
  },
  {
    id: 1,
    name: "Apple Pay",
    icon: <img src={appleImage} alt="" className="object-cover w-12 h-12" />,
  },
  {
    id: 1,
    name: "**** **** **** **** 5678",
    icon: <img src={visaImage} alt="" className="object-cover w-12 h-12" />,
  },
];
