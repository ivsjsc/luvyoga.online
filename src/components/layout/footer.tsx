import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react';

import { Logo } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Footer() {
  const siteLogo = PlaceHolderImages.find((img) => img.id === 'site-logo');

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/LuvYoga.Official',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/luvyoga.official',
      icon: Instagram,
    },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-[#E6D9CC] bg-[#FBF7F2] text-[#3C2B22]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#D8B778]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#A9774E]/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#7A4D35_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr_1.1fr]">
          {/* Brand */}
          <div className="rounded-[2rem] border border-[#E2D4C8] bg-[#FFFDFB]/80 p-6 shadow-[0_16px_40px_rgba(60,43,34,0.08)] backdrop-blur-xl">
            <Link
              href="/"
              className="group flex items-center gap-3"
              prefetch={false}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E2D4C8] bg-[#FFFDFB] shadow-md shadow-[#3C2B22]/10 transition group-hover:-translate-y-0.5">
                {siteLogo ? (
                  <Image
                    src={siteLogo.imageUrl}
                    alt="Luv Yoga Logo"
                    width={48}
                    height={48}
                    className="rounded-xl object-cover"
                  />
                ) : (
                  <Logo className="h-8 w-8 text-[#8A5635]" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-headline text-2xl font-black tracking-[-0.03em] text-[#3C2B22]">
                    Luv Yoga
                  </span>
                  <Sparkles className="h-4 w-4 text-[#C89A4B]" />
                </div>
                <p className="mt-1 text-sm font-semibold text-[#7A6557]">
                  Yêu Yoga hơn mỗi ngày
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#6B5548]">
              Yoga định tuyến và hỗ trợ trị liệu phục hồi, đề cao sự an toàn,
              chậm rãi và hiệu quả trong từng buổi tập.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E2D4C8] bg-[#FFFDFB] text-[#7A4D35] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8A5635] hover:text-white hover:shadow-lg"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-[2rem] border border-[#E2D4C8] bg-[#FFFDFB]/80 p-6 shadow-[0_16px_40px_rgba(60,43,34,0.08)] backdrop-blur-xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#A9774E]">
              Liên hệ
            </p>

            <div className="space-y-4 text-sm font-semibold text-[#43342C]">
              <a
                href="https://maps.app.goo.gl/Z7b8kdwoQcx2y4JPA"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-[#F6ECE2]"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#8A5635] transition group-hover:scale-110" />
                <span className="leading-7">
                  Ấp Nhân Hoà, Xã Tây Hoà, Huyện Trảng Bom, Tỉnh Đồng Nai
                </span>
              </a>

              <a
                href="tel:0352518855"
                className="group flex items-center gap-3 rounded-2xl p-3 transition hover:bg-[#F6ECE2]"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#8A5635] transition group-hover:scale-110" />
                <span>035 251 8855</span>
              </a>

              <a
                href="mailto:luvyoga.official@gmail.com"
                className="group flex items-center gap-3 rounded-2xl p-3 transition hover:bg-[#F6ECE2]"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#8A5635] transition group-hover:scale-110" />
                <span>luvyoga.official@gmail.com</span>
              </a>

              <a
                href="https://m.me/LuvYoga.Official"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl p-3 transition hover:bg-[#F6ECE2]"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-[#8A5635] transition group-hover:scale-110" />
                <span className="flex items-center gap-1">
                  m.me/LuvYoga.Official
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" />
                </span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-[2rem] border border-[#E2D4C8] bg-[#FFFDFB]/80 p-6 shadow-[0_16px_40px_rgba(60,43,34,0.08)] backdrop-blur-xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#A9774E]">
              Vị trí
            </p>

            <div className="overflow-hidden rounded-[1.5rem] border border-[#E2D4C8] bg-[#F6ECE2] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.179844196562!2d107.04734257583961!3d10.949783655970549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174e57aefde23d1%3A0xba400c9912517696!2sLuv%20Yoga!5e0!3m2!1sen!2sus!4v1759109316615!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Luv Yoga Location"
                className="grayscale-[20%] contrast-105"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/Z7b8kdwoQcx2y4JPA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#8A5635] to-[#70442C] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#70442C]/20 transition hover:-translate-y-0.5 hover:from-[#7A4D35] hover:to-[#633B27]"
            >
              Mở Google Maps
              <ArrowUpRight className="ml-2 h-4 w-4 opacity-80" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E2D4C8] pt-8 text-center text-xs font-medium text-[#7A6557] md:flex-row md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Luv Yoga Sanctuary. Đã đăng ký
            bản quyền.
          </p>

          <p>
            Website chất lượng bởi{' '}
            <a
              href="https://ivsacademy.edu.vn/pages/webdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#8A5635] underline underline-offset-4 transition hover:text-[#70442C]"
            >
              IVS Celestech, IVS JSC
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
