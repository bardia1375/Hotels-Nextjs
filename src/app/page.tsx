import { HotelCard } from '@/components/features/hotels/HotelCard';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import { Typography } from '@/components/common/Typography';
import Link from 'next/link';
import Button from '@/components/common/Button/Button';

const FEATURED_HOTELS = [
  {
    id: 1,
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    image: "/pexels-pixabay-258154.jpg",
    rating: 5,
    price: "From $1,500 per night",
    description: "Luxury 7-star hotel with iconic sail shape"
  },
  {
    id: 2,
    name: "The Plaza",
    location: "New York, USA",
    image: "/pexels-vincent-gerbouin-445991-1179156.jpg",
    rating: 5,
    price: "From $895 per night",
    description: "Historic luxury hotel on Fifth Avenue"
  },
  {
    id: 3,
    name: "Ritz Paris",
    location: "Paris, France",
    image: "/pexels-pixabay-261102.jpg",
    rating: 5,
    price: "From $1,200 per night",
    description: "Legendary luxury in the heart of Paris"
  }
];

export default function Home() {
  const handleHotelClick = (id: string) => {
    console.log(`Clicked hotel ${id}`);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <HeroSection />

      {/* Famous Hotels Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <Typography 
              variant="h2" 
              weight="bold"
            >
              World's Famous Hotels
            </Typography>
            <Link href="/hotels">
              <Button variant="outline">
                View All Hotels
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_HOTELS.map((hotel) => (
              <HotelCard
                key={hotel.id}
                {...hotel}
                onClick={handleHotelClick}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
