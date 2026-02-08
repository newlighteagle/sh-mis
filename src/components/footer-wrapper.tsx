"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  const isRestricted = pathname?.startsWith("/dashboard-restricted") || pathname?.startsWith("/master-data");

  if (isRestricted) {
    return null;
  }

  return <Footer />;
}
