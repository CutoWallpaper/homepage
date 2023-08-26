import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const { meta } = await import(`./monetization.${params.locale}.mdx`);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function Faq({ params }: Props) {
  try {
    const { default: Content } = await import(
      `./monetization.${params.locale}.mdx`
    );
    return <Content />;
  } catch (e) {
    const { default: Content } = await import(`./monetization.en.mdx`);
    return <Content />;
  }
}
