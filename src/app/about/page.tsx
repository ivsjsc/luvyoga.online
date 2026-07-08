import Link from "next/link";
import Image from "next/image";
import { Award, BadgeCheck, Globe2, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const certificates = [
  {
    title: "Yoga Therapy Certificate",
    issuer: "International Training Program",
    year: "2024",
    image: "/images/certificates/certificate-placeholder-1.jpg",
  },
  {
    title: "Anatomy & Safe Practice",
    issuer: "Professional Yoga Education",
    year: "2024",
    image: "/images/certificates/certificate-placeholder-2.jpg",
  },
  {
    title: "Restorative Yoga Training",
    issuer: "Wellness & Recovery Program",
    year: "2025",
    image: "/images/certificates/certificate-placeholder-3.jpg",
  },
];

const commitments = [
  {
    icon: ShieldCheck,
    title: "An toàn trong tập luyện",
    desc: "Ưu tiên kỹ thuật đúng, kiểm soát cường độ và điều chỉnh theo thể trạng từng học viên.",
  },
  {
    icon: HeartPulse,
    title: "Hỗ trợ phục hồi",
    desc: "Tập trung vào sự cân bằng, khả năng vận động, hơi thở và phục hồi tự nhiên của cơ thể.",
  },
  {
    icon: Globe2,
    title: "Định hướng tiêu chuẩn quốc tế",
    desc: "Không ngừng cập nhật kiến thức, chứng chỉ và phương pháp giảng dạy hiện đại.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 min-h-screen bg-[#F7F1EA] text-[#3C2B22]">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A36A33,transparent_45%)]" />
          <div className="relative mx-auto max-w-6xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9C7B8] bg-white/70 px-5 py-2 text-sm font-semibold text-[#7A4D35] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              About LUV YOGA
            </div>

            <h1 className="mx-auto max-w-4xl font-headline text-5xl font-black tracking-[-0.04em] text-[#4B3427] md:text-7xl">
              Giới thiệu về LUV YOGA
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6B5548] md:text-xl">
              LUV YOGA hướng đến phương pháp yoga an toàn, chậm rãi và có định hướng trị liệu phục hồi,
              giúp học viên cải thiện sức khỏe thể chất, tinh thần và khả năng vận động bền vững.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#classes"
                className="rounded-2xl bg-[#7A4D35] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#68412C]"
              >
                Xem Lịch Tập
              </Link>

              <Link
                href="/#contact"
                className="rounded-2xl border border-[#D7C7B8] bg-white/80 px-8 py-4 text-lg font-semibold text-[#4B3427] shadow-sm transition hover:bg-white"
              >
                Liên Hệ
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="px-4 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A9774E]">
                Our Philosophy
              </p>

              <h2 className="text-4xl font-black tracking-[-0.03em] text-[#3C2B22] md:text-5xl">
                Yoga không chỉ là động tác, mà là sự hiểu cơ thể.
              </h2>

              <p className="mt-6 leading-8 text-[#6B5548]">
                Tại LUV YOGA, mỗi buổi tập được thiết kế để phù hợp với khả năng vận động,
                nhịp thở và tình trạng cơ thể của từng học viên. Chúng tôi đề cao sự chính xác,
                an toàn và tính bền vững thay vì ép cơ thể vào những tư thế quá sức.
              </p>

              <p className="mt-4 leading-8 text-[#6B5548]">
                Trang này sẽ được dùng để trình bày chứng nhận, chứng chỉ chuyên môn,
                bằng cấp đào tạo, hình ảnh lớp học, cam kết chất lượng và các tiêu chuẩn
                mà LUV YOGA theo đuổi.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E2D4C8] bg-white/70 p-4 shadow-xl">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#E9D8C7] to-[#F8F1EA]">
                <div className="text-center">
                  <Award className="mx-auto h-16 w-16 text-[#A9774E]" />
                  <p className="mt-4 text-lg font-bold text-[#4B3427]">
                    Placeholder hình ảnh studio / giảng viên
                  </p>
                  <p className="mt-2 text-sm text-[#7A6557]">
                    Có thể thay bằng ảnh thật sau
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A9774E]">
                Commitments
              </p>
              <h2 className="text-4xl font-black tracking-[-0.03em] md:text-5xl">
                Cam kết của LUV YOGA
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {commitments.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-[#E2D4C8] bg-white/75 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A4D35] text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#3C2B22]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#6B5548]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="bg-[#EFE3D8] px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A9774E]">
                  Certificates
                </p>
                <h2 className="text-4xl font-black tracking-[-0.03em] text-[#3C2B22] md:text-5xl">
                  Chứng nhận & chứng chỉ
                </h2>
              </div>

              <p className="max-w-xl leading-7 text-[#6B5548]">
                Khu vực này dùng để trình bày các chứng nhận, bằng cấp, chương trình đào tạo
                và các tài liệu chuyên môn. Hiện tại đang dùng ảnh placeholder.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {certificates.map((cert) => (
                <article
                  key={cert.title}
                  className="overflow-hidden rounded-[2rem] border border-[#D9C7B8] bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] bg-[#F7F1EA]">
                    <div className="absolute inset-4 flex items-center justify-center rounded-2xl border-2 border-dashed border-[#CBB8A8] bg-[#FBF7F2]">
                      <div className="text-center">
                        <BadgeCheck className="mx-auto h-14 w-14 text-[#A9774E]" />
                        <p className="mt-3 text-sm font-semibold text-[#7A6557]">
                          Certificate Placeholder
                        </p>
                      </div>
                    </div>

                    {/* Khi có ảnh thật thì bỏ comment đoạn dưới */}
                    {/* 
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    /> 
                    */}
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-semibold text-[#A9774E]">
                      {cert.year}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#3C2B22]">
                      {cert.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#6B5548]">
                      {cert.issuer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Future Gallery */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E2D4C8] bg-white/75 p-8 shadow-xl md:p-12">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A9774E]">
                  Documentation
                </p>

                <h2 className="text-4xl font-black tracking-[-0.03em] text-[#3C2B22]">
                  Hồ sơ năng lực sẽ được bổ sung
                </h2>

                <p className="mt-5 leading-8 text-[#6B5548]">
                  Khu vực này có thể dùng để cập nhật hình ảnh chứng nhận quốc tế,
                  cam kết đào tạo, chính sách an toàn, hồ sơ giảng viên, đối tác đào tạo
                  hoặc các tài liệu xác thực chuyên môn.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex aspect-square items-center justify-center rounded-3xl border border-dashed border-[#CBB8A8] bg-[#F7F1EA]"
                  >
                    <span className="text-sm font-semibold text-[#9A8170]">
                      Image {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
