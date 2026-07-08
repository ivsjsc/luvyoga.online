import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const posts = [
  {
    title: 'Yoga Định Tuyến: Xây Dựng Nền Móng Vững Chắc',
    description: 'Khám phá cách yoga định tuyến giúp bạn hiểu rõ cơ thể mình, thực hành an toàn và hiệu quả hơn, như cách chúng ta xây từng viên gạch cho một ngôi nhà vững chãi.',
    image: PlaceHolderImages.find((img) => img.id === 'pose-guidance'),
    date: '15 tháng 7, 2024',
    author: 'Luv Yoga',
  },
  {
    title: 'Hơi Thở Trong Yoga: Cầu Nối Giữa Thân và Tâm',
    description: 'Học cách sử dụng hơi thở (pranayama) để làm dịu tâm trí, giải tỏa căng thẳng và tăng cường năng lượng sống. Hơi thở chính là chìa khóa mở ra sự an yên nội tại.',
    image: PlaceHolderImages.find((img) => img.id === 'hero'),
    date: '10 tháng 7, 2024',
    author: 'Luv Yoga',
  },
    {
    title: 'Trị Liệu Phục Hồi: Lắng Nghe và Chữa Lành Cơ Thể',
    description: 'Tìm hiểu về yoga trị liệu, một phương pháp tiếp cận nhẹ nhàng nhưng sâu sắc để phục hồi sau chấn thương, giảm đau mãn tính và cải thiện sức khỏe tổng thể.',
    image: PlaceHolderImages.find((img) => img.id === 'therapy'),
    date: '05 tháng 7, 2024',
    author: 'Luv Yoga',
  },
];

interface BlogPostsProps {
  compact?: boolean;
}

export default function BlogPosts({ compact = false }: BlogPostsProps) {
  if (compact) {
    return (
      <div className="space-y-4">
        {posts.map((post) => (
          <Card 
            key={post.title} 
            className="overflow-hidden border border-primary/5 bg-card hover:bg-primary/5 transition-all duration-300 hover:shadow-md group cursor-pointer"
          >
            <div className="flex p-3 gap-4 items-center">
              {post.image && (
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm border border-primary/10">
                  <Image
                    src={post.image.imageUrl}
                    alt={post.image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={post.image.imageHint}
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold text-primary/75 tracking-wider uppercase">{post.date}</span>
                <h4 className="font-headline text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors mt-0.5">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                  {post.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Card key={post.title} className="overflow-hidden border border-primary/10 shadow-md transition-all duration-300 hover:shadow-lg group">
            <div className="grid md:grid-cols-3">
                <div className="md:col-span-1">
                    {post.image && (
                    <div className="relative h-48 md:h-full w-full overflow-hidden">
                        <Image
                            src={post.image.imageUrl}
                            alt={post.image.description}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-103"
                            data-ai-hint={post.image.imageHint}
                        />
                    </div>
                    )}
                </div>
                <div className="md:col-span-2">
                    <CardHeader className="pb-2">
                        <span className="text-xs font-semibold text-primary tracking-wider uppercase">{post.date}</span>
                        <CardTitle className="font-headline text-xl mt-1 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                        <CardDescription className="text-xs">
                            Đăng bởi {post.author}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
                    </CardContent>
                </div>
            </div>
        </Card>
      ))}
    </div>
  );
}
