import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';

export default function HeroSection() {
  // Use gallery-1.png for mobile, banner-luvyoga.jpg for desktop
  const galleryImage = {
    imageUrl: '/images/gallery-1.png',
    description: 'Yoga studio gallery',
  };
  const bannerDesktop = {
    imageUrl: '/images/banner-luvyoga.jpg',
    description: 'Yoga studio banner',
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF6F0]">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center px-4 py-12 sm:px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="relative mb-6 inline-flex rounded-full border border-[#7A4D35]/20 bg-[#7A4D35]/5 px-5 py-2 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7A4D35] md:text-sm">
                Since 2024 • Therapy Yoga
              </span>
            </div>

            <Logo className="relative mb-6 h-16 w-16 text-[#7A4D35] drop-shadow-[0_2px_4px_rgba(122,77,53,0.15)] md:h-20 md:w-20 animate-scale-in" />

            <h1 className="relative mb-4 bg-gradient-to-r from-[#7A4D35] via-[#A9774E] to-[#C9A36A] bg-clip-text font-headline text-5xl font-black leading-none tracking-[-0.04em] text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)] md:text-6xl lg:text-7xl">
              LUV YOGA
            </h1>

            <div className="relative my-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#C9A36A] to-transparent lg:from-left" />

            {/* Desktop subtitle */}
            <div className="relative hidden max-w-3xl rounded-3xl border border-[#7A4D35]/10 bg-white/60 px-8 py-5 shadow-xs md:block">
              <p className="text-xl font-medium leading-relaxed text-[#4B3427] md:text-2xl">
                Yoga định tuyến và hỗ trợ trị liệu phục hồi, giúp cơ thể khỏe mạnh, vận động an toàn và cân bằng mỗi ngày.
              </p>
            </div>

            {/* Mobile subtitle */}
            <div className="relative max-w-md rounded-3xl border border-[#7A4D35]/10 bg-white/60 px-5 py-4 shadow-xs md:hidden">
              <p className="text-lg font-medium leading-relaxed text-[#4B3427]">
                Yoga định tuyến & trị liệu phục hồi — an toàn, chậm rãi và hiệu quả.
              </p>
            </div>

            {/* Buttons */}
            <div className="relative mt-8 flex w-full flex-col justify-center lg:justify-start gap-4 animate-slide-up sm:w-auto sm:flex-row sm:gap-5">
              <Button
                asChild
                size="lg"
                className="min-h-[52px] w-full rounded-2xl bg-[#7A4D35] px-8 py-6 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#68412C] hover:shadow-lg active:scale-95 sm:w-auto"
                aria-label="View class schedule and book yoga sessions"
              >
                <Link href="#classes">Xem Lịch Tập</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-[52px] w-full rounded-2xl border border-[#7A4D35]/30 bg-white/80 px-8 py-6 text-lg font-semibold text-[#4B3427] shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-white hover:text-[#3C2B22] hover:shadow-md active:scale-95 sm:w-auto"
                aria-label="Contact Luv Yoga studio"
              >
                <Link href="#contact">Liên Hệ</Link>
              </Button>
            </div>

            <p className="relative mt-5 text-sm font-semibold text-[#5C4D43]/90">
              Học thử miễn phí • Huấn luyện viên chuyên môn • Lớp nhỏ
            </p>

            {/* Stats */}
            <div className="relative mt-10 grid grid-cols-3 gap-6 rounded-3xl border border-[#7A4D35]/10 bg-white/50 px-8 py-4 text-[#4B3427] shadow-xs w-full max-w-md">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#7A4D35]">500+</h3>
                <p className="mt-1 text-xs font-medium text-[#5C4D43]">Học viên</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#7A4D35]">20+</h3>
                <p className="mt-1 text-xs font-medium text-[#5C4D43]">Lớp / tuần</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#7A4D35]">4.9★</h3>
                <p className="mt-1 text-xs font-medium text-[#5C4D43]">Đánh giá</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image Banner (No overlay text on top) */}
        <div className="lg:col-span-5 relative w-full h-[45vh] lg:h-auto min-h-[350px]">
          <div className="absolute inset-0 block md:hidden">
            <Image
              src={galleryImage.imageUrl}
              alt="Yoga studio interior"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 hidden md:block">
            <Image
              src={bannerDesktop.imageUrl}
              alt="Luv Yoga studio"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
