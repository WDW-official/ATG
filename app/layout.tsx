import type { Metadata } from "next";
import { GlobalInvolvementModalHost } from "@/components/InvolvementModals";
import { ATG_LOGO_URL } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Thousand Generation",
  description: "Compassion made practical — across generations.",
  icons: {
    icon: ATG_LOGO_URL,
    shortcut: ATG_LOGO_URL,
    apple: ATG_LOGO_URL,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <GlobalInvolvementModalHost />
      </body>
    </html>
  );
}
