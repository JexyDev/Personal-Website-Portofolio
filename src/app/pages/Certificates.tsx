import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Certificates() {
  const certifications = [
    {
      name: 'JavaScript Fundamental',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      image: '/projects/SertiJS.jpeg',
      description: 'Langkah awal saya memahami logika pemrograman web.'
    },
    {
      name: 'Python Fundamental',
      issuer: 'Dicoding Indonesia',
      date: '2026',
      image: '/projects/SertiP.jpeg',
      description: 'Belajar Python sebagai fondasi logika berpikir.'
    },
    {
      name: 'K3 Learning',
      issuer: 'Wikrama Bogor',
      date: '2024',
      image: '/projects/SertiK3.jpeg',
      description: 'Belajar pentingnya Keselamatan dan Kesehatan Kerja.'
    },
    {
      name: 'HTML Basic',
      issuer: 'SoloLearn',
      date: '2024',
      image: '/projects/SertiHTML.jpeg',
      description: 'Pintu masuk pertama saya ke dunia coding.'
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
            <Award className="w-10 h-10" />
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Certificates</h1>
          </div>
          <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
            Realita jujurnya, sertifikat ini adalah bukti langkah awal saya. Masih banyak yang harus dipelajari, tapi setiap lembar ini punya cerita perjuangan belajar yang nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-sm bg-muted/20 hover:bg-muted/30 transition-all group">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{cert.name}</h3>
                    <Badge variant="outline" className="text-[10px]">{cert.date}</Badge>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
