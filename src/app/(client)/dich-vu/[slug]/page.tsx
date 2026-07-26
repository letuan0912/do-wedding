import { notFound } from "next/navigation";
import DetailHero from "@/components/services/Detail/DetailHero";
import PackageInfo from "@/components/services/Detail/PackageInfo";
import PackageGallery from "@/components/services/Detail/PackageGallery";
import PackageCTA from "@/components/services/Detail/PackageCTA";

async function getService(slug: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    "http://localhost:3000";

  const res = await fetch(
    `${baseUrl}/api/service/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  const json = await res.json();

  if (!json.success) return null;

return {
  service: json.data.service,
  packages: json.data.packages,
};
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const data = await getService(slug);

  if (!data) {
    notFound();
  }

  const { service, packages } = data;

  return (
    <>
      <DetailHero service={service} />

      <PackageInfo
        service={service}
        packages={packages}
      />

      <PackageGallery service={service} />

      <PackageCTA />
    </>
  );
}