'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Plus, X, ArrowUp, MessageCircle, Mail, Facebook, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: 'Phone',
    href: 'tel:0352518855',
    icon: Phone,
    bgColor: 'bg-green-500 hover:bg-green-600',
  },
  {
    name: 'Email',
    href: 'mailto:luvyoga.official@gmail.com',
    icon: Mail,
    bgColor: 'bg-yellow-500 hover:bg-yellow-600',
  },
  {
    name: 'Messenger',
    href: 'https://m.me/LuvYoga.Official',
    icon: MessageCircle,
    bgColor: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/LuvYoga.Official',
    icon: Facebook,
    bgColor: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/luvyoga.official',
    icon: Instagram,
    bgColor: 'bg-pink-600 hover:bg-pink-700',
  },
];

export default function StickyBookBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    // Mobile-only sticky booking bar — visible on small screens only
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      {/* Floating social links above the plus button */}
      {isOpen && (
        <div className="absolute bottom-20 left-2 flex flex-col gap-3 transition-all duration-300 z-50 bg-white/95 dark:bg-black/95 p-2 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Button
                size="icon"
                className={cn(
                  'rounded-full text-white shadow-lg h-10 w-10',
                  link.bgColor
                )}
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </Button>
            </Link>
          ))}
        </div>
      )}

      <div className="rounded-3xl bg-white/5 p-0 shadow-2xl backdrop-blur-2xl border border-white/20">
        <div className="flex items-center justify-between gap-2 rounded-3xl bg-gradient-to-r from-[#fffaf7]/85 to-[#fff4ea]/75 p-2 pl-2 pr-2">
          
          {/* 1. Contact Expand Plus/X Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="icon"
            className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-rose-600 border-none ring-2 ring-white/20"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
            <span className="sr-only">{isOpen ? 'Đóng menu liên hệ' : 'Mở menu liên hệ'}</span>
          </Button>

          {/* 2. Text Contact Info */}
          <div className="flex flex-col text-xs text-[#3b2a21] min-w-0">
            <span className="font-semibold whitespace-nowrap">Đặt chỗ · Hỗ trợ</span>
            <a href="tel:0352518855" className="text-[11px] text-[#543425] underline font-medium">
              035 251 88 55
            </a>
          </div>

          {/* 3. Book Schedule Button */}
          <Link href="#classes" prefetch={false} className="flex-1 max-w-[130px]">
            <Button className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-[#6b3e2b] text-white px-3 py-2 text-xs font-semibold shadow-md hover:bg-[#5e3a2a]/95 h-10">
              <Clock className="h-3.5 w-3.5" />
              Đặt Lịch
            </Button>
          </Link>

          {/* 4. Scroll To Top Button */}
          <div className="w-10 h-10 shrink-0">
            {isVisible && (
              <Button
                onClick={scrollToTop}
                size="icon"
                className="h-10 w-10 rounded-full bg-[#d6c5b3] text-[#6b3e2b] shadow-md transition-opacity hover:bg-[#cbb9a7]"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
