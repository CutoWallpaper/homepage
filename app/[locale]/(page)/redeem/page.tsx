import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = "zh";
  const { meta } = await import(`./redeem.${locale}.mdx`);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function Redeem({ params }: Props) {
  const { default: Content } = await import(`./redeem.zh.mdx`);
  return <Content />;
}
