"use client";

import Input from "@/components/admin/ui/Input";
import FormCard from "@/components/admin/ui/FormCard";

type Props = {
  price: string;
  setPrice: (v: string) => void;

  salePrice: string;
  setSalePrice: (v: string) => void;

  deposit: string;
  setDeposit: (v: string) => void;

  duration: string;
  setDuration: (v: string) => void;

  deliveryTime: string;
  setDeliveryTime: (v: string) => void;
};

export default function PricingSection({
  price,
  setPrice,

  salePrice,
  setSalePrice,

  deposit,
  setDeposit,

  duration,
  setDuration,

  deliveryTime,
  setDeliveryTime,
}: Props) {
  return (
    <FormCard title="Thông tin giá">
      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-4">
          <Input
            label="Giá"
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

          <Input
            label="Giá khuyến mãi"
            type="number"
            value={salePrice}
            onChange={(e) =>
              setSalePrice(e.target.value)
            }
          />

          <Input
            label="Đặt cọc"
            type="number"
            value={deposit}
            onChange={(e) =>
              setDeposit(e.target.value)
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Thời gian chụp"
            placeholder="Ví dụ: 1 ngày"
            value={duration}
            onChange={(e) =>
              setDuration(e.target.value)
            }
          />

          <Input
            label="Thời gian trả ảnh"
            placeholder="Ví dụ: 20 ngày"
            value={deliveryTime}
            onChange={(e) =>
              setDeliveryTime(e.target.value)
            }
          />
        </div>
      </div>
    </FormCard>
  );
}