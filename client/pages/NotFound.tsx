import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6 inline-block">
            <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-spiritual-brown to-spiritual-gold bg-clip-text">
              404
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            The page you're looking for doesn't exist. Let's get you back on
            track with your spiritual journey.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-spiritual-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-spiritual-gold-light transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
