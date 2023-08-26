import Image from "next/image";
import { useTranslations } from "next-intl";
import AppleDownloadImage from "@/assets/apple-download.svg";
import GoogleDownloadImage from "@/assets/google-play-badge.svg";
import ScreenshotImage from "@/assets/screenshot.webp";
import ApkImage from "@/assets/apk.webp";
import Logo from "../../components/Logo";

const downloadConfig = {
  appleDownloadUrl: "https://ios.cuto.app",
  androidGoogleUrl: "https://android.cuto.app",
  androidAPKDownloadUrl: "https://www.cuto.app/apk/download/",
};

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className="md:max-w-7xl mx-auto p-6 md:p-24">
      <main className="flex flex-col md:flex-row min-h-screen gap-14 md:gap-14 lg:gap-32">
        <Left />
        <Right />
      </main>
      <footer>
        <ul className="flex flex-wrap justify-center md:justify-start md:flex gap-5 pt-16 text-sm md:text-base text-gray-500 ">
          <li>
            <a className="hover:text-black" href="/faq/">
              {t("footerFAQTitle")}
            </a>
          </li>
          <span>/</span>
          <li>
            <a className="hover:text-black" href="/monetization">
              {t("footerStoryTitle")}
            </a>
          </li>
          <span>/</span>
          <li>
            <a className="hover:text-black" href="/privacy/">
              {t("footerPrivacyTitle")}
            </a>
          </li>
          <span>/</span>
          <li>
            <a className="hover:text-black" href="mailto:hi@cutowallpaper.com">
              {t("footerContactTitle")}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

function Left() {
  const t = useTranslations("Index");
  return (
    <div className="flex flex-col pt-8 justify-center md:justify-start md:pt-12 lg:pt-36">
      <div className="flex flex-col gap-10 justify-center md:justify-start">
        <h1>
          <picture className="flex justify-center md:justify-start">
            <Logo
              className="text-black dark:text-white"
              width={180}
              height={60}
            />
          </picture>
        </h1>
        <h2 className="text-md md:text-xl lg:text-2xl font-normal text-center md:text-start">
          {t("slogan")}
        </h2>
      </div>
      <div className="flex mt-8 lg:mt-16 gap-4 justify-center md:justify-start">
        <div className="flex-shrink">
          <a href={downloadConfig.appleDownloadUrl}>
            <Image
              className="h-14 object-contain min-h-[60px] w-auto"
              src={AppleDownloadImage.src}
              alt="Download Cuto from App Store"
              width={180}
              height={80}
              unoptimized
            />
          </a>
        </div>
        <div className="flex flex-col flex-shrink">
          <div>
            <a href={downloadConfig.androidGoogleUrl}>
              <Image
                className="h-14 object-fill min-h-[60px] w-auto"
                src={GoogleDownloadImage.src}
                alt="Download Cuto from Google Play"
                width={180}
                height={80}
                unoptimized
              />
            </a>
          </div>
          <div className="flex flex-col mt-4 md:mt-7 gap-4 items-start">
            <p className="flex-shrink text-gray-600 text-xs lg:text-base hidden md:block">
              {t("androidMoreOptions")}
            </p>
            <div className="items-start">
              <a
                href={downloadConfig.androidAPKDownloadUrl}
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 border border-gray-200 dark:border-gray-800 rounded-lg flex-shrink hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <Image
                  src={ApkImage.src}
                  alt="Apk Image"
                  width={24}
                  height={24}
                  unoptimized
                />
                <span className="text-xs lg:text-sm text-gray-700 dark:text-gray-400">
                  {t("downloadAndroidAPK")}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="w-full md:w-[40%] max-w-[500px] mx-auto">
      <Image
        className="object-contain"
        src={ScreenshotImage.src}
        alt="Cuto App Screenshot"
        width={626}
        height={1267}
        unoptimized
      />
    </div>
  );
}
