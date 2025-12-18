import { useState, useEffect } from "react";
import Header from "@/components/Header";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Shield,
  Music,
  Book,
  Flame,
  Star,
} from "lucide-react";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Special Puja with RishiGyan",
      subtitle:
        "Worship your deities at home and receive their divine blessings - only on RishiGyan",
      image:
        "https://images.unsplash.com/photo-1578894949749-18be63e33fad?w=1200&h=700&fit=crop",
      cta: "Explore Now",
    },
    {
      title: "Connect with Your Spirituality",
      subtitle:
        "Join millions of devotees in their spiritual journey with our community",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop",
      cta: "Learn More",
    },
    {
      title: "Find Inner Peace",
      subtitle:
        "Discover ancient wisdom and modern accessibility in one platform",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=700&fit=crop",
      cta: "Start Journey",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const features = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Personal Temple",
      description:
        "Set up your temple on your phone, dedicated to your beloved deities",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Sacred Music",
      description:
        "Access 5000+ Ad-Free devotional music - Aartis, Mantras, Bhajans, and Chalisas",
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Knowledge Base",
      description:
        "Get specially curated books, articles and videos based on spiritual teachings",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Daily Updates",
      description:
        "Get regular updates on Daily Horoscope, Panchang, and upcoming Festivals",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description:
        "Be part of the world's largest spiritual community and connect globally",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Services",
      description:
        "Book personalized Puja at 1000+ renowned temples across the country",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Carousel */}
      <section className="pt-20 relative overflow-hidden">
        <div className="relative h-96 md:h-[600px] overflow-hidden bg-spiritual-brown">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-spiritual-brown/70 to-spiritual-brown/30" />
            </div>
          ))}

          {/* Slide Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-6 md:pl-16 text-white z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl">
              {slides[currentSlide].title.split(" ").map((word, idx) => (
                <span key={idx}>
                  {word === "RishiGyan" ? (
                    <span className="text-spiritual-gold">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-lg text-gray-100">
              {slides[currentSlide].subtitle}
            </p>
            <button className="bg-white text-spiritual-brown px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              {slides[currentSlide].cta}
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 transition-all ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 w-2 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators Bar */}
        <div className="bg-spiritual-gold text-white py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center gap-3 flex-col md:flex-row">
                <Users className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="text-xl md:text-2xl font-bold">30M+</p>
                  <p className="text-sm opacity-90">Trusted by millions</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 flex-col md:flex-row">
                <Shield className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="text-xl md:text-2xl font-bold">100%</p>
                  <p className="text-sm opacity-90">Secure & Protected</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 flex-col md:flex-row">
                <Flame className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="text-xl md:text-2xl font-bold">1000+</p>
                  <p className="text-sm opacity-90">Temples Connected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-spiritual-brown">RishiGyan</span>{" "}
              <span className="text-secondary">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our comprehensive features designed to enhance your
              spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-spiritual-cream border border-spiritual-gold/20 rounded-xl hover:shadow-lg hover:border-spiritual-gold/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-spiritual-gold/10 rounded-lg flex items-center justify-center text-spiritual-gold group-hover:bg-spiritual-gold group-hover:text-white transition-all duration-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-spiritual-brown text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your{" "}
            <span className="text-spiritual-gold">Spiritual Journey</span> Today
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Join millions of devotees and experience the divine grace with our
            comprehensive spiritual platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-spiritual-gold text-spiritual-brown px-8 py-3 rounded-lg font-semibold hover:bg-spiritual-gold-light transition-colors">
              Download App Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">RishiGyan</h4>
              <p className="text-sm text-muted-foreground">
                Your spiritual companion for a meaningful life journey.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/temples"
                    className="hover:text-primary transition-colors"
                  >
                    Temples
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 RishiGyan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
