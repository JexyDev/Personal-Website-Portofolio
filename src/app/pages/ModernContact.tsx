import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Linkedin, Github, Instagram, Calendar, Clock, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

export default function ModernContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // NOTE: Replace 'mqakpgyq' with your actual Formspree ID if you have one
      // or use your email directly if the Formspree account is set up for it.
      const response = await fetch('https://formspree.io/f/mqakpgyq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      username: 'jeremydarrell@gmail.com',
      icon: Mail,
      url: 'mailto:jeremydarrell@gmail.com',
      color: 'hover:bg-gray-100 dark:hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      username: '@JexyDev',
      icon: Linkedin,
      url: 'https://linkedin.com/in/JeremyDarrell',
      color: 'hover:bg-gray-100 dark:hover:bg-gray-900'
    },
    {
      name: 'GitHub',
      username: '@JexyDev',
      icon: Github,
      url: 'https://github.com/JexyDev',
      color: 'hover:bg-gray-100 dark:hover:bg-gray-900'
    },
    {
      name: 'Instagram',
      username: '@Jeree.xy',
      icon: Instagram,
      url: 'https://instagram.com/Jeree.xy',
      color: 'hover:bg-gray-100 dark:hover:bg-gray-900'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-8 py-12 lg:px-16 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8" />
            <h1 className="text-4xl lg:text-5xl font-bold">Get in Touch</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
            Menghubungkan kreativitas dengan solusi teknis yang fungsional. Saya siap memberikan dedikasi penuh dan antusiasme belajar tinggi untuk berkontribusi dalam program <span className="text-black dark:text-white font-bold">PKL (Praktek Kerja Lapangan)</span> di wilayah <span className="text-black dark:text-white font-bold">Jabodetabek</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me more about your project..."
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    <Send className={isSubmitting ? "w-4 h-4 animate-bounce" : "w-4 h-4"} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Typical response time: 1-2 hours (GMT+7)</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect with me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 transition-colors ${link.color}`}
                  >
                    <link.icon className="w-5 h-5" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{link.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {link.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                  <div>
                    <div className="font-medium">Open for PKL</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Jabodetabek Area
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Response time</span>
                    <span className="font-medium">1-2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Timezone</span>
                    <span className="font-medium">GMT+7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Location</span>
                    <span className="font-medium">Bogor, ID</span>
                  </div>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </motion.div>
    </div>
  );
}