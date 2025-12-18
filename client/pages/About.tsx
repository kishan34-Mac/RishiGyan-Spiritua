import Header from "@/components/Header";
import {
  Heart,
  Target,
  Users,
  Zap,
  Globe,
  Award,
  ChevronRight,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Devotion",
      description:
        "We believe in the power of sincere devotion and spiritual growth for everyone",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Authenticity",
      description:
        "We maintain the sanctity and authenticity of ancient spiritual traditions",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description:
        "We foster a global community united by shared spiritual values",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We use modern technology to make spiritual practices accessible to all",
    },
  ];

  const achievements = [
    {
      number: "30M+",
      label: "Devotees Trust Us",
    },
    {
      number: "1000+",
      label: "Temples Connected",
    },
    {
      number: "5000+",
      label: "Devotional Songs",
    },
    {
      number: "100%",
      label: "Secure & Verified",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Our Journey Begins",
      description: "Started with a vision to digitize spiritual experiences",
    },
    {
      year: "2021",
      title: "First 1 Million Users",
      description: "Reached 1 million devotees across India",
    },
    {
      year: "2022",
      title: "Puja Services Launch",
      description: "Connected with 500+ temples for online puja services",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Now serving devotees across 50+ countries worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-spiritual-brown/5 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-spiritual-gold">RishiGyan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We are on a mission to bridge the gap between ancient spiritual
            wisdom and modern technology, making divine experiences accessible
            to millions of devotees worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-spiritual-cream border border-spiritual-gold/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-spiritual-brown mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide every devotee a seamless platform to connect with
                their faith, perform sacred rituals, and seek spiritual guidance
                without geographical or logistical barriers. We believe in
                empowering millions to experience divine grace on their own
                terms.
              </p>
            </div>

            <div className="bg-spiritual-gold/10 border border-spiritual-gold/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-spiritual-brown mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become the world's most trusted spiritual companion,
                fostering a global community where ancient wisdom meets modern
                innovation. We envision a world where every person has access to
                authentic spiritual practices and divine blessings, regardless
                of their location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-spiritual-brown">Core Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-spiritual-gold/10 rounded-lg flex items-center justify-center text-spiritual-gold mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-spiritual-brown text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            By The <span className="text-spiritual-gold">Numbers</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-spiritual-gold mb-2">
                  {achievement.number}
                </p>
                <p className="text-lg text-gray-200">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-spiritual-brown">Journey</span>
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-spiritual-gold text-white flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-16 bg-spiritual-gold/30 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-semibold text-spiritual-gold mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-spiritual-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-spiritual-gold">RishiGyan</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Trusted & Verified",
                description:
                  "Verified temples and authentic spiritual services backed by traditions",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Globally Accessible",
                description:
                  "Connect with sacred temples and spiritual services from anywhere",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Truly Spiritual",
                description:
                  "Maintain authenticity of traditions while embracing modern accessibility",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-spiritual-gold/20 hover:border-spiritual-gold/50 transition-all"
              >
                <div className="w-12 h-12 bg-spiritual-gold/10 rounded-lg flex items-center justify-center text-spiritual-gold mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-spiritual-brown text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Spiritual{" "}
            <span className="text-spiritual-gold">Community</span>
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Become part of millions of devotees experiencing divine grace and
            spiritual fulfillment through RishiGyan.
          </p>
          <button className="bg-spiritual-gold text-spiritual-brown px-8 py-3 rounded-lg font-semibold hover:bg-spiritual-gold-light transition-colors inline-flex items-center gap-2">
            Get Started <ChevronRight className="w-5 h-5" />
          </button>
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
