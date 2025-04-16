'use client';

import { useState, useEffect } from 'react';
import { Typography } from '@/components/common/Typography';
import { StarIcon } from '@heroicons/react/24/solid';
import { Switch } from '@headlessui/react';
import Button from '@/components/common/Button/Button';

interface HotelFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

interface FilterState {
  priceRange: [number, number];
  rating: number;
  amenities: string[];
}

const AMENITIES = [
  'Free WiFi',
  'Pool',
  'Spa',
  'Gym',
  'Restaurant',
  'Room Service',
  'Beach Access',
  'Airport Shuttle',
];

export function HotelFilters({ onFilterChange, onClose, isMobile = false }: HotelFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 2000],
    rating: 0,
    amenities: [],
  });
  
  const [tempFilters, setTempFilters] = useState<FilterState>(filters);

  useEffect(() => {
    if (!isMobile) {
      // In desktop mode, apply filters immediately
      onFilterChange(tempFilters);
    }
  }, [tempFilters, isMobile]);

  const handlePriceChange = (value: [number, number]) => {
    setTempFilters(prev => ({
      ...prev,
      priceRange: value
    }));
    
    if (!isMobile) {
      setFilters(prev => ({
        ...prev,
        priceRange: value
      }));
    }
  };

  const handleRatingChange = (rating: number) => {
    setTempFilters(prev => ({
      ...prev,
      rating
    }));
    
    if (!isMobile) {
      setFilters(prev => ({
        ...prev,
        rating
      }));
    }
  };

  const handleAmenityToggle = (amenity: string) => {
    setTempFilters(prev => {
      const newAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity];
      
      return { ...prev, amenities: newAmenities };
    });
    
    if (!isMobile) {
      setFilters(prev => {
        const newAmenities = prev.amenities.includes(amenity)
          ? prev.amenities.filter(a => a !== amenity)
          : [...prev.amenities, amenity];
        return { ...prev, amenities: newAmenities };
      });
    }
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters);
    onFilterChange(tempFilters);
    if (onClose) {
      onClose();
    }
  };

  const handleResetFilters = () => {
    const initialFilters: FilterState = {
      priceRange: [0, 2000],
      rating: 0,
      amenities: [],
    };
    setTempFilters(initialFilters);
    setFilters(initialFilters);
    onFilterChange(initialFilters);
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 space-y-8 ${
      isMobile ? 'h-full flex flex-col' : ''
    }`}>
      {isMobile && (
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h2" className="text-white">
            Filters
          </Typography>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <div className={`${isMobile ? 'flex-grow overflow-y-auto' : ''}`}>
        {/* Price Range Filter */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4 text-white">
            Price Range
          </Typography>
          <div className="space-y-4">
            <input
              type="range"
              min={0}
              max={2000}
              value={tempFilters.priceRange[1]}
              onChange={(e) => handlePriceChange([tempFilters.priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer dark:bg-blue-700"
            />
            <div className="flex justify-between">
              <span className="text-white/80">
                ${tempFilters.priceRange[0]}
              </span>
              <span className="text-white/80">
                ${tempFilters.priceRange[1]}
              </span>
            </div>
          </div>
        </div>

        {/* Star Rating Filter */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4 text-white">
            Star Rating
          </Typography>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRatingChange(star)}
                className={`p-2 rounded-full transition-colors ${
                  tempFilters.rating >= star
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              >
                <StarIcon className="h-6 w-6" />
              </button>
            ))}
          </div>
        </div>

        {/* Amenities Filter */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4 text-white">
            Amenities
          </Typography>
          <div className="space-y-3">
            {AMENITIES.map((amenity) => (
              <div key={amenity} className="flex items-center justify-between">
                <Typography variant="body2" className="text-white/80">{amenity}</Typography>
                <Switch
                  checked={tempFilters.amenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  className={`${
                    tempFilters.amenities.includes(amenity)
                      ? 'bg-blue-600'
                      : 'bg-gray-200 dark:bg-gray-700'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                >
                  <span
                    className={`${
                      tempFilters.amenities.includes(amenity) ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Action Buttons */}
      {isMobile ? (
        <div className="mt-auto space-y-3">
          <Button 
            variant="primary"
            fullWidth
            onClick={handleApplyFilters}
          >
            Apply Filters
          </Button>
          <button
            onClick={handleResetFilters}
            className="w-full py-2 px-4 text-white/80 hover:text-white rounded-lg transition-colors text-sm"
          >
            Reset All
          </button>
        </div>
      ) : (
        <button
          onClick={handleResetFilters}
          className="w-full py-2 px-4 bg-white/10 text-white/80 rounded-lg hover:bg-white/20 hover:text-white transition-colors"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}