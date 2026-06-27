import { notFound } from "next/navigation";

import { albums } from "@/data/albums";

import AlbumHero from "@/components/album/AlbumHero";
import AlbumGallery from "@/components/album/AlbumGallery";
import RelatedAlbums from "@/components/album/RelatedAlbums";
import CTA from "@/components/home/CTA";
import AlbumInfo from "@/components/album/AlbumInfo";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AlbumDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const album = albums.find(
    (item) => item.slug === slug
  );

  if (!album) {
    notFound();
  }

  return (
    <>
      <AlbumHero album={album} />

      <AlbumGallery album={album} />

      <RelatedAlbums album={album} />

      <AlbumInfo album={album} />

      <CTA />
    </>
  );
}