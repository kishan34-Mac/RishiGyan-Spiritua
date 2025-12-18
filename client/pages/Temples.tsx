import Header from "@/components/Header";
import { useState } from "react";
import {
  MapPin,
  Clock,
  Star,
  Phone,
  Search,
  Filter,
  ChevronRight,
} from "lucide-react";

export default function Temples() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDeity, setSelectedDeity] = useState("All");

  const temples = [
    {
      id: 1,
      name: "Varanasi Kashi Vishwanath Temple",
      deity: "Lord Shiva",
      location: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      rating: 4.8,
      reviews: 1240,
      openingHours: "4:00 AM - 11:00 PM",
      phone: "+91 XXXXX XXXXX",
      image:
        "https://images.unsplash.com/photo-1599092333196-f7941cd2a8d0?w=400&h=300&fit=crop",
      description: "One of the most sacred temples dedicated to Lord Shiva",
      services: ["Puja", "Chadhava", "Astrology"],
    },
    {
      id: 2,
      name: "Mathura Krishna Janmasthan",
      deity: "Lord Krishna",
      location: "Mathura, Uttar Pradesh",
      state: "Uttar Pradesh",
      rating: 4.7,
      reviews: 980,
      openingHours: "5:00 AM - 12:00 AM",
      phone: "+91 XXXXX XXXXX",
      image:
        "https://images.unsplash.com/photo-1573190113571-f6e9c1d10df5?w=400&h=300&fit=crop",
      description: "Sacred birthplace of Lord Krishna",
      services: ["Puja", "Chadhava"],
    },
    {
      id: 3,
      name: "Tirupati Venkateswara Temple",
      deity: "Lord Venkateswara",
      location: "Tirupati, Andhra Pradesh",
      state: "Andhra Pradesh",
      rating: 4.9,
      reviews: 2100,
      openingHours: "3:00 AM - 10:00 PM",
      phone: "+91 XXXXX XXXXX",
      image:
        "https://images.unsplash.com/photo-1504681869696-d977212a34f3?w=400&h=300&fit=crop",
      description: "One of the most visited temples in the world",
      services: ["Puja", "Chadhava", "Astrology"],
    },
    {
      id: 4,
      name: "Meenakshi Temple Madurai",
      deity: "Goddess Meenakshi",
      location: "Madurai, Tamil Nadu",
      state: "Tamil Nadu",
      rating: 4.8,
      reviews: 1650,
      openingHours: "4:00 AM - 1:00 PM, 4:00 PM - 9:30 PM",
      phone: "+91 XXXXX XXXXX",
      image:
        "https://images.unsplash.com/photo-1578894949749-18be63e33fad?w=400&h=300&fit=crop",
      description: "Ancient temple dedicated to Goddess Meenakshi",
      services: ["Puja", "Chadhava"],
    },
    {
      id: 5,
      name: "Kedarnath Temple",
      deity: "Lord Shiva",
      location: "Kedarnath, Uttarakhand",
      state: "Uttarakhand",
      rating: 4.6,
      reviews: 890,
      openingHours: "6:00 AM - 9:00 PM (Seasonal)",
      phone: "+91 XXXXX XXXXX",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "High altitude temple in the Himalayas",
      services: ["Puja", "Astrology"],
    },
    {
      id: 6,
      name: "Jagannath Temple Puri",
      deity: "Lord Jagannath",
      location: "Puri, Odisha",
      state: "Odisha",
      rating: 4.7,
      reviews: 1420,
      openingHours: "5:00 AM - 10:00 PM",
      phone: "+91 XXXXX XXXXX",
      image:
        "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=400&h=300&fit=crop",
      description: "Ancient temple of Lord Jagannath with famous Ratha Yatra",
      services: ["Puja", "Chadhava", "Astrology"],
    },
    {
      id: 7,
      name: "Amritsar Golden Temple",
      deity: "Sikh Shrine",
      location: "Amritsar, Punjab",
      state: "Punjab",
      rating: 4.9,
      reviews: 1950,
      openingHours: "4:00 AM - 11:30 PM",
      phone: "+91 XXXXX XXXXX",
      image:
        "https://images.unsplash.com/photo-1597422244036-59cebba54d0e?w=400&h=300&fit=crop",
      description: "Most sacred place of worship for Sikhs",
      services: ["Langar", "Prayers"],
    },
    {
      id: 8,
      name: "Ayodhya Ram Mandir",
      deity: "Lord Rama",
      location: "Ayodhya, Uttar Pradesh",
      state: "Uttar Pradesh",
      rating: 4.8,
      reviews: 1120,
      openingHours: "4:30 AM - 12:00 PM, 1:00 PM - 9:00 PM",
      phone: "+91 XXXXX XXXXX",
      image:
        "https://images.unsplash.com/photo-1599092333196-f7941cd2a8d0?w=400&h=300&fit=crop",
      description: "Recently inaugurated grand temple of Lord Rama",
      services: ["Puja", "Chadhava"],
    },
    {
      id: 9,
      name: "Vaishno Devi Temple",
      deity: "Goddess Vaishno Devi",
      location: "Katra, Jammu & Kashmir",
      state: "Jammu & Kashmir",
      rating: 4.7,
      reviews: 1300,
      openingHours: "5:00 AM - 8:00 PM",
      phone: "+91 XXXXX XXXXX",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Cave temple in the mountains with holy shrine",
      services: ["Puja", "Astrology"],
    },
  ];

  const deities = ["All", "Lord Shiva", "Lord Krishna", "Lord Rama", "Goddess"];

  const filteredTemples = temples.filter((temple) => {
    const matchesSearch =
      temple.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      temple.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      temple.deity.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDeity =
      selectedDeity === "All" || temple.deity.includes(selectedDeity);

    return matchesSearch && matchesDeity;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-spiritual-brown/5 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Sacred <span className="text-spiritual-gold">Temples</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with 1000+ verified temples across India and book your
            spiritual services
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search temples by name, location, or deity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-spiritual-gold"
              />
            </div>
          </div>

          {/* Filter by Deity */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-spiritual-gold" />
              <span className="font-semibold text-foreground">
                Filter by Deity:
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {deities.map((deity) => (
                <button
                  key={deity}
                  onClick={() => setSelectedDeity(deity)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedDeity === deity
                      ? "bg-spiritual-gold text-white"
                      : "bg-white border border-border text-foreground hover:border-spiritual-gold"
                  }`}
                >
                  {deity}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-sm text-muted-foreground">
            Found{" "}
            <span className="font-semibold text-foreground">
              {filteredTemples.length}
            </span>{" "}
            temples
          </div>
        </div>
      </section>

      {/* Temples Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTemples.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemples.map((temple) => (
                <div
                  key={temple.id}
                  className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-spiritual-gold/50 transition-all group"
                >
                  {/* Temple Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={temple.image}
                      alt={temple.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-spiritual-gold text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      {temple.rating}
                    </div>
                  </div>

                  {/* Temple Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {temple.name}
                    </h3>

                    <p className="text-spiritual-gold font-semibold text-sm mb-3">
                      {temple.deity}
                    </p>

                    <p className="text-muted-foreground text-sm mb-4">
                      {temple.description}
                    </p>

                    {/* Location */}
                    <div className="flex items-start gap-2 mb-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-spiritual-gold" />
                      <span>{temple.location}</span>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-start gap-2 mb-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-spiritual-gold" />
                      <span>{temple.openingHours}</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-2 mb-4 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 text-spiritual-gold" />
                      <span>{temple.phone}</span>
                    </div>

                    {/* Services */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-foreground mb-2">
                        Services Available:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {temple.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="bg-spiritual-cream text-spiritual-brown text-xs px-2 py-1 rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-spiritual-gold text-white py-2 rounded-lg font-semibold hover:bg-spiritual-gold-light transition-colors inline-flex items-center justify-center gap-2 group">
                      Book Service
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No temples found matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDeity("All");
                }}
                className="mt-4 text-spiritual-gold hover:text-spiritual-gold-light font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-spiritual-brown text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-spiritual-gold mb-2">
                1000+
              </p>
              <p className="text-lg text-gray-200">Verified Temples</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-spiritual-gold mb-2">
                50+
              </p>
              <p className="text-lg text-gray-200">States & UTs</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-spiritual-gold mb-2">
                30M+
              </p>
              <p className="text-lg text-gray-200">Devotees Served</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-spiritual-gold mb-2">
                4.8★
              </p>
              <p className="text-lg text-gray-200">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-spiritual-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Find Your Ideal <span className="text-spiritual-brown">Temple</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Browse, compare, and book services at India's most sacred temples
          </p>
          <button className="bg-spiritual-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-spiritual-gold-light transition-colors inline-flex items-center gap-2">
            Explore Temples <ChevronRight className="w-5 h-5" />
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
