import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const locale = "en";
  const { meta } = await import(`./privacy.${locale}.mdx`);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function Faq({ params }: Props) {
  const { default: Content } = await import(`./privacy.en.mdx`);
  return <Content />;
}
