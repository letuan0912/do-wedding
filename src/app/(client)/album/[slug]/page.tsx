import { notFound } from "next/navigation";

import { connectDB } from "@/lib/mongodb";
import Album from "@/models/Album";

import AlbumHero from "@/components/album/AlbumHero";
import AlbumInfo from "@/components/album/AlbumInfo";
import AlbumGallery from "@/components/album/AlbumGallery";
import RelatedAlbums from "@/components/album/RelatedAlbums";
import CTA from "@/components/home/CTA";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AlbumDetailPage({
  params,
}: Props) {
  const { slug } = await params;

await connectDB();

const album = await Album.findOne({
  slug,
  isPublished: true,
})
  .lean()
  .exec();

  if (!album) {
    notFound();
  }

  return (
    <>
      <AlbumHero album={album} />

      <AlbumInfo album={album} />

      <AlbumGallery album={album} />

      <RelatedAlbums album={album} />

      <CTA />
    </>
  );
}