import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
    <section className="w-full">
      {/* 1. Banner Image Section (No text or dark overlay) */}
      <div className="relative w-full h-[50vh] md:h-[75vh] min-h-[300px] overflow-hidden">
        {/* Mobile Banner */}
        <div className="absolute inset-0 block md:hidden">
          <Image
            src={galleryImage.imageUrl}
            alt="Luv Yoga studio gallery interior"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Desktop Banner */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src={bannerDesktop.imageUrl}
            alt="Luv Yoga studio outdoor entrance"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* 2. Content Section below the banner */}
      <div className="bg-[#FAF6F0] py-12 md:py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Subtitle / Core Message */}
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#4B3427] max-w-3xl">
            Yoga định tuyến và hỗ trợ trị liệu phục hồi, giúp cơ thể khỏe mạnh, vận động an toàn và cân bằng mỗi ngày.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row sm:gap-5">
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
              className="min-h-[52px] w-full rounded-2xl border border-[#7A4D35]/30 bg-white px-8 py-6 text-lg font-semibold text-[#4B3427] shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#FAF6F0] hover:text-[#3C2B22] hover:shadow-md active:scale-95 sm:w-auto"
              aria-label="Contact Luv Yoga studio"
            >
              <Link href="#contact">Liên Hệ</Link>
            </Button>
          </div>

          {/* Secondary Info Text */}
          <p className="mt-6 text-sm md:text-base font-semibold text-[#5C4D43]/90">
            Học thử miễn phí • Huấn luyện viên chuyên môn • Lớp nhỏ
          </p>
        </div>
      </div>
    </section>
  );
}
