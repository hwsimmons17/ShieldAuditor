import { useState } from "react";

export const useBackend = (): Backend => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  return new Backend(backendUrl || "http://localhost:8080");
};

export class Backend {
  url: URL;

  constructor(url: string) {
    this.url = new URL(url);
  }

  slitherReviewCode = async (contract: File): Promise<string> => {
    console.log("reviewing code");
    var form = new FormData();
    form.append("contract", contract);

    var url = new URL(this.url);
    url.pathname = "/hello";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        ContentType: "multipart/form-data",
      },
      body: form,
    });

    if (!res.ok) {
      throw Error("Error getting Slither review");
    }

    return res.text();
    return "";
  };
}
