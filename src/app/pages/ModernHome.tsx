import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, BookOpen, GraduationCap, FileText, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

export default function ModernHome() {
  const learningFocus = [
    {
      icon: '🌐',
      title: 'Web Development',
      sub: 'React.js & Laravel',
      desc: 'Laravel adalah yang paling saya kuasai sejauh ini. React saya sedang perdalam lebih lanjut — sudah bisa membuat halaman fungsional, namun masih terus belajar best practice-nya.'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      sub: 'Flutter & Dart',
      desc: 'Masih di tahap awal. Bisa membuat UI dasar dan navigasi sederhana, tapi belum sampai ke state management yang kompleks. Ini yang sedang saya kejar selanjutnya.'
    },
    {
      icon: '🔌',
      title: 'IoT & Hardware',
      sub: 'Arduino & ESP32',
      desc: 'Belajar dari ekskul IoT di SMK. Sudah pernah membangun sensor suhu dan kelembaban sederhana — bidang yang menurut saya seru karena menyentuh dunia fisik langsung.'
    },
    {
      icon: '🗃️',
      title: 'Database & Backend',
      sub: 'MySQL & Express.js',
      desc: 'MySQL sudah cukup nyaman saya gunakan untuk proyek sehari-hari. Express.js masih cukup terbatas — biasa saya pakai untuk API sederhana saja.'
    }
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
              <Button size="lg" className="rounded-full px-8 h-14 text-base group" asChild>
                <a href="/cv-jeremy.html" target="_blank" rel="noopener noreferrer">
                  View CV
                  <FileText className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 h-14 text-base group"
                asChild
              >
                <a 
                  href="https://wa.me/628176695922?text=Halo%20Jeremy%2C%20saya%20melihat%20portfolio%20Anda%20dan%20tertarik%20untuk%20bekerja%20sama." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Contact Me
                  <MessageCircle className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </a>
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
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-3xl font-bold tracking-tight">Honest Reality</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Saya tidak mau terlihat lebih dari apa yang saya bisa. Berikut kondisi belajar saya saat ini — apa adanya.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningFocus.map((item, index) => (
                <Card key={index} className="border-none shadow-none bg-muted/30 hover:bg-muted/50 transition-colors">
                  <CardContent className="p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-base leading-tight">{item.title}</h3>
                        <p className="text-xs text-muted-foreground font-medium">{item.sub}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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