import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, User, MapPin, Globe, Phone } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SectionBackground } from '@/components/ui/backgrounds';

const therapyServices = [
  'Cổ-Vai-Gáy',
  'Đau thắt lưng',
  'Giãn tĩnh mạch',
  'Thần kinh toạ',
  'Giãn cơ thể thao',
  'Cải thiện tư thế',
  'Cải thiện giấc ngủ / tiền đình',
];

const privateClassTimes = [
  '13:00 ➡️ 14:30',
  '15:00 ➡️ 16:30',
  '20:30 ➡️ 22:00',
];

const BookingDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="w-full border-[#7A4D35]/30 text-[#4B3427] hover:bg-[#F3ECE3]">Đặt Lịch Tập Riêng</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="font-headline text-[#4B3427]">Đặt Lịch Tập Riêng hoặc Trị Liệu</DialogTitle>
        <DialogDescription>
          Đối với các buổi tập cá nhân, vui lòng liên hệ trực tiếp với chúng tôi để sắp xếp lịch hẹn.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <p className='text-sm text-muted-foreground'>Vui lòng gọi điện, nhắn Messenger hoặc email để sắp xếp thời gian phù hợp với bạn.</p>
        <a href="tel:0352518855" className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-amber-50">
          <Phone className="h-6 w-6 text-[#7A4D35]" />
          <div>
            <p className="font-semibold text-[#4B3427]">Điện thoại</p>
            <p className="text-muted-foreground">035 251 8855</p>
          </div>
        </a>
        <a href="mailto:luvyoga.official@gmail.com" className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-amber-50">
          <Phone className="h-6 w-6 text-[#7A4D35]" />
          <div>
            <p className="font-semibold text-[#4B3427]">Email</p>
            <p className="text-muted-foreground">luvyoga.official@gmail.com</p>
          </div>
        </a>
        <a href="https://m.me/LuvYoga.Official" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-amber-50">
          <Phone className="h-6 w-6 text-[#7A4D35]" />
          <div>
            <p className="font-semibold text-[#4B3427]">Messenger</p>
            <p className="text-muted-foreground">m.me/LuvYoga.Official</p>
          </div>
        </a>
        <a href="https://www.instagram.com/luvyoga.official" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-amber-50">
          <Phone className="h-6 w-6 text-[#7A4D35]" />
          <div>
            <p className="font-semibold text-[#4B3427]">Instagram</p>
            <p className="text-muted-foreground">@luvyoga.official</p>
          </div>
        </a>
        <a href="https://www.facebook.com/LuvYoga.Official" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-amber-50">
          <Phone className="h-6 w-6 text-[#7A4D35]" />
          <div>
            <p className="font-semibold text-[#4B3427]">Facebook</p>
            <p className="text-muted-foreground">/LuvYoga.Official</p>
          </div>
        </a>
      </div>
    </DialogContent>
  </Dialog>
);

export default function TherapySection() {
  return (
    <SectionBackground type="therapy">
      <section id="therapy" className="py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-[#4B3427]">
              Trị Liệu & Lớp Riêng
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#5C4D43]/90">
              Chăm sóc cá nhân hóa để hỗ trợ hành trình chữa lành và phát triển của bạn.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="flex flex-col shadow-lg bg-white/70 backdrop-blur-md border-[#7A4D35]/10">
              <CardHeader>
                <CardTitle className="font-headline text-[#4B3427]">Hỗ trợ trị liệu</CardTitle>
                <CardDescription className="text-[#5C4D43]/85">Hỗ trợ chuyên biệt cho các tình trạng khác nhau. Vui lòng đặt lịch trước.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {therapyServices.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#7A4D35]" />
                    <span className="text-[#4B3427] font-medium">{service}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="flex flex-col shadow-lg bg-white/70 backdrop-blur-md border-[#7A4D35]/10">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2 text-[#4B3427]"><User className="h-6 w-6 text-[#7A4D35]" /> Kèm 1:1 Yoga Trị Liệu</CardTitle>
                <CardDescription className="text-[#5C4D43]/85">Các buổi tập yoga trị liệu 1-1 được thiết kế riêng theo nhu cầu của bạn.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <h4 className="font-semibold text-[#4B3427]">Thời gian có sẵn:</h4>
                  <div className="mt-2 space-y-2">
                    {privateClassTimes.map((time) => (
                      <div key={time} className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-[#7A4D35]/70" />
                        <span className="text-[#5C4D43] font-medium">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#4B3427]">Địa điểm:</h4>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-[#7A4D35]/70" />
                      <span className="text-[#5C4D43] font-medium">Offline (Tại studio hoặc tại nhà trong vòng 10km)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-[#7A4D35]/70" />
                      <span className="text-[#5C4D43] font-medium">Online (Toàn quốc)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <BookingDialog />
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
