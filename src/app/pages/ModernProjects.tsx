import { useState } from 'react';
import { motion } from 'motion/react';
import { FolderOpen, Github, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export default function ModernProjects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'TOLO - Marketplace UMKM',
      category: 'Mobile App',
      description: 'Marketplace berbasis Express dan Flutter untuk UMKM di Bogor Kota agar bisa berjualan online. Dilengkapi fitur AI Assistant untuk membantu pembeli menemukan produk yang sesuai kebutuhan.',
      reflection: 'Ide TOLO sudah ada sejak saya kelas 10, berawal dari tugas membuat mockup di kafe bersama teman-teman. Senang sekali akhirnya sekarang baru bisa benar-benar men-develop aplikasinya secara nyata. Membangun solusi UMKM dengan sentuhan AI ternyata punya tantangan psikologis yang sangat menarik bagi saya.',
      image: '/projects/tolo.jpeg',
      tags: ['Flutter', 'Express.js', 'MySQL', 'OpenAI'],
      featured: true,
      year: '2024',
      status: 'In Development',
      link: '#'
    },
    {
      title: 'Trainify - Home Workout App',
      category: 'Web Application',
      description: 'Aplikasi panduan workout di rumah yang interaktif dengan detail menarik, dirancang untuk membantu pengguna tetap bugar tanpa biaya tambahan. Desain antarmuka dibuat sepenuhnya di Figma.',
      reflection: 'Proyek ini lahir saat saya mulai aktif olahraga. Karena biaya gym cukup mahal, saya mencari solusi agar bisa tetap bugar di rumah secara gratis. Ini adalah hasil eksplorasi saya menggunakan Laravel untuk membangun platform kesehatan mandiri.',
      image: '/projects/trainify.jpeg',
      tags: ['PHP', 'Laravel', 'MySQL', 'Figma'],
      featured: true,
      year: '2024',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'TixID - Cinema Ticketing',
      category: 'Web Application',
      description: 'Proyek eksplorasi sistem pemesanan tiket bioskop yang dibuat sebagai sarana belajar mendalam mengenai operasi database dan alur kerja aplikasi web.',
      reflection: 'Proyek sekolah ini adalah momen kunci di mana saya benar-benar memahami logika CRUD di PHP Laravel. Membangun detail fitur TixID memberikan saya pemahaman yang jauh lebih matang tentang bagaimana data dikelola dalam sebuah sistem.',
      image: '/projects/tixid.jpeg',
      tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      featured: false,
      year: '2025',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Smart IoT Dashboard',
      category: 'Website',
      description: 'Dashboard monitoring untuk perangkat IoT yang memantau suhu dan kelembaban secara real-time.',
      reflection: 'Ini adalah proyek IoT pertama saya dari ekskul IoT. Membuat rangkaian sensor untuk praktek secara langsung sangat seru dan menantang bagi saya.',
      image: '/projects/iot.jpeg',
      tags: ['IoT', 'C++'],
      featured: false,
      year: '2024',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Carbon - Air Quality Monitor',
      category: 'Website',
      description: 'Aplikasi web modern yang memanfaatkan API untuk memonitor kadar karbon dan kualitas udara di berbagai daerah secara real-time.',
      reflection: 'Selain menjadi solusi untuk memantau polusi, di proyek inilah saya pertama kali mendalami Fetch API dan cara mengintegrasikan Open Source API ke dalam aplikasi React.',
      image: '/projects/carbon.jpeg',
      tags: ['React', 'Fetch API', 'Open Source API', 'CSS Grid'],
      featured: false,
      year: '2024',
      status: 'Live',
      link: '#'
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const categories = ['all', 'Mobile App', 'Web Application', 'Website'];

  return (
    <div className="min-h-screen bg-background text-foreground px-8 py-12 lg:px-24 lg:py-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen className="w-10 h-10" />
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Real Projects</h1>
          </div>
          <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
            Kumpulan karya nyata yang saya kerjakan selama menempuh pendidikan di SMK Wikrama Bogor. Tidak ada template, hanya solusi nyata.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? 'default' : 'outline'}
              onClick={() => setFilter(cat)}
              className="rounded-full px-6 capitalize"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full border-none shadow-sm bg-muted/20 group hover:bg-muted/40 transition-colors">
                {/* Image Placeholder */}
                <div className={`relative overflow-hidden bg-muted ${project.category === 'Mobile App' ? 'aspect-[4/3] flex items-center justify-center p-4 bg-muted/50' : 'aspect-video'}`}>
                  {project.category === 'Mobile App' ? (
                    <div className="relative w-[180px] aspect-[9/19.5] bg-black rounded-[2.5rem] border-[4px] border-muted shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20" /> {/* Notch */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-md bg-white/50 dark:bg-black/50">{project.status}</Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Reflection Section */}
                  <div className="bg-background/50 rounded-xl p-6 mb-8 border border-border/50 italic text-sm text-muted-foreground relative">
                    <BookOpen className="w-4 h-4 absolute -top-2 -left-2 bg-background p-0.5 rounded text-primary" />
                    <strong>Refleksi Jujur:</strong> "{project.reflection}"
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-widest px-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 gap-2 rounded-lg">
                      <Github className="w-4 h-4" />
                      View Code on Github
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
