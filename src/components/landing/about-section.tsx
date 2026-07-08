'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { SectionBackground } from '@/components/ui/backgrounds';

export default function AboutSection() {
  // Get all gallery/album images (excluding logo)
  const images = PlaceHolderImages.filter(
    (img) => img.imageUrl.startsWith('/images/') && img.id !== 'site-logo'
  );

  // Default to local2 (chieusinh-luvyoga.jpg) or the first image
  const defaultImage =
    images.find((img) => img.id === 'local2') || images[0];

  const [selectedImage, setSelectedImage] = useState(defaultImage);

  return (
    <SectionBackground type="about">
      <section id="about" className="py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-[#4B3427]">
                Hành Trình Sức Khỏe Bền Vững
              </h2>
              <blockquote className="border-l-4 border-[#7A4D35] pl-6 text-xl italic text-foreground/80 hover-lift transition-all duration-300">
                “Yoga không là sự phô trương, mà là hành trình bền vững”
              </blockquote>
              <p className="text-lg text-[#5C4D43]/90">
                ✨🧘🏽‍♀️ Tại Luv Yoga, sức khoẻ của học viên luôn là ưu tiên hàng đầu — chúng tôi dạy bằng cái tâm và sự tận tụy trong từng buổi tập.
              </p>

              <p className="text-[#5C4D43]/90">
                🪷🤸🏽‍♀️ #Luv không dạy thật nhiều tư thế “đỉnh” nếu học viên chưa sẵn sàng. Yoga không phải chinh phục tư thế mà là hành trình lắng nghe, cảm nhận và trân trọng cơ thể.
              </p>

              <p className="text-[#5C4D43]/90">
                🕉️🧡 #Luv tin rằng khi người hướng dẫn đủ tấm lòng — thấu hiểu và lắng nghe — học viên sẽ được tập luyện an toàn, chậm rãi và đúng khả năng. Đề cao định tuyến và sự an toàn là cốt lõi mà #Luv luôn giữ.
              </p>

              <div className="mt-4 space-y-3 text-sm text-[#5C4D43]/95">
                <p className="font-semibold text-[#4B3427]">𝑳𝑼𝑽 𝒀𝑶𝑮𝑨 — more everyday · Yêu Yoga hơn mỗi ngày</p>
                <p>📞 <a href="tel:0352518855" className="text-[#7A4D35] font-semibold hover:underline">035 251 88 55</a></p>
                <p>🏡 Số 113/1 đường Tây Hoà 05, Ấp Nhân Hoà, Xã Hưng Thịnh, Thành phố Đồng Nai</p>
                <p>📍 <a href="https://maps.app.goo.gl/seeaLRWHmMEHxrk19" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-[#7A4D35]">Bản đồ</a></p>
              </div>

              <div className="mt-4 border-t border-[#7A4D35]/10 pt-4 text-sm text-[#5C4D43]/90 space-y-2 bg-white/50 backdrop-blur-xs p-4 rounded-xl">
                <p className="font-semibold text-[#4B3427]">⏰🕉️ Các khung giờ tập cộng đồng</p>
                <ul className="list-disc pl-5">
                  <li>04:45 ➡️ 06:00 (T2 đến T7)</li>
                  <li>06:45 ➡️ 08:00 (T2 đến T7)</li>
                  <li>17:30 ➡️ 18:45 (T2 đến T6)</li>
                  <li>19:10 ➡️ 20:25 (T2 đến T6)</li>
                </ul>

                <p className="font-semibold mt-2 text-[#4B3427]">💆🏻 Hỗ trợ trị liệu (vui lòng đặt lịch trước)</p>
                <p>Khung giờ trị liệu: 13:00 ➡️ 15:00 | 15:00 ➡️ 17:00 — các dịch vụ: Cổ-Vai-Gáy, Đau thắt lưng, Giãn tĩnh mạch, Thần kinh toạ, Giãn cơ thể thao, Cải thiện tư thế, Cải thiện giấc ngủ / tiền đình…</p>

                <p className="font-semibold mt-2 text-[#4B3427]">🕉️ Kèm 1:1 Yoga Trị Liệu</p>
                <p>Theo lịch học viên: 13:00➡️14:30 | 15:00➡️16:30 | 20:45➡️22:00 — Địa điểm: Offline (studio / nhà trong bán kính 10km) hoặc Online (toàn quốc)</p>

                <p className="font-semibold mt-2 text-[#4B3427]">Chứng chỉ</p>
                <ul className="list-disc pl-5">
                  <li>Alliance Yoga (Mỹ): Giáo viên Yoga Quốc tế 200H</li>
                  <li>Alliance Yoga (Mỹ): Giáo viên Yoga phục hồi 100H</li>
                  <li>Chứng nhận Cục Thể Dục Thể Thao (Việt Nam): Người hướng dẫn Yoga</li>
                </ul>
              </div>

              <div className="mt-6 text-sm text-[#5C4D43]/90">
                <p className="font-semibold text-[#4B3427]">Follow & media</p>
                <p>Chúng tôi chia sẻ hành trình tập luyện, trị liệu và lớp học trên kênh Facebook của Luv Yoga.</p>
              </div>
            </div>
            <div className="flex flex-col min-w-0 overflow-hidden animate-slide-up">
              {selectedImage && (
                <Card className="overflow-hidden shadow-xl border-2 border-primary/10">
                  <CardContent className="p-0 relative aspect-[4/3] w-full">
                    <Image
                      src={selectedImage.imageUrl}
                      alt={selectedImage.description}
                      fill
                      className="object-cover transition-all duration-500 hover:scale-105"
                      priority
                    />
                    {selectedImage.description && (
                      <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-xs text-white p-3 text-sm font-medium">
                        {selectedImage.description}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Thumbnail horizontal row */}
              <div className="flex gap-2.5 mt-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                {images.map((img) => (
                  <button
                    key={img.imageUrl}
                    onClick={() => setSelectedImage(img)}
                    className={cn(
                      'relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-hidden',
                      selectedImage.imageUrl === img.imageUrl
                        ? 'border-primary scale-95 shadow-md ring-2 ring-primary/25'
                        : 'border-border opacity-70 hover:opacity-100 hover:border-primary/50'
                    )}
                    title={img.description}
                  >
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
