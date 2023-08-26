import Link from "next/link";
import Logo from "@/components/Logo";
import { useTranslations } from "next-intl";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("Common");
  return (
    <div className="max-w-6xl mx-auto p-8 pb-32 flex flex-col space-y-8">
      <header className="flex justify-between py-4">
        <Link href="/">
          <Logo
            className="text-black dark:text-white"
            width="auto"
            height={30}
          />
        </Link>
        <div className="items-center justify-center hidden lg:flex">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between space-x-5 px-4 rounded-md text-white dark:text-black bg-gray-900 dark:bg-gray-200 py-2">
              <a className="menu-hover text-sm font-medium lg:mx-4">
                {t("download")}
              </a>
            </div>
            <div className="pt-2">
              <div className="invisible absolute z-50 flex w-full min-w-[120px] flex-col rounded-md bg-gray-800 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className="my-2 block border-b border-gray-600 py-1 font-semibold text-gray-300 hover:text-white md:mx-2">
                  iOS
                </a>
                <a className="my-2 block border-b border-gray-600 py-1 font-semibold text-gray-300 hover:text-white md:mx-2">
                  Android
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="prose lg:prose-lg dark:prose-invert max-w-none">
        {children}
      </main>
    </div>
  );
}
