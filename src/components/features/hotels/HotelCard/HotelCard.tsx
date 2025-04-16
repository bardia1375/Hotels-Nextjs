import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/common/Card';
import { Typography } from '@/components/common/Typography';
import { StarIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import type { HotelCardProps } from './HotelCard.types';

export const HotelCard = memo(function HotelCard({
  id,
  name,
  image,
  price,
  rating,
  location,
  description,
}: HotelCardProps) {
  return (
    <Card 
      variant="hover" 
      padding="none" 
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
          <StarIcon className="h-4 w-4 text-yellow-400" />
          <Typography variant="caption" weight="semibold">
            {rating}
          </Typography>
        </div>
      </div>
      
      <div className="p-5 space-y-4">
        <Typography variant="h4" weight="semibold">
          {name}
        </Typography>
        
        <div className="flex items-center">
          <MapPinIcon className="h-4 w-4 mr-1.5 text-gray-600 dark:text-gray-300" />
          <Typography variant="body2" color="secondary">
            {location}
          </Typography>
        </div>
        
        <Typography variant="body2" color="secondary" className="line-clamp-2">
          {description}
        </Typography>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
          <div>
            <Typography variant="subtitle2" weight="bold" color="primary">
              {price}
            </Typography>
            <Typography variant="caption" color="secondary">
              per night
            </Typography>
          </div>
          
          <Link
            href={`/hotels/${id}`}
            className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
          >
            View Details
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  );
});