import { notFound } from "next/navigation";

import { services } from "@/data/services";

import DetailHero from "@/components/services/Detail/DetailHero";
import PackageInfo from "@/components/services/Detail/PackageInfo";
import PackageGallery from "@/components/services/Detail/PackageGallery";
import PackageCTA from "@/components/services/Detail/PackageCTA";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <DetailHero service={service} />

      <PackageInfo service={service} />

      <PackageGallery service={service} />

      <PackageCTA />
    </>
  );
}