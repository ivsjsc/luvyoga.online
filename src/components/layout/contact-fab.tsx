'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Mail, Phone, Plus, X, ArrowUp, MessageCircle, Music } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@luv.yoga',
    icon: Music,
    bgColor: 'bg-black hover:bg-gray-800',
  },
];