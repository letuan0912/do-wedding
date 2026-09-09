"use client";

import { useEffect, useState } from "react";

export type Settings = {
  websiteName: string;
  logo: string;
  favicon: string;

  hotline: string;
  email: string;
  address: string;

  facebook: string;
  instagram: string;
  tiktok: string;
  youtube: string;

  seoTitle: string;
  seoDescription: string;

  footer: string;
  copyright: string;

  googleMap: string;
};

const initial: Settings = {
  websiteName: "",
  logo: "",
  favicon: "",

  hotline: "",
  email: "",
  address: "",

  facebook: "",
  instagram: "",
  tiktok: "",
  youtube: "",

  seoTitle: "",
  seoDescription: "",

  footer: "",
  copyright: "",

  googleMap: "",
};

export default function useSettings() {
  const [settings, setSettings] =
    useState<Settings>(initial);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/settings", {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setSettings(data.data);
      }
    }

    load();
  }, []);

  return settings;
}