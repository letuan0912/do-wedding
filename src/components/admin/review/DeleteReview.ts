export async function deleteReview(id: string) {
  const ok = confirm(
    "Bạn có chắc muốn xóa đánh giá này?"
  );

  if (!ok) return false;

  try {
    const res = await fetch(
      `/api/admin/review/${id}`,
      {
        method: "DELETE",
      }
    );

    const json = await res.json();

    return json.success;
  } catch {
    return false;
  }
}