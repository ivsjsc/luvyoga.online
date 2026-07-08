'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, Sparkles } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Logo } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Giới Thiệu', href: '/about' },
  { name: 'Lịch Tập', href: '/#classes' },
  { name: 'Trị Liệu', href: '/#therapy' },
  { name: 'Liên Hệ', href: '/#contact' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Quản Trị', href: '/admin', adminOnly: true },
];

export default function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const siteLogo = PlaceHolderImages.find((img) => img.id === 'site-logo');

  React.useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = navLinks.filter((link) => {
    if (link.adminOnly && !isAdmin) return false;
    return true;
  });

  const isActive = (href: string) => {
    if (href === '/about') return pathname === '/about';
    if (href === '/blogs') return pathname?.startsWith('/blogs');
    if (href === '/admin') return pathname?.startsWith('/admin');
    return false;
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        isScrolled
          ? 'border-[#E6D9CC] bg-[#FBF7F2]/96 shadow-lg shadow-[#3C2B22]/10 backdrop-blur-xl'
          : 'border-[#EADFD4] bg-[#FBF7F2]/92 shadow-sm shadow-[#3C2B22]/5 backdrop-blur-xl'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          prefetch={false}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E7D9CB] bg-[#FFFDFB] shadow-md shadow-[#3C2B22]/10 transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg md:h-12 md:w-12">
            {siteLogo ? (
              <Image
                src={siteLogo.imageUrl}
                alt="Luv Yoga"
                width={42}
                height={42}
                className="rounded-xl object-cover"
                priority
              />
            ) : (
              <Logo className="h-7 w-7 text-[#8A5635]" />
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="truncate font-headline text-lg font-black tracking-[-0.03em] text-[#3C2B22] md:text-2xl">
                Luv Yoga
              </span>
              <Sparkles className="hidden h-4 w-4 text-[#C89A4B] md:block" />
            </div>

            <p className="hidden text-xs font-semibold tracking-[0.01em] text-[#7A6557] md:block">
              Yêu Yoga hơn mỗi ngày
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-[#E2D4C8] bg-[#FFFDFB]/80 px-2 py-2 shadow-[0_10px_30px_rgba(60,43,34,0.08)] backdrop-blur-xl md:flex">
          {navItems.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group relative rounded-full px-5 py-2.5 text-sm font-bold tracking-[0.01em] transition-all duration-300 hover:-translate-y-[1px]',
                  active
                    ? 'bg-[#8A5635] text-white shadow-md shadow-[#8A5635]/25'
                    : 'text-[#43342C] hover:bg-[#F6ECE2] hover:text-[#7A4D35]'
                )}
                prefetch={false}
              >
                {link.name}

                <span
                  className={cn(
                    'absolute bottom-1 h-[2px] rounded-full bg-[#D8B778] transition-all duration-300',
                    active
                      ? 'left-4 right-4 w-auto'
                      : 'left-1/2 w-0 group-hover:left-4 group-hover:right-4 group-hover:w-auto'
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <Button
            asChild
            size="lg"
            className="rounded-2xl bg-gradient-to-b from-[#8A5635] to-[#70442C] px-5 py-5 font-bold text-white shadow-lg shadow-[#70442C]/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#7A4D35] hover:to-[#633B27] hover:text-white hover:shadow-xl"
          >
            <a
              href="https://app.luvyoga.online/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LuvYOGA App
              <ArrowUpRight className="ml-2 h-4 w-4 opacity-80" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="min-h-[46px] min-w-[46px] rounded-2xl border border-[#E2D4C8] bg-[#FFFDFB] text-[#4B3427] shadow-md shadow-[#3C2B22]/10 hover:bg-[#F6ECE2] hover:text-[#7A4D35]"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] border-l border-[#E2D4C8] bg-[#FBF7F2] p-0 text-[#3C2B22] sm:w-[340px]"
            >
              <div className="relative flex h-full flex-col overflow-hidden">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#D8B778]/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#A9774E]/15 blur-3xl" />

                {/* Mobile Brand */}
                <div className="relative border-b border-[#E2D4C8] px-6 py-6">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    prefetch={false}
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E2D4C8] bg-[#FFFDFB] shadow-md shadow-[#3C2B22]/10">
                      {siteLogo ? (
                        <Image
                          src={siteLogo.imageUrl}
                          alt="Luv Yoga"
                          width={42}
                          height={42}
                          className="rounded-xl object-cover"
                          priority
                        />
                      ) : (
                        <Logo className="h-7 w-7 text-[#8A5635]" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-headline text-xl font-black tracking-[-0.03em] text-[#3C2B22]">
                          Luv Yoga
                        </p>
                        <Sparkles className="h-4 w-4 text-[#C89A4B]" />
                      </div>
                      <p className="text-sm font-semibold text-[#7A6557]">
                        Yêu Yoga hơn mỗi ngày
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Mobile Nav */}
                <nav className="relative flex flex-1 flex-col gap-2 px-4 py-6">
                  {navItems.map((link) => {
                    const active = isActive(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'flex min-h-[50px] items-center rounded-2xl px-4 text-base font-bold tracking-[0.01em] transition-all duration-300',
                          active
                            ? 'bg-[#8A5635] text-white shadow-md shadow-[#8A5635]/20'
                            : 'text-[#43342C] hover:bg-[#F6ECE2] hover:text-[#7A4D35]'
                        )}
                        prefetch={false}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <div className="relative border-t border-[#E2D4C8] p-4">
                  <Button
                    asChild
                    size="lg"
                    className="min-h-[52px] w-full rounded-2xl bg-gradient-to-b from-[#8A5635] to-[#70442C] font-bold text-white shadow-lg shadow-[#70442C]/25 hover:from-[#7A4D35] hover:to-[#633B27] hover:text-white"
                  >
                    <a
                      href="https://app.luvyoga.online/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mở LuvYOGA App
                      <ArrowUpRight className="ml-2 h-4 w-4 opacity-80" />
                    </a>
                  </Button>

                  <p className="mt-4 text-center text-xs font-medium text-[#8A7566]">
                    Yoga định tuyến & trị liệu phục hồi
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
