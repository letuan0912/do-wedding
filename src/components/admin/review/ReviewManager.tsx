"use client";

import { useEffect, useMemo, useState } from "react";

import ReviewForm from "./ReviewForm";
import ReviewTable from "./ReviewTable";
import ReviewToolbar from "./ReviewToolbar";
import { deleteReview } from "./DeleteReview";

import Card from "@/components/admin/ui/Card";
import Loading from "@/components/admin/ui/Loading";
import PageHeader from "@/components/admin/ui/PageHeader";

import type { Review } from "./types";

export default function ReviewManager() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [editing, setEditing] =
    useState<Review | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("all");

  const loadReviews = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/admin/review"
      );

      const json = await res.json();

      if (!json.success) {
        throw new Error(json.message);
      }

      setReviews(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const filteredReviews =
    useMemo(() => {
      return reviews.filter(
        (review) => {
          const matchSearch =
            review.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchStatus =
            status === "all" ||
            String(review.published) ===
              status;

          return (
            matchSearch &&
            matchStatus
          );
        }
      );
    }, [
      reviews,
      search,
      status,
    ]);

  const handleEdit = (
    review: Review
  ) => {
    setEditing(review);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete =
    async (id: string) => {
      const ok =
        await deleteReview(id);

      if (!ok) return;

      setReviews((prev) =>
        prev.filter(
          (item) =>
            item._id !== id
        )
      );

      if (
        editing?._id === id
      ) {
        setEditing(null);
      }
    };

  return (
    <div className="space-y-8">

      <PageHeader
        title="Quản lý Đánh giá"
        description="Quản lý Review của khách hàng."
      />

      <Card padding="lg">

        <ReviewForm
          review={editing}
          onSuccess={() => {
            setEditing(null);

            loadReviews();
          }}
          onCancel={() =>
            setEditing(null)
          }
        />

      </Card>

      <ReviewToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      {loading ? (
        <Loading text="Đang tải đánh giá..." />
      ) : (
        <ReviewTable
          reviews={filteredReviews}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onRefresh={loadReviews}
        />
      )}

    </div>
  );
}