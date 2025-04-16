'use client'

import { useState, useEffect } from 'react';
import { HotelCard } from '@/components/features/hotels/HotelCard';
import { HotelFilters } from '@/components/features/hotels/HotelFilters/HotelFilters';
import { HotelCardSkeleton } from '@/components/features/hotels/HotelCard/HotelCardSkeleton';
import { Typography } from '@/components/common/Typography';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import Footer from '@/components/layout/Footer';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

const HOTELS_PER_PAGE = 9;

// Sample hotel data with 30 entries
const ALL_HOTELS = Array(30).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Luxury Hotel ${index + 1}`,
  location: "Dubai, UAE",
  image: [
    "/pexels-pixabay-258154.jpg",
    "/pexels-vincent-gerbouin-445991-1179156.jpg",
    "/pexels-pixabay-261102.jpg"
  ][index % 3],
  rating: 4 + Math.random(),
  price: Math.floor(Math.random() * 1000 + 500),
  priceDisplay: `From $${Math.floor(Math.random() * 1000 + 500)} per night`,
  amenities: [
    'Free WiFi',
    'Pool',
    'Spa',
    'Gym',
    'Restaurant',
    'Room Service',
    'Beach Access',
    'Airport Shuttle'
  ].sort(() => 0.5 - Math.random()).slice(0, 4),
  description: "Experience luxury and comfort in our premium accommodation"
}));

interface FilterState {
  priceRange: [number, number];
  rating: number;
  amenities: string[];
}

export default function HotelsPage() {
  const [filteredHotels, setFilteredHotels] = useState(ALL_HOTELS);
  const [displayedHotels, setDisplayedHotels] = useState<typeof ALL_HOTELS>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });

  const handleFilterChange = async (filters: FilterState) => {
    setFilterLoading(true);
    
    // Add artificial delay for loading state
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const filtered = ALL_HOTELS.filter(hotel => {
      const meetsRating = hotel.rating >= filters.rating;
      const meetsPrice = hotel.price >= filters.priceRange[0] && hotel.price <= filters.priceRange[1];
      const meetsAmenities = filters.amenities.length === 0 || 
        filters.amenities.every(amenity => hotel.amenities.includes(amenity));
      
      return meetsRating && meetsPrice && meetsAmenities;
    });
    
    setFilteredHotels(filtered);
    setDisplayedHotels(filtered.slice(0, HOTELS_PER_PAGE));
    setPage(1);
    setHasMore(filtered.length > HOTELS_PER_PAGE);
    setFilterLoading(false);
  };

  const loadMore = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const start = page * HOTELS_PER_PAGE;
    const end = start + HOTELS_PER_PAGE;
    const newHotels = filteredHotels.slice(start, end);
    
    setDisplayedHotels(prev => [...prev, ...newHotels]);
    setHasMore(end < filteredHotels.length);
    setPage(prev => prev + 1);
    setLoading(false);
  };

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  // Initial load
  useEffect(() => {
    setDisplayedHotels(ALL_HOTELS.slice(0, HOTELS_PER_PAGE));
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background with gradient overlay */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: 'url("/pexels-pixabay-258154.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="fixed bottom-4 right-4 z-[60] md:hidden bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>

        <div className="container mx-auto px-4 py-8 flex-grow">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block md:w-80 flex-shrink-0">
              <div className="sticky top-24 h-[calc(100vh-6rem)]">
                <HotelFilters onFilterChange={handleFilterChange} />
              </div>
            </aside>

            {/* Mobile Full Screen Filter Panel */}
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", damping: 25 }}
                  className="fixed inset-0 z-[70] md:hidden bg-gray-900/95"
                >
                  <HotelFilters 
                    onFilterChange={handleFilterChange}
                    onClose={() => setSidebarOpen(false)}
                    isMobile={true}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-16">
                {filterLoading ? (
                  Array.from({ length: 6 }).map((_, index) => (
                    <HotelCardSkeleton key={index} />
                  ))
                ) : (
                  displayedHotels.map((hotel) => (
                    <HotelCard 
                      key={hotel.id} 
                      {...hotel} 
                      price={hotel.priceDisplay}
                    />
                  ))
                )}
              </div>

              {(loading || hasMore) && !filterLoading && (
                <div ref={ref} className="flex justify-center py-8">
                  <LoadingSpinner />
                </div>
              )}

              {!loading && !hasMore && displayedHotels.length === 0 && (
                <div className="text-center py-8">
                  <Typography variant="h3" className="text-white">
                    No hotels found matching your filters
                  </Typography>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}