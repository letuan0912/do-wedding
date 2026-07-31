"use client";

import Card from "@/components/admin/ui/Card";
import Input from "@/components/admin/ui/Input";
import { HomePageData } from "../types";

interface Props {
  data: HomePageData;
  onChange: <K extends keyof HomePageData>(
    key: K,
    value: HomePageData[K]
  ) => void;
}

export default function CounterSection({
  data,
  onChange,
}: Props) {
  return (
    <Card
      title="Counter"
      description="Quản lý các thống kê hiển thị trên trang chủ."
    >
      <div className="space-y-8">
        {/* Counter 1 */}
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="mb-4 text-lg font-semibold">
            Counter 1
          </h3>

          <div className="grid gap-4 md:grid-cols-3">
            <Input
              label="Số"
              type="number"
              value={data.counter1Number}
              onChange={(e) =>
                onChange(
                  "counter1Number",
                  Number(e.target.value)
                )
              }
            />

            <Input
              label="Ký hiệu"
              value={data.counter1Suffix}
              onChange={(e) =>
                onChange(
                  "counter1Suffix",
                  e.target.value
                )
              }
            />

            <Input
              label="Tiêu đề"
              value={data.counter1Label}
              onChange={(e) =>
                onChange(
                  "counter1Label",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        {/* Counter 2 */}
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="mb-4 text-lg font-semibold">
            Counter 2
          </h3>

          <div className="grid gap-4 md:grid-cols-3">
            <Input
              label="Số"
              type="number"
              value={data.counter2Number}
              onChange={(e) =>
                onChange(
                  "counter2Number",
                  Number(e.target.value)
                )
              }
            />

            <Input
              label="Ký hiệu"
              value={data.counter2Suffix}
              onChange={(e) =>
                onChange(
                  "counter2Suffix",
                  e.target.value
                )
              }
            />

            <Input
              label="Tiêu đề"
              value={data.counter2Label}
              onChange={(e) =>
                onChange(
                  "counter2Label",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        {/* Counter 3 */}
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="mb-4 text-lg font-semibold">
            Counter 3
          </h3>

          <div className="grid gap-4 md:grid-cols-3">
            <Input
              label="Số"
              type="number"
              value={data.counter3Number}
              onChange={(e) =>
                onChange(
                  "counter3Number",
                  Number(e.target.value)
                )
              }
            />

            <Input
              label="Ký hiệu"
              value={data.counter3Suffix}
              onChange={(e) =>
                onChange(
                  "counter3Suffix",
                  e.target.value
                )
              }
            />

            <Input
              label="Tiêu đề"
              value={data.counter3Label}
              onChange={(e) =>
                onChange(
                  "counter3Label",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        {/* Counter 4 */}
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="mb-4 text-lg font-semibold">
            Counter 4
          </h3>

          <div className="grid gap-4 md:grid-cols-3">
            <Input
              label="Số"
              type="number"
              value={data.counter4Number}
              onChange={(e) =>
                onChange(
                  "counter4Number",
                  Number(e.target.value)
                )
              }
            />

            <Input
              label="Ký hiệu"
              value={data.counter4Suffix}
              onChange={(e) =>
                onChange(
                  "counter4Suffix",
                  e.target.value
                )
              }
            />

            <Input
              label="Tiêu đề"
              value={data.counter4Label}
              onChange={(e) =>
                onChange(
                  "counter4Label",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>
    </Card>
  );
}