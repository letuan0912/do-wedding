import Image from "next/image";
import Link from "next/link";

export default function AlbumPage() {
return ( <main className="bg-[#faf8f5]">

  {/* Hero */}
  <section className="relative h-[60vh]">
    <Image
      src="/images/album/album1.jpg"
      alt="Album Hero"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/40" />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white">
        <p className="uppercase tracking-[8px] text-sm mb-4">
          DO WEDDING
        </p>

        <h1 className="text-6xl md:text-6xl font-light">
          ALBUM CƯỚI
        </h1>

        <p className="mt-6 text-lg">
          Lưu giữ những khoảnh khắc đẹp nhất của tình yêu
        </p>
      </div>
    </div>
  </section>

  {/* Gallery */}
  <section className="max-w-7xl mx-auto py-24 px-8">

    <div className="grid md:grid-cols-2 gap-8">

      <div className="group relative overflow-hidden rounded-2xl">
        <Image
          src="/images/album/album1.jpg"
          alt=""
          width={700}
          height={900}
          className="w-full h-[700px] object-cover group-hover:scale-105 duration-500"
        />

        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">
          <button className="border border-white text-white px-8 py-3">
            XEM ALBUM
          </button>
        </div>
      </div>

      <div className="grid gap-8">

        <div className="group relative overflow-hidden rounded-2xl">
          <Image
            src="/images/album/album2.jpg"
            alt=""
            width={700}
            height={400}
            className="w-full h-[335px] object-cover group-hover:scale-105 duration-500"
          />

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-2xl">
              Romantic Concept
            </h3>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl">
          <Image
            src="/images/album/album3.jpg"
            alt=""
            width={700}
            height={400}
            className="w-full h-[335px] object-cover group-hover:scale-105 duration-500"
          />

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-2xl">
              Luxury Wedding
            </h3>
          </div>
        </div>

      </div>

    </div>

    <div className="columns-1 md:columns-3 gap-8 mt-8 space-y-8">

  <Image
    src="/images/album/album4.jpg"
    alt=""
    width={500}
    height={700}
    className="w-full rounded-2xl mb-8 hover:scale-[1.02] duration-500"
  />

  <Image
    src="/images/album/album5.jpg"
    alt=""
    width={500}
    height={500}
    className="w-full rounded-2xl mb-8 hover:scale-[1.02] duration-500"
  />

  <Image
    src="/images/album/album6.jpg"
    alt=""
    width={500}
    height={800}
    className="w-full rounded-2xl mb-8 hover:scale-[1.02] duration-500"
  />

  <Image
    src="/images/album/album1.jpg"
    alt=""
    width={500}
    height={600}
    className="w-full rounded-2xl mb-8 hover:scale-[1.02] duration-500"
  />

  <Image
    src="/images/album/album2.jpg"
    alt=""
    width={500}
    height={700}
    className="w-full rounded-2xl mb-8 hover:scale-[1.02] duration-500"
  />

  <Image
    src="/images/album/album3.jpg"
    alt=""
    width={500}
    height={500}
    className="w-full rounded-2xl mb-8 hover:scale-[1.02] duration-500"
  />

</div>
    <section className="text-center py-24">

  <h2 className="text-5xl font-light text-[#c8a86b]">
    SẴN SÀNG CHO BỘ ẢNH CƯỚI CỦA BẠN?
  </h2>

  <p className="mt-6 text-gray-500">
    Liên hệ DO WEDDING để được tư vấn concept phù hợp nhất.
  </p>

  <Link
    href="/lien-he"
    className="inline-block mt-10 bg-[#c8a86b] text-white px-10 py-4 rounded-full hover:bg-[#b79452]"
  >
    ĐẶT LỊCH TƯ VẤN
  </Link>

</section>

  </section>
</main>

);
}
