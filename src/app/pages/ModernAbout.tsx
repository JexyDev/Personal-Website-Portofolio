import { motion } from 'motion/react';
import { User, BookOpen, GraduationCap, Award, Code, Heart, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

export default function ModernAbout() {
  const skills = [
    { category: 'Frontend', items: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'], level: 75 },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'PHP Native', 'REST API'], level: 65 },
    { category: 'Mobile', items: ['Flutter', 'Dart'], level: 60 },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Postman'], level: 80 }
  ];

  const milestones = [
    {
      year: '2026',
      title: 'Developing TOLO App',
      description: 'Membangun platform "Toko Lokal" marketplace untuk UMKM di sekitar Bogor agar bisa terintegrasi secara online.',
      outcome: 'Real-world problem solving.'
    },
    {
      year: '2025',
      title: 'Mastering Fundamentals',
      description: 'Fokus mendalami logika pemrograman, database, dan struktur data secara intensif di SMK Wikrama.',
      outcome: 'Strong technical foundation.'
    },
    {
      year: '2024',
      title: 'The First Steps',
      description: 'Awal mula mengenal dunia coding dan mulai bereksperimen dengan baris kode pertama saya.',
      outcome: 'Sparked the passion.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground px-8 py-12 lg:px-24 lg:py-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">The Journey.</h1>
              <p className="text-muted-foreground text-xl">Honest growth of a student programmer.</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="story" className="space-y-8">
          <TabsList className="bg-muted/50 p-1 rounded-full border border-border/50">
            <TabsTrigger value="story" className="rounded-full px-8 gap-2">
              <Sparkles className="w-4 h-4" />
              Story
            </TabsTrigger>
            <TabsTrigger value="skills" className="rounded-full px-8 gap-2">
              <Code className="w-4 h-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="education" className="rounded-full px-8 gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </TabsTrigger>
          </TabsList>

          {/* Story Tab */}
          <TabsContent value="story">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <Card className="border-none shadow-sm bg-muted/20">
                  <CardContent className="p-8 lg:p-12">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <h2 className="text-3xl font-bold mb-6 italic">"Bukan sekadar hobi, ini adalah perjalanan."</h2>

                      <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                        Ketertarikan saya pada dunia coding bermula dari konten-konten <strong className="text-foreground">Dea Afrizal</strong>. Waktu itu AI belum se-booming sekarang, segalanya masih terasa awal dan belajar coding secara manual terasa sangat "seru" bagi saya.
                      </p>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Namun, seiring berjalannya waktu, saya menyadari perkembangan teknologi melesat sangat cepat. Saya sadar bahwa saya tidak bisa hanya sekadar "tahu", saya harus benar-benar menguasai fundamentalnya.
                      </p>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Perjalanan serius saya dimulai ketika saya masuk ke <strong className="text-foreground">SMK Wikrama Bogor</strong>. Di sinilah skill saya benar-benar ditempa dari nol, mulai dari pemahaman logika dasar hingga membangun aplikasi yang fungsional.
                      </p>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Di era sekarang, saya juga memanfaatkan <strong className="text-foreground">AI sebagai asisten belajar dan coding</strong>. Bagi saya, AI adalah partner diskusi yang luar biasa untuk mempercepat pemahaman, namun tetap dengan prinsip bahwa saya harus memahami setiap baris logika yang dihasilkan.
                      </p>

                      <p className="text-muted-foreground leading-relaxed">
                        Saat ini saya fokus mendalami pengembangan web dan mobile, sambil tetap memegang prinsip kejujuran dalam setiap baris kode yang saya tulis.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Milestones
                </h3>
                {milestones.map((m, i) => (
                  <div key={i} className="relative pl-6 border-l border-border pb-6 last:pb-0">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary" />
                    <span className="text-xs font-mono text-muted-foreground mb-1 block">{m.year}</span>
                    <h4 className="font-bold mb-2">{m.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{m.description}</p>
                    <Badge variant="outline" className="text-[10px] font-normal">{m.outcome}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="border-none shadow-sm bg-muted/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex justify-between items-center">
                      {skill.category}
                      <span className="text-xs font-mono text-muted-foreground">{skill.level}% Confidence</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <Badge key={i} variant="secondary" className="rounded-lg px-4 py-1">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-muted-foreground text-sm italic">
              *Tingkat kepercayaan diri berdasarkan pemahaman konsep dan implementasi dalam proyek nyata.
            </p>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <Card className="border-none shadow-sm bg-muted/20">
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 bg-foreground rounded-2xl flex items-center justify-center shrink-0">
                    <GraduationCap className="w-10 h-10 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 tracking-tight">SMK WIKRAMA BOGOR</h3>
                    <p className="text-xl text-muted-foreground mb-4">Pengembangan Perangkat Lunak dan Gim (PPLG)</p>
                    <Badge className="mb-6">2022 - 2025 (Expected)</Badge>

                    <Separator className="mb-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="font-bold mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5" />
                          What I Learn
                        </h4>
                        <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                          {[
                            'JavaScript Dasar',
                            'Github & Command Prompt',
                            'Logika, Algoritma, OOP',
                            'MYSQL & Databases',
                            'MVC + PDO (PHP)',
                            'Framework Laravel',
                            'Perkenalan API',
                            'Postman',
                            'Lumen & PostgreSQL (API)',
                            'Dasar ReactJS',
                            'Fake Store App (React)',
                            'Flutter Development',
                            'IOT Fundamental',
                            'Product/Project Management'
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span className="text-muted-foreground">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-4 flex items-center gap-2">
                          <Heart className="w-5 h-5" />
                          Values
                        </h4>
                        <div className="bg-background/50 p-6 rounded-2xl">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Di Wikrama, kami diajarkan moto <strong>"Ilmu yang Amaliah, Amal yang Ilmiah, Akhlakul Karimah"</strong>. Artinya, ilmu yang didapat harus dipraktikkan, setiap tindakan harus didasari ilmu, dan yang terpenting adalah memiliki karakter yang baik.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}