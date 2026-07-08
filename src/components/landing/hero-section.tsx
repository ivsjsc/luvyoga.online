import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Gift, Award, Users } from 'lucide-react';
import { SectionBackground } from '@/components/ui/backgrounds';

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
      <div className="relative w-full h-[75vh] md:h-[75vh] min-h-[450px] md:min-h-[500px] overflow-hidden">
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

      {/* 2. Content Section below the banner wrapped in SectionBackground */}
      <SectionBackground type="hero">
        <div className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.015]">
            <span className="font-headline font-black text-[12vw] tracking-widest text-[#7A4D35] uppercase">
              Luv Yoga
            </span>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A4D35]/10 text-[#7A4D35] text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#7A4D35]" />
              Luv Yoga Studio
            </div>

            {/* Main Headline */}
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-[#4B3427] text-center max-w-3xl leading-tight">
              Tìm Lại Sự Cân Bằng Cho Thân & Tâm
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl font-normal leading-relaxed text-[#5C4D43]/90 text-center max-w-3xl">
              Yoga định tuyến và hỗ trợ trị liệu phục hồi, giúp cơ thể khỏe mạnh, vận động an toàn và cân bằng mỗi ngày.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row sm:gap-5">
              <Button
                asChild
                size="lg"
                className="min-h-[54px] w-full rounded-2xl bg-[#7A4D35] px-8 py-6 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#68412C] hover:shadow-lg active:scale-95 sm:w-auto"
                aria-label="View class schedule and book yoga sessions"
              >
                <Link href="#classes">Xem Lịch Tập</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-[54px] w-full rounded-2xl border border-[#7A4D35]/30 bg-white/80 backdrop-blur-xs px-8 py-6 text-lg font-semibold text-[#4B3427] shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#FAF6F0] hover:text-[#3C2B22] hover:shadow-md active:scale-95 sm:w-auto"
                aria-label="Contact Luv Yoga studio"
              >
                <Link href="#contact">Liên Hệ</Link>
              </Button>
            </div>

            {/* Redesigned Features Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-[#7A4D35]/10 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#7A4D35]/10 text-[#7A4D35] mb-4">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#4B3427] mb-2 text-center">Học Thử Miễn Phí</h3>
                <p className="text-sm text-[#5C4D43]/85 text-center leading-relaxed">
                  Trải nghiệm buổi học đầu tiên hoàn toàn không chi phí để cảm nhận sự phù hợp của không gian và phương pháp.
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-[#7A4D35]/10 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#7A4D35]/10 text-[#7A4D35] mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#4B3427] mb-2 text-center">HLV Chuyên Môn</h3>
                <p className="text-sm text-[#5C4D43]/85 text-center leading-relaxed">
                  Giáo viên sở hữu các chứng chỉ quốc tế Alliance Yoga (Mỹ) & Cục Thể Dục Thể Thao Việt Nam hướng dẫn.
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-[#7A4D35]/10 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#7A4D35]/10 text-[#7A4D35] mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#4B3427] mb-2 text-center">Lớp Học Quy Mô Nhỏ</h3>
                <p className="text-sm text-[#5C4D43]/85 text-center leading-relaxed">
                  Số lượng học viên giới hạn giúp HLV quan sát kỹ, chỉnh sửa định tuyến an toàn cho từng học viên.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>
    </section>
  );
}

