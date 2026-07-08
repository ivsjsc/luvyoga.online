import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Logo } from '@/components/icons';


export default function HeroSection() {
  // Use gallery-1.png for mobile, banner-luvyoga.jpg for desktop
  const galleryImage = {
    imageUrl: '/images/gallery-1.png',
    description: 'Yoga studio gallery',
    imageHint: '',
  };
  const bannerDesktop = {
    imageUrl: '/images/banner-luvyoga.jpg',
    description: 'Yoga studio banner',
    imageHint: '',
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[650px] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Banner image with responsive logic and dark overlay */}
      <div className="absolute inset-0 z-0">
        <div className="block md:hidden w-full h-full">
          <Image
            src={galleryImage.imageUrl}
            alt="Yoga studio interior with peaceful atmosphere and natural lighting"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="hidden md:block w-full h-full">
          <Image
            src={bannerDesktop.imageUrl}
            alt="Luv Yoga studio exterior with welcoming entrance and garden setting"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      </div>

      {/* Hero content overlayed on image */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center justify-center px-4 pt-12 text-center animate-fade-in">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute top-8 h-36 w-36 rounded-full bg-[#C9A36A]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-28 h-44 w-[28rem] max-w-[90vw] rounded-full bg-[#A9774E]/20 blur-[90px]" />

        {/* Badge */}
        <div className="relative mb-6 rounded-full border border-white/20 bg-white/10 px-5 py-2 shadow-lg shadow-black/10 backdrop-blur-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFF8F0]/90 md:text-sm">
            Since 2024 • Therapy Yoga
          </span>
        </div>

        <Logo className="relative mb-6 h-16 w-16 text-[#FFF8F0] drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] md:h-20 md:w-20 animate-scale-in" />

        <h1 className="relative mb-4 bg-gradient-to-r from-[#7A4D35] via-[#A9774E] to-[#C9A36A] bg-clip-text font-headline text-5xl font-black leading-none tracking-[-0.04em] text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.16)] md:text-7xl lg:text-8xl">
          LUV YOGA
        </h1>

        <div className="relative my-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#C9A36A] to-transparent" />

        {/* Desktop subtitle */}
        <div className="relative hidden max-w-3xl rounded-3xl border border-white/15 bg-white/10 px-8 py-5 shadow-xl shadow-black/10 backdrop-blur-xl md:block">
          <p className="text-xl font-medium leading-relaxed text-[#FFF8F0] drop-shadow-[0_1px_3px_rgba(0,0,0,0.18)] md:text-2xl">
            Yoga định tuyến và hỗ trợ trị liệu phục hồi, giúp cơ thể khỏe mạnh, vận động an toàn và cân bằng mỗi ngày.
          </p>
        </div>

        {/* Mobile subtitle */}
        <div className="relative max-w-md rounded-3xl border border-white/15 bg-white/10 px-5 py-4 shadow-xl shadow-black/10 backdrop-blur-xl md:hidden">
          <p className="text-lg font-medium leading-relaxed text-[#FFF8F0] drop-shadow-[0_1px_3px_rgba(0,0,0,0.18)]">
            Yoga định tuyến & trị liệu phục hồi — an toàn, chậm rãi và hiệu quả.
          </p>
        </div>

        <div className="relative mt-10 flex w-full flex-col justify-center gap-4 animate-slide-up sm:w-auto sm:flex-row sm:gap-5">
          <Button
            asChild
            size="lg"
            className="min-h-[52px] w-full rounded-2xl bg-[#7A4D35] px-8 py-6 text-lg font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#68412C] hover:shadow-xl hover:shadow-black/25 active:scale-95 sm:w-auto"
            aria-label="View class schedule and book yoga sessions"
          >
            <Link href="#classes">Xem Lịch Tập</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-h-[52px] w-full rounded-2xl border border-[#D7C7B8] bg-white/85 px-8 py-6 text-lg font-semibold text-[#4B3427] shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-white hover:text-[#3C2B22] hover:shadow-xl hover:shadow-black/15 active:scale-95 sm:w-auto"
            aria-label="Contact Luv Yoga studio"
          >
            <Link href="#contact">Liên Hệ</Link>
          </Button>
        </div>

        <p className="relative mt-5 text-sm font-medium text-[#FFF8F0]/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.18)]">
          Học thử miễn phí • Huấn luyện viên chuyên môn • Lớp nhỏ
        </p>

        <div className="relative mt-14 hidden grid-cols-3 gap-8 rounded-3xl border border-white/15 bg-white/10 px-8 py-5 text-[#FFF8F0] shadow-xl shadow-black/10 backdrop-blur-xl md:grid">
          <div>
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="mt-1 text-sm text-[#FFF8F0]/75">Học viên</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">20+</h3>
            <p className="mt-1 text-sm text-[#FFF8F0]/75">Lớp / tuần</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">4.9★</h3>
            <p className="mt-1 text-sm text-[#FFF8F0]/75">Đánh giá</p>
          </div>
        </div>
      </div>
    </section>
  );
}
