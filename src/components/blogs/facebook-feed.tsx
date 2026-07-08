'use client';

import { useEffect, useState } from 'react';
import { Facebook, ExternalLink } from 'lucide-react';

export default function FacebookFeed() {
  const facebookPageUrl = "https://www.facebook.com/LuvYoga.Official";
  const encodedUrl = encodeURIComponent(facebookPageUrl);
  const [iframeFailed, setIframeFailed] = useState(false);

  useEffect(() => {
    // Timeout fallback nếu Facebook không tải
    const timeout = setTimeout(() => {
      setIframeFailed(true);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  if (iframeFailed) {
    return (
      <div className="w-full max-w-[550px] mx-auto border border-red-100 rounded-2xl p-8 bg-red-50/50 text-center shadow-sm backdrop-blur-sm">
        <div className="inline-flex p-3 bg-red-100 text-red-600 rounded-full mb-4">
          <Facebook className="h-6 w-6" />
        </div>
        <h4 className="font-headline text-lg font-semibold text-foreground mb-2">Không thể tải Facebook Feed</h4>
        <p className="text-sm text-muted-foreground mb-6">
          Do chính sách bảo mật hoặc trình chặn quảng cáo, bảng tin Facebook không thể hiển thị trực tiếp. Vui lòng truy cập Fanpage của chúng tôi để cập nhật tin tức mới nhất.
        </p>
        <a
          href={facebookPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/95 text-white rounded-xl font-medium transition-all shadow-sm hover:shadow-md"
        >
          <span>Xem Fanpage Luv Yoga</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[620px] mx-auto bg-white rounded-2xl border border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="bg-primary/5 px-4 py-3 flex items-center justify-between border-b border-primary/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-600 text-white rounded-lg">
            <Facebook className="h-4 w-4 fill-current" />
          </div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Fanpage Chính Thức</span>
        </div>
        <a 
          href={facebookPageUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          <span>Mở ứng dụng</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
      <div className="relative w-full aspect-[5/6] sm:h-[620px] flex items-center justify-center bg-muted/20 overflow-hidden">
        <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
            width="500"
            height="600"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="rounded-b-2xl max-w-full sm:scale-115 md:scale-120 origin-center transition-all duration-300"
            onError={() => setIframeFailed(true)}
        ></iframe>
      </div>
    </div>
  );
}
