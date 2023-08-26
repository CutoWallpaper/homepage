import Logo from "@/components/Logo";
import Link from "next/link";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto p-8 pb-32 flex flex-col justify-center space-y-8">
      <header className="flex justify-center py-4">
        <Link href="/">
          <Logo
            className="text-black dark:text-white"
            width="auto"
            height={30}
          />
        </Link>
      </header>
      <main className="prose lg:prose-lg dark:prose-invert max-w-none">
        {children}
      </main>
    </div>
  );
}
