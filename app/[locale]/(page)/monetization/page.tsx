import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { meta } = await import(`./monetization.${params.locale}.mdx`);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function Faq({ params }: Props) {
  try {
    const mdx = `./monetization.${params.locale}.mdx`;
    const Content = dynamic(() => import("" + mdx));
    return <Content />;
  } catch (e) {
    const { default: Content } = await import(`./monetization.en.mdx`);
    return <Content />;
  }
}
