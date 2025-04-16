'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Typography } from '@/components/common/Typography';
import Button from '@/components/common/Button/Button';
import { StarIcon, WifiIcon, TvIcon, KeyIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DUMMY_HOTEL = {
  id: '1',
  name: 'Burj Al Arab',
  location: 'Dubai, UAE',
  images: [
    '/pexels-pixabay-258154.jpg',
    '/pexels-vincent-gerbouin-445991-1179156.jpg',
    '/pexels-pixabay-261102.jpg',
    '/pexels-apasaric-1285625.jpg',
  ],
  rating: 5,
  description: 'Experience unparalleled luxury in our iconic sail-shaped hotel. Every detail has been carefully crafted to provide an unforgettable stay.',
  amenities: [
    { icon: WifiIcon, name: 'Free High-Speed WiFi' },
    { icon: TvIcon, name: 'Smart TV with Streaming' },
    { icon: KeyIcon, name: '24/7 Room Service' },
    { icon: HomeIcon, name: 'Spa & Wellness Center' },
  ],
  rooms: [
    {
      id: 'deluxe',
      name: 'Deluxe Suite',
      price: 1500,
      size: '55m²',
      occupancy: '2 Adults + 1 Child',
      benefits: ['Ocean View', 'King Size Bed', 'Private Balcony'],
      image: '/pexels-pixabay-258154.jpg',
    },
    {
      id: 'royal',
      name: 'Royal Suite',
      price: 2500,
      size: '85m²',
      occupancy: '3 Adults + 2 Children',
      benefits: ['Panoramic View', 'Private Butler', 'Jacuzzi'],
      image: '/pexels-vincent-gerbouin-445991-1179156.jpg',
    },
  ],
};

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleBookRoom = (roomId: string) => {
    setSelectedRoom(roomId);
    // Handle booking logic here
    console.log(`Booking room ${roomId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Image Slider */}
      <div className="relative h-[60vh] w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full w-full"
        >
          {DUMMY_HOTEL.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  alt={`${DUMMY_HOTEL.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
          <Typography variant="h1" className="mb-2" color='white'>
            {DUMMY_HOTEL.name}
          </Typography>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-6 w-6 ${
                    i < DUMMY_HOTEL.rating ? 'text-yellow-400' : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            <Typography variant="body1" className="ml-2">
              {DUMMY_HOTEL.location}
            </Typography>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="mb-12">
          <Typography variant="h2" className="mb-4">
            About the Hotel
          </Typography>
          <Typography variant="body1" className="text-gray-600 dark:text-gray-300">
            {DUMMY_HOTEL.description}
          </Typography>
        </div>

        {/* Amenities */}
        <div className="mb-12">
          <Typography variant="h2" className="mb-6">
            Hotel Amenities
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {DUMMY_HOTEL.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
              >
                <amenity.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                <Typography variant="body2" className="text-center">
                  {amenity.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Rooms */}
        <div>
          <Typography variant="h2" className="mb-6">
            Available Rooms
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DUMMY_HOTEL.rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-48">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Typography variant="h3" className="mb-2">
                        {room.name}
                      </Typography>
                      <Typography variant="body2" className="text-gray-600 dark:text-gray-300">
                        {room.size} • {room.occupancy}
                      </Typography>
                    </div>
                    <Typography variant="h3" className="text-blue-600 dark:text-blue-400">
                      ${room.price}
                      <span className="text-sm text-gray-500">/night</span>
                    </Typography>
                  </div>

                  <div className="mb-6">
                    <Typography variant="body2" className="font-semibold mb-2">
                      Room Benefits:
                    </Typography>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      {room.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => handleBookRoom(room.id)}
                    className="w-full"
                    variant={selectedRoom === room.id ? 'outline' : 'solid'}
                  >
                    {selectedRoom === room.id ? 'Selected' : 'Book Now'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}