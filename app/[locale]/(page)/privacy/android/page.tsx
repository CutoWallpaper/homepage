import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = "zh";
  const { meta } = await import(`./privacy.android.${locale}.mdx`);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function Faq({ params }: Props) {
  const { default: Content } = await import(`./privacy.android.zh.mdx`);
  return <Content />;
}
