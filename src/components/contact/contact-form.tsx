'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SectionBackground } from '@/components/ui/backgrounds';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xpqgeypb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Cảm ơn bạn đã liên hệ!",
          description: "Chúng tôi sẽ phản hồi sớm nhất có thể.",
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        const data = await response.json();
        toast({
          title: "Đã xảy ra lỗi!",
          description: data.errors?.map((err: any) => err.message).join(', ') || "Không thể gửi tin nhắn lúc này. Vui lòng thử lại sau.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Lỗi kết nối!",
        description: "Không thể kết nối đến máy chủ. Vui lòng kiểm tra mạng của bạn.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <SectionBackground type="contact">
      <section id="contact-form" className="py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-[#4B3427]">
                Liên Hệ Với Chúng Tôi
              </h2>
              <p className="text-lg text-[#5C4D43]/90 max-w-2xl mx-auto">
                Có câu hỏi về các lớp học hoặc cần tư vấn? Hãy để lại thông tin, chúng tôi sẽ liên hệ ngay!
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Form */}
              <Card className="shadow-lg bg-white/70 backdrop-blur-md border-[#7A4D35]/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#4B3427]">
                    <Send className="h-5 w-5 text-[#7A4D35]" />
                    Gửi Tin Nhắn
                  </CardTitle>
                  <CardDescription className="text-[#5C4D43]/85">
                    Điền thông tin và chúng tôi sẽ phản hồi trong 24 giờ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#4B3427] font-semibold">Họ tên *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Nhập họ tên của bạn"
                          className="min-h-[44px] bg-white/90 border-[#7A4D35]/20 focus:border-[#7A4D35] focus:ring-[#7A4D35]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#4B3427] font-semibold">Số điện thoại *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="035 xxx xxxx"
                          className="min-h-[44px] bg-white/90 border-[#7A4D35]/20 focus:border-[#7A4D35] focus:ring-[#7A4D35]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#4B3427] font-semibold">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="min-h-[44px] bg-white/90 border-[#7A4D35]/20 focus:border-[#7A4D35] focus:ring-[#7A4D35]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#4B3427] font-semibold">Tin nhắn *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Hãy cho chúng tôi biết bạn cần hỗ trợ gì..."
                        rows={4}
                        className="min-h-[100px] bg-white/90 border-[#7A4D35]/20 focus:border-[#7A4D35] focus:ring-[#7A4D35]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full min-h-[48px] text-lg font-semibold bg-[#7A4D35] hover:bg-[#68412C] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <div className="space-y-6">
                <Card className="shadow-lg bg-white/70 backdrop-blur-md border-[#7A4D35]/10">
                  <CardHeader>
                    <CardTitle className="text-[#4B3427]">Liên Hệ Nhanh</CardTitle>
                    <CardDescription className="text-[#5C4D43]/85">
                      Chọn phương thức liên hệ phù hợp nhất với bạn
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a
                      href="tel:0352518855"
                      className="flex items-center gap-4 rounded-lg border border-[#7A4D35]/10 p-4 transition-all duration-200 hover:bg-[#7A4D35]/5 hover:border-[#7A4D35]/20 hover-lift"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A4D35]/10">
                        <Phone className="h-6 w-6 text-[#7A4D35]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#4B3427]">Gọi ngay</p>
                        <p className="text-muted-foreground">035 251 8855</p>
                      </div>
                    </a>

                    <a
                      href="https://m.me/LuvYoga.Official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-lg border border-[#7A4D35]/10 p-4 transition-all duration-200 hover:bg-[#7A4D35]/5 hover:border-[#7A4D35]/20 hover-lift"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A4D35]/10">
                        <MessageCircle className="h-6 w-6 text-[#7A4D35]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#4B3427]">Messenger</p>
                        <p className="text-muted-foreground">Chat trực tiếp</p>
                      </div>
                    </a>

                    <a
                      href="mailto:luvyoga.official@gmail.com"
                      className="flex items-center gap-4 rounded-lg border border-[#7A4D35]/10 p-4 transition-all duration-200 hover:bg-[#7A4D35]/5 hover:border-[#7A4D35]/20 hover-lift"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A4D35]/10">
                        <Mail className="h-6 w-6 text-[#7A4D35]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#4B3427]">Email</p>
                        <p className="text-muted-foreground">luvyoga.official@gmail.com</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-[#7A4D35]/5 border-[#7A4D35]/15 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg mb-2 text-[#4B3427]">Thời Gian Hoạt Động</h3>
                      <div className="space-y-1 text-sm text-[#5C4D43]/90">
                        <p>🌅 Sáng: 4:45 - 8:00</p>
                        <p>🌇 Tối: 17:30 - 20:25</p>
                        <p>📅 Thứ 2 - Chủ nhật</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}