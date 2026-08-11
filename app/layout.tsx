import type { Metadata } from "next";
import { GlobalInvolvementModalHost } from "@/components/InvolvementModals";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Thousand Generation",
  description: "Compassion made practical — across generations."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <GlobalInvolvementModalHost />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
