import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { createTranslator, useLocale, useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const messages = (await import(`../../messages/${params.locale}.json`))
    .default;
  const t = createTranslator({
    locale: params.locale,
    messages,
    namespace: "Index",
  });
  const title = t("title");
  const description = t("description");
  return {
    title,
    description,
    openGraph: {
      title,
      images: [
        "https://cuto.app/homepage.webp",
        "https://cuto.app/screenshot.png",
      ],
      description,
      url: "https://cuto.app",
      emails: ["hi@cutowallpaper.com"],
      siteName: title,
    },
    twitter: {
      card: "app",
      title,
      description,
      creator: "@lancewangx",
      images: [
        "https://cuto.app/homepage.webp",
        "https://cuto.app/screenshot.png",
      ],
      app: {
        name: title,
        id: {
          iphone: "1068086465",
          googleplay: "com.sspai.cuto.android",
        },
      },
    },
  };
}

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
