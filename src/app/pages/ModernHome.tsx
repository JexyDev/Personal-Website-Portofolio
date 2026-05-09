import { motion } from 'motion/react';
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

export default function ModernHome() {
  const learningFocus = [
    { title: 'Frontend & UI Design', desc: 'Belajar slicing desain Figma ke Flutter. Masih level pemula/junior, namun fokus pada hasil yang presisi dan fungsional.', status: 'Junior' },
    { title: 'Backend Foundation', desc: 'Membangun API sederhana dengan Node.js dan Express untuk mendukung aplikasi web.', status: 'Learning' },
    { title: 'Mobile Development', desc: 'Eksplorasi pembuatan aplikasi mobile menggunakan Flutter.', status: 'Exploring' }
  ];



  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="px-8 py-20 lg:px-24 lg:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <Badge variant="secondary" className="mb-6 px-3 py-1 font-medium">
              <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
              PPLG Student at SMK Wikrama Bogor
            </Badge>

            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              Jeremy

              <span className="text-muted-foreground italic font-medium">  Darrell</span>
              <span className="text-muted-foreground/50 italic font-medium"> Andreas.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
              Seorang <span className="text-foreground">Junior Web Developer</span> yang percaya bahwa setiap baris kode adalah solusi. Realita jujurnya, saya masih di tingkat fundamental dan terus belajar setiap hari, namun fokus utama saya tetap satu: <span className="text-foreground">menyelesaikan masalah (solve problem)</span>.
            </p>

            <div className="flex flex-wrap gap-5">
              <Button size="lg" className="rounded-full px-8 h-14 text-base group">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base">
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:flex-shrink-0"
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-foreground/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-foreground/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto opacity-50" />

      {/* Honest Reality / Learning Path */}
      <section className="px-8 py-20 lg:px-24 max-w-5xl mx-auto">
        <div className="flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-3xl font-bold tracking-tight">Honest Reality</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Saya menyadari bahwa perjalanan saya baru saja dimulai. Realita jujurnya, saya masih di tahap mengasah fundamental, namun saya terus belajar setiap hari demi memberikan solusi terbaik (solve problem) melalui teknologi.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningFocus.map((item, index) => (
                <Card key={index} className="border-none shadow-none bg-muted/30">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{item.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}