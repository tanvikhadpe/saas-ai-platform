"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d9f3cbd8-420a-472d-b1c3-1869f833cb7f");
  }, []);

  return null;
};
