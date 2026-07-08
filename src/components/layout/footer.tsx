import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
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
    <footer id="contact" className="bg-primary text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90" prefetch={false}>
              {PlaceHolderImages.find((img) => img.id === 'site-logo') ? (
                <Image
                  src={PlaceHolderImages.find((img) => img.id === 'site-logo')!.imageUrl}
                  alt="Luv Yoga Logo"
                  width={44}
                  height={44}
                  className="rounded-full border border-white/20 bg-white/10 p-0.5"
                />
              ) : (
                <Logo className="h-8 w-auto text-white" />
              )}
              <span className="font-headline text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                Luv Yoga
              </span>
            </Link>
            <div className="space-y-1 text-white/80">
              <p className="text-sm font-medium">Yêu Yoga hơn mỗi ngày.</p>
              <p className="text-xs text-white/60 italic font-light">Love Yoga more everyday.</p>
            </div>
            
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 hover:scale-110 text-white transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-headline text-lg font-bold text-amber-200 tracking-wide uppercase text-xs">Liên Hệ</h3>
            <div className="space-y-4 text-white/85 text-sm">
              <a
                href="https://maps.app.goo.gl/Z7b8kdwoQcx2y4JPA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group transition-colors hover:text-amber-200"
              >
                <MapPin className="h-5 w-5 flex-shrink-0 text-amber-200 group-hover:scale-110 transition-transform duration-300 mt-0.5" />
                <span className="leading-relaxed">Ấp Nhân Hoà, Xã Tây Hoà, Huyện Trảng Bom, Tỉnh Đồng Nai</span>
              </a>
              <a href="tel:0352518855" className="flex items-center gap-3 group transition-colors hover:text-amber-200">
                <Phone className="h-5 w-5 flex-shrink-0 text-amber-200 group-hover:scale-110 transition-transform duration-300" />
                <span>035 251 8855</span>
              </a>
              <a href="mailto:luvyoga.official@gmail.com" className="flex items-center gap-3 group transition-colors hover:text-amber-200">
                <Mail className="h-5 w-5 flex-shrink-0 text-amber-200 group-hover:scale-110 transition-transform duration-300" />
                <span>luvyoga.official@gmail.com</span>
              </a>
              <a href="https://m.me/LuvYoga.Official" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group transition-colors hover:text-amber-200">
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-amber-200 group-hover:scale-110 transition-transform duration-300" />
                <span className="flex items-center gap-1">
                  <span>m.me/LuvYoga.Official</span>
                  <ArrowUpRight className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-6">
            <h3 className="font-headline text-lg font-bold text-amber-200 tracking-wide uppercase text-xs">Vị Trí</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 w-full max-w-sm hover:border-white/20 transition-colors duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.179844196562!2d107.04734257583961!3d10.949783655970549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174e57aefde23d1%3A0xba400c9912517696!2sLuv%20Yoga!5e0!3m2!1sen!2sus!4v1759109316615!5m2!1sen!2sus"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Luv Yoga Location"
                className="brightness-95 contrast-105"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/50 space-y-2">
          <p>&copy; {new Date().getFullYear()} Luv Yoga Sanctuary. Đã đăng ký bản quyền.</p>
          <p>
            Website chất lượng bởi{' '}
            <a
              href="https://ivsacademy.edu.vn/pages/webdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-amber-200 underline underline-offset-2"
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
