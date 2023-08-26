import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cuto Wallpaper",
  description:
    "Cuto is an iOS/Android app dedicated for bringing great wallpapers. Every wallpaper in Cuto is handpicked by our editors, only to deliver you a more suitable wallpaper.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html
      lang={locale}
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <body className={inter.className}>{children}</body>
      <script
        async
        src="https://insights.userconnect.us/core"
        data-website-id="e23e540a-4d1f-40ab-84a8-50d85c69ec27"
      ></script>
    </html>
  );
}
