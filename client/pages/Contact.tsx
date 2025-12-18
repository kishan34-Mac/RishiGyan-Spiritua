import Header from "@/components/Header";
import {
  User,
  FileText,
  Flame,
  Star,
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
  LogIn,
} from "lucide-react";

export default function Contact() {
  const accountOptions = [
    {
      icon: <User className="w-6 h-6" />,
      title: "My Profile",
      description: "View and manage your profile information",
      path: "#",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "My Puja Bookings",
      description: "Track your puja service bookings",
      path: "#",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "My Chadhava Bookings",
      description: "View your chadhava (offering) history",
      path: "#",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Book a Puja",
      description: "Book a new puja service",
      isNew: true,
      path: "#",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Book a Chadhava",
      description: "Make a new offering",
      isNew: true,
      path: "#",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Astro Tools",
      description: "Access astrology and horoscope tools",
      path: "#",
    },
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      contact: "080-71174417",
      hours: "10:30 AM - 7:30 PM",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      contact: "pujaseva@appsforbharat.com",
      hours: "Response within 24 hours",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Us",
      contact: "+91 XXXXX XXXXX",
      hours: "10:30 AM - 7:30 PM",
      color: "bg-green-100 text-green-600",
    },
  ];

  const faqs = [
    {
      question: "How do I book a puja?",
      answer:
        "You can book a puja through the 'Book a Puja' section in your account. Select your temple, deity, and preferred date. Payment is processed securely and you'll receive a confirmation immediately.",
    },
    {
      question: "What is Chadhava Seva?",
      answer:
        "Chadhava Seva is a regular offering program where you can contribute to your favorite temples. It's a way to express devotion and support the temple's daily operations.",
    },
    {
      question: "How long does it take to receive the puja recording?",
      answer:
        "Puja recordings are typically sent within 24-48 hours after the service is completed. You'll receive a WhatsApp notification with the video link.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use bank-level encryption and secure payment gateways. Your payment and personal information are fully protected.",
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer:
        "Yes, you can cancel or reschedule up to 24 hours before your scheduled puja. Refunds are processed according to our refund policy.",
    },
    {
      question: "Do you offer services internationally?",
      answer:
        "Yes, we serve devotees from across the world. Our services are available for anyone regardless of their location.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-spiritual-brown/5 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-spiritual-gold">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you with any questions or concerns. Connect with
            us through multiple channels.
          </p>
        </div>
      </section>

      {/* Login Banner */}
      <section className="py-8 bg-spiritual-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-spiritual-brown font-semibold mb-2">
                To check all available pujas & offers:
              </p>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
              <LogIn className="w-5 h-5" />
              Login / Create Account
            </button>
          </div>
        </div>
      </section>

      {/* Account Details Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Account Details
          </h2>

          <div className="space-y-3">
            {accountOptions.map((option, index) => (
              <a
                key={index}
                href={option.path}
                className="flex items-center justify-between p-4 bg-gray-50 border border-border rounded-lg hover:bg-gray-100 hover:border-spiritual-gold/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-spiritual-gold">{option.icon}</div>
                  <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      {option.title}
                      {option.isNew && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">
                          New
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-spiritual-gold transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Help & Support Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            Help & Support for Puja Booking
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className={`${channel.color} rounded-lg p-6 border-2 border-current`}
              >
                <div className="mb-4">{channel.icon}</div>
                <h3 className="font-bold text-lg mb-2">{channel.title}</h3>
                <p className="font-semibold mb-1">{channel.contact}</p>
                <p className="text-sm opacity-75">{channel.hours}</p>
              </div>
            ))}
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Email us
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Whatsapp us
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked{" "}
            <span className="text-spiritual-brown">Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-spiritual-cream border border-spiritual-gold/20 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
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
            Still have <span className="text-spiritual-gold">questions?</span>
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Our support team is available 24/7 to assist you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-spiritual-gold text-spiritual-brown px-8 py-3 rounded-lg font-semibold hover:bg-spiritual-gold-light transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Browse FAQs
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
                    href="/temples"
                    className="hover:text-primary transition-colors"
                  >
                    Temples
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
