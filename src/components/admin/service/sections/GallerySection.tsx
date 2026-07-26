"use client";

import FormCard from "@/components/admin/ui/FormCard";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import Button from "@/components/admin/ui/Button";

type Props = {
  gallery: string[];
  setGallery: (value: string[]) => void;
};

export default function GallerySection({
  gallery,
  setGallery,
}: Props) {
  const updateImage = (
    index: number,
    value: string
  ) => {
    const next = [...gallery];
    next[index] = value;
    setGallery(next);
  };

  const addImage = () => {
    setGallery([...gallery, ""]);
  };

  const removeImage = (index: number) => {
    setGallery(
      gallery.filter((_, i) => i !== index)
    );
  };

  return (
    <FormCard title="Thư viện ảnh">
      <div className="space-y-4">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="space-y-2 border rounded-lg p-3"
          >
            <ImageUpload
              value={image}
              onChange={(url) =>
                updateImage(index, url)
              }
            />

            <Button
              type="button"
              variant="danger"
              onClick={() =>
                removeImage(index)
              }
            >
              Xóa ảnh
            </Button>
          </div>
        ))}

        <Button
          type="button"
          onClick={addImage}
        >
          + Thêm ảnh
        </Button>
      </div>
    </FormCard>
  );
}