type Props = {
  status: string;
};

export default function ContactStatus({
  status,
}: Props) {
  if (status === "done") {
    return (
      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
        Đã xử lý
      </span>
    );
  }

  return (
    <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
      Chưa xử lý
    </span>
  );
}