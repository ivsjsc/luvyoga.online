import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FacebookFeed from '@/components/blogs/facebook-feed';
import BlogPosts from '@/components/blogs/blog-posts';

export default function BlogsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section id="blogs" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Blogs & Tin Tức
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Khám phá những giá trị của Yoga và cập nhật tin tức mới nhất từ Luv Yoga.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Facebook Feed Column */}
              <div className="lg:col-span-5 xl:col-span-4 space-y-6">
                <div className="border-b border-primary/10 pb-4">
                  <h3 className="font-headline text-2xl font-bold tracking-tight text-primary">
                    Cập nhật mới nhất từ Fanpage
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Theo dõi các hoạt động, hình ảnh và bài đăng trực tiếp từ trang Facebook chính thức của Luv Yoga.
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <FacebookFeed />
                </div>
              </div>

              {/* Blog Posts Column */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                <div className="border-b border-primary/10 pb-4">
                  <h3 className="font-headline text-2xl font-bold tracking-tight text-primary">
                    Bài viết nổi bật
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Kiến thức hữu ích về Yoga định tuyến, trị liệu và thực hành mỗi ngày.
                  </p>
                </div>
                <BlogPosts compact={false} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
