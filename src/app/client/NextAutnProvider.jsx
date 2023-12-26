"use client";
import { SessionProvider } from "next-auth/react";

import React from "react";

const NextAutnProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAutnProvider;
