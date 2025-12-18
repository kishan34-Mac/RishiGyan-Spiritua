import Header from "@/components/Header";
import {
  Flame,
  Music,
  Calendar,
  Star,
  Book,
  Users,
  Sparkles,
  Check,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Flame className="w-10 h-10" />,
      title: "Personal Temple",
      description:
        "Set up your own personal temple on your phone dedicated to your beloved deities",
      features: [
        "Customize your temple with multiple deities",
        "Daily prayers and offerings",
        "Daily reminders for worship",
        "Personal puja tracking",
      ],
      price: "Free",
      cta: "Start Temple",
    },
    {
      icon: <Music className="w-10 h-10" />,
      title: "Sacred Music & Mantras",
      description:
        "Access 5000+ ad-free devotional songs, mantras, aartis, and chalisas",
      features: [
        "5000+ devotional songs",
        "Aartis for all major deities",
        "Powerful mantras for peace",
        "Complete chalisa library",
      ],
      price: "Free",
      cta: "Listen Now",
    },
    {
      icon: <Flame className="w-10 h-10" />,
      title: "Online Puja Services",
      description:
        "Book personalized puja services at 1000+ renowned temples across India",
      features: [
        "1000+ verified temples",
        "Video recording of your puja",
        "Mahaprasad delivery",
        "Sankalp customization",
      ],
      price: "₹499 onwards",
      cta: "Book Puja",
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Horoscope & Astrology",
      description:
        "Get personalized horoscopes, astrological guidance, and remedies",
      features: [
        "Daily horoscope readings",
        "Astrological chart analysis",
        "Remedial suggestions",
        "Dosha analysis",
      ],
      price: "₹99 onwards",
      cta: "View Horoscope",
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Panchang & Festivals",
      description:
        "Daily panchang updates and festival information with rituals",
      features: [
        "Daily panchang updates",
        "Auspicious timings",
        "Festival information",
        "Ritual guidance",
      ],
      price: "Free",
      cta: "Explore",
    },
    {
      icon: <Book className="w-10 h-10" />,
      title: "Digital Library",
      description:
        "Explore curated articles, videos, and wisdom on Hindu dharma and spirituality",
      features: [
        "Spiritual articles",
        "Educational videos",
        "Ayurveda guides",
        "Dharma teachings",
      ],
      price: "Free",
      cta: "Browse Library",
    },
  ];

  const additionalServices = [
    {
      title: "Chadhava Seva",
      description:
        "Offer regular chadhava (offerings) to your favorite temples with video proof",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: "Festival Celebrations",
      description:
        "Participate in grand temple festivals from anywhere in the world",
      icon: <Flame className="w-8 h-8" />,
    },
    {
      title: "Community Connect",
      description:
        "Join millions of devotees and participate in collective prayers",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Expert Consultations",
      description:
        "Get guidance from experienced spiritual advisors and priests",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-spiritual-brown/5 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-spiritual-gold">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive spiritual services designed to enhance your devotional
            journey and connect you with the divine
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-spiritual-cream border border-spiritual-gold/20 rounded-xl p-8 hover:shadow-lg hover:border-spiritual-gold/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-spiritual-gold/10 rounded-lg flex items-center justify-center text-spiritual-gold group-hover:bg-spiritual-gold group-hover:text-white transition-all duration-300 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-spiritual-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-spiritual-gold/10">
                  <span className="font-semibold text-spiritual-brown">
                    {service.price}
                  </span>
                  <button className="bg-spiritual-gold text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-spiritual-gold-light transition-colors inline-flex items-center gap-2 group">
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            More <span className="text-spiritual-brown">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-border hover:shadow-md hover:border-spiritual-gold/30 transition-all"
              >
                <div className="w-12 h-12 bg-spiritual-gold/10 rounded-lg flex items-center justify-center text-spiritual-gold mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It <span className="text-spiritual-brown">Works</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Sign Up",
                description: "Create your RishiGyan account in minutes",
              },
              {
                step: 2,
                title: "Choose Service",
                description: "Select from our range of spiritual services",
              },
              {
                step: 3,
                title: "Book & Pay",
                description: "Secure payment and instant confirmation",
              },
              {
                step: 4,
                title: "Receive Blessings",
                description: "Get services performed and track progress",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-spiritual-cream border border-spiritual-gold/20 rounded-lg p-6 text-center">
                  <div className="w-10 h-10 bg-spiritual-gold text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-spiritual-gold/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-16 md:py-24 bg-spiritual-brown/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Our <span className="text-spiritual-gold">Services</span>
            ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Temples",
                description:
                  "All temples are verified and authenticated to ensure authenticity",
              },
              {
                title: "Video Proof",
                description:
                  "Receive video recordings of your services performed by priests",
              },
              {
                title: "Authentic Rituals",
                description:
                  "All services are performed according to Vedic traditions",
              },
              {
                title: "100% Secure",
                description:
                  "Your data and transactions are protected with bank-level security",
              },
              {
                title: "24/7 Support",
                description:
                  "Dedicated customer support to help you anytime, anywhere",
              },
              {
                title: "Affordable Pricing",
                description:
                  "Accessible services at transparent, reasonable prices",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-spiritual-brown text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Spiritual{" "}
            <span className="text-spiritual-gold">Journey Today</span>
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the divine with our comprehensive spiritual services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-spiritual-gold text-spiritual-brown px-8 py-3 rounded-lg font-semibold hover:bg-spiritual-gold-light transition-colors">
              Download App
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
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Puja Booking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Astrology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Community
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
