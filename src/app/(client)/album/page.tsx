"use client";

import { useState } from "react";

import Hero from "@/components/album/Hero";
import Filter from "@/components/album/Filter";
import FeaturedCollection from "@/components/album/FeaturedCollection";
import AlbumGrid from "@/components/album/AlbumGrid";
import CTA from "@/components/home/CTA";

import useAlbums from "@/hooks/useAlbums";

export default function AlbumPage() {
  const [category, setCategory] =
    useState("all");

  const [page, setPage] =
    useState(1);

  const [search, setSearch] =
    useState("");

  const [sort, setSort] =
    useState("newest");

  const {
    albums,
    categories,
    loading,
    pagination,
  } = useAlbums(
    page,
    category,
    search,
    sort
  );

  return (
    <>
      <Hero />

      <Filter
        value={category}
        onChange={(value) => {
          setCategory(value);
          setPage(1);
        }}
        categories={categories}
      />

      <AlbumGrid
        albums={albums}
        loading={loading}
        pagination={pagination}
        page={page}
        setPage={setPage}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      <FeaturedCollection />

      <CTA />
    </>
  );
}