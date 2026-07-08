'use client';

import { useEffect, useState } from 'react';

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
      <div className="w-full max-w-md border border-border rounded-lg p-6 bg-muted text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Không thể tải Facebook feed. Vui lòng truy cập Fanpage trực tiếp:
        </p>
        <a
          href={facebookPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
        >
          Xem Fanpage Luv Yoga
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
        <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
            width="100%"
            height="600"
            style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            onError={() => setIframeFailed(true)}
        ></iframe>
    </div>
  );
}
