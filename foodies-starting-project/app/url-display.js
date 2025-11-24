"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function UrlDisplay() {
  const pathname = usePathname();      
  const searchParams = useSearchParams(); 

  const queryString = searchParams ? `${searchParams.toString()}` : "";
  const fullUrl = `${window.location.origin}${pathname}${queryString}`;

  return (
    <p style={{ color: "white", textAlign: "center", marginTop: "10px" }}>
      Adres strony: {fullUrl}
    </p>
  );
}
