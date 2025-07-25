import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a FormData object
    const data = new FormData();
    data.append("access_key", "784b38f5-20c7-410a-98c3-cc86d7c74472");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    data.append("botcheck", ""); 

    console.log("Attempting to send form data:", Object.fromEntries(data.entries()));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        
        body: data, 
      });

      console.log("Response status:", response.status);

      const result = await response.json(); 
      
      console.log('Web3Forms API response:', result);

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.error('Web3Forms error (not successful):', result);
        toast({
          title: "Failed to send message.",
          description: result.message || "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Failed to send message.",
        description: "Network error or unexpected issue. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid md:grid-cols-[1fr_2fr] gap-8">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:contact@merndev.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    rehmnfahim@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-secondary mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+11234567890"
                    className="text-foreground/70 hover:text-secondary transition-colors"
                  >
                    +91 7065047573
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-accent mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-foreground/70">
                    Noida sector-110, U.P.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3">Connect with me</h4>
              <div className="flex space-x-4">

                {/* Github */}
                <a 
                  href="https://github.com/rehmnjr" 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                {/* Leetcode */}
                <a 
                  href="https://leetcode.com/u/rehmn_jr/" 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <img src="https://tharunmadishetti.vercel.app/images/leetcode.png" alt="leetcode"width={20} />
                </a>
                {/* GFG */}
                <a 
                  href="https://www.geeksforgeeks.org/user/rehmnfxrpu/" 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlLjqKiIweuZebJnt5SGHsO6ZMyWIzrrvhg&s" alt="leetcode"width={20} />
                </a>

              {/* Figma */}
                <a 
                  href="https://www.figma.com/@fahimrehman" 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <img src="https://boost.space/wp-content/uploads/2025/02/figma.png" alt="leetcode"width={20} />
                </a>


              {/* linkedin */}
                <a 
                  href="https://www.linkedin.com/in/fahimrehman/" 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card/50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Inquiry for ?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-card/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-card/50"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-primary hover:bg-primary/80 w-full md:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}