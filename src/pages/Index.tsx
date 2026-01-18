import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Index = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Заявка отправлена! 🎉",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setIsSubmitting(false);
      setIsDialogOpen(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    {
      icon: "Video",
      title: "Полный охват основ",
      description: "От знакомства с интерфейсом до сложных техник обработки видео и звука"
    },
    {
      icon: "Target",
      title: "Практикоориентированное обучение",
      description: "Каждое занятие включает практические задания на реальных примерах"
    },
    {
      icon: "TrendingUp",
      title: "Индивидуальный прогресс",
      description: "Двигайтесь в удобном темпе и получайте обратную связь"
    },
    {
      icon: "Award",
      title: "Профессиональные советы",
      description: "Секреты опытных монтажёров и ценные рекомендации"
    }
  ];

  const courseBlocks = [
    {
      title: "Начало работы с Cup Cut",
      lessons: 10,
      description: "Освоение базовых функций и инструментов приложения"
    },
    {
      title: "Базовая обработка видео",
      lessons: 12,
      description: "Цветокоррекция, фильтры, маски и эффекты"
    },
    {
      title: "Работа со звуком",
      lessons: 10,
      description: "Озвучка, музыкальное сопровождение, устранение шумов"
    },
    {
      title: "Монтаж коротких роликов",
      lessons: 8,
      description: "Создание эффективных и привлекательных видео-контентов"
    },
    {
      title: "Работа с текстом и титрами",
      lessons: 9,
      description: "Анимация текста, создание субтитров, типографика"
    },
    {
      title: "Переходы и эффекты",
      lessons: 11,
      description: "Плавные переходы между сценами, спецэффекты"
    },
    {
      title: "Цветокоррекция продвинутая",
      lessons: 10,
      description: "Профессиональная работа с цветом и светом"
    },
    {
      title: "Многокамерный монтаж",
      lessons: 8,
      description: "Синхронизация и работа с несколькими камерами"
    },
    {
      title: "Экспорт и публикация",
      lessons: 7,
      description: "Оптимальные настройки экспорта для разных платформ"
    },
    {
      title: "Работа с форматами",
      lessons: 9,
      description: "Понимание кодеков, разрешений и битрейта"
    },
    {
      title: "Создание портфолио",
      lessons: 12,
      description: "Оформление работ и презентация проектов"
    },
    {
      title: "Финальный проект",
      lessons: 14,
      description: "Создание комплексного видеопроекта от А до Я"
    }
  ];

  const instructors = [
    {
      name: "Алексей Соколов",
      role: "Главный преподаватель",
      experience: "12 лет в видеопроизводстве",
      avatar: "👨‍🎓"
    },
    {
      name: "Мария Петрова",
      role: "Эксперт по цветокоррекции",
      experience: "8 лет работы с крупными брендами",
      avatar: "👩‍🎨"
    },
    {
      name: "Дмитрий Иванов",
      role: "Специалист по звуку",
      experience: "10 лет в киноиндустрии",
      avatar: "👨‍💼"
    }
  ];

  const testimonials = [
    {
      name: "Анна Смирнова",
      role: "Выпускница курса",
      text: "Курс превзошёл все мои ожидания! За 3 месяца я прошла путь от новичка до уверенного монтажёра. Теперь работаю фрилансером.",
      rating: 5
    },
    {
      name: "Игорь Волков",
      role: "Контент-мейкер",
      text: "Отличная структура материала и практические задания. Преподаватели всегда готовы помочь. Рекомендую всем начинающим!",
      rating: 5
    },
    {
      name: "Елена Козлова",
      role: "SMM-специалист",
      text: "Благодаря курсу я научилась делать профессиональные видео для соцсетей. Мои клиенты в восторге от результата!",
      rating: 5
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Play" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">База по монтажу</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О курсе</button>
            <button onClick={() => scrollToSection('program')} className="text-sm font-medium hover:text-primary transition-colors">Программа</button>
            <button onClick={() => scrollToSection('instructors')} className="text-sm font-medium hover:text-primary transition-colors">Преподаватели</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
          </nav>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Начать обучение</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Записаться на курс</DialogTitle>
                <DialogDescription>
                  Заполните форму, и мы свяжемся с вами для подтверждения записи
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий (необязательно)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите о своих целях и опыте в видеомонтаже..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  {!isSubmitting && <Icon name="Send" className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24 md:py-32">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">120 уроков</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                База по монтажу
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ваш надежный старт в мире видеомонтажа. От новичка до профессионала с практическими заданиями и поддержкой экспертов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="text-lg px-8">
                      Записаться на курс
                      <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Записаться на курс</DialogTitle>
                      <DialogDescription>
                        Заполните форму, и мы свяжемся с вами для подтверждения записи
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Иван Иванов"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="ivan@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Комментарий (необязательно)</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Расскажите о своих целях и опыте в видеомонтаже..."
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Отправка..." : "Отправить заявку"}
                        {!isSubmitting && <Icon name="Send" className="ml-2 h-4 w-4" />}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('program')}>
                  Смотреть программу
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">120</div>
                  <div className="text-sm text-muted-foreground">уроков</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">блоков</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">доступ</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <img 
                  src="https://cdn.poehali.dev/projects/ec0f0e90-8702-48cf-a45e-f79e392de8ea/files/1ce75e16-0d0f-4a11-92cb-9e80f62a97cb.jpg"
                  alt="Видеомонтаж"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Преимущества</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что вас ждёт на курсе</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексная программа обучения для достижения профессионального уровня
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Для кого этот курс</Badge>
              <h2 className="text-4xl font-bold mb-6">Начните карьеру в видеопроизводстве</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Этот курс идеально подходит для новичков, желающих начать карьеру в видеопроизводстве, а также для тех, кто уже имеет небольшой опыт, но хочет систематизировать и расширить свои знания.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Новички в монтаже</h3>
                    <p className="text-muted-foreground">Начните с нуля и освойте профессию</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Контент-мейкеры</h3>
                    <p className="text-muted-foreground">Улучшите качество своих видео</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Практикующие монтажёры</h3>
                    <p className="text-muted-foreground">Систематизируйте знания и освойте новые техники</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
              <h3 className="text-2xl font-bold mb-6">Формат обучения</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MonitorPlay" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Видеоуроки по требованию</h4>
                    <p className="text-muted-foreground text-sm">Смотрите в удобное время и возвращайтесь к материалам когда угодно</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Infinity" className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Неограниченный доступ</h4>
                    <p className="text-muted-foreground text-sm">Все материалы остаются с вами навсегда</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="ClipboardCheck" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Практические задания</h4>
                    <p className="text-muted-foreground text-sm">Закрепляйте теорию на реальных проектах</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="program" className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Программа</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">12 тематических блоков</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Структурированная программа от базовых навыков до продвинутых техник
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {courseBlocks.map((block, index) => (
                <AccordionItem key={index} value={`block-${index}`} className="border-2 rounded-xl px-6 bg-background">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{block.title}</h3>
                        <p className="text-sm text-muted-foreground">{block.lessons} уроков</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <p className="text-muted-foreground pl-16">{block.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="instructors" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Команда</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши преподаватели</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксперты с многолетним опытом в индустрии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center hover-scale border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 text-5xl">
                    {instructor.avatar}
                  </div>
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {instructor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{instructor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Истории успеха</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят наши выпускники
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed text-foreground">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать обучение?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйтесь к нам и сделайте первые шаги к созданию профессиональных видеороликов
          </p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Записаться на курс
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Записаться на курс</DialogTitle>
                <DialogDescription>
                  Заполните форму, и мы свяжемся с вами для подтверждения записи
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name-cta">Ваше имя *</Label>
                  <Input
                    id="name-cta"
                    name="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-cta">Email *</Label>
                  <Input
                    id="email-cta"
                    name="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone-cta">Телефон *</Label>
                  <Input
                    id="phone-cta"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message-cta">Комментарий (необязательно)</Label>
                  <Textarea
                    id="message-cta"
                    name="message"
                    placeholder="Расскажите о своих целях и опыте в видеомонтаже..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  {!isSubmitting && <Icon name="Send" className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Play" className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">База по монтажу</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональное обучение видеомонтажу с нуля
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-foreground transition-colors">О курсе</button></li>
                <li><button onClick={() => scrollToSection('program')} className="hover:text-foreground transition-colors">Программа</button></li>
                <li><button onClick={() => scrollToSection('instructors')} className="hover:text-foreground transition-colors">Преподаватели</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-foreground transition-colors">Отзывы</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@videocourse.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline">
                  <Icon name="Youtube" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Send" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 База по монтажу. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;