// 'use client'

// import { HotelCard } from '../HotelCard';
// import type { HotelCardProps } from '../HotelCard';

// interface HotelListProps {
//   hotels: Omit<HotelCardProps, 'onClick'>[];
// }

// export function HotelList({ hotels }: HotelListProps) {
//   const handleHotelClick = (id: string) => {
//     console.log(`Clicked hotel ${id}`);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {hotels.map((hotel) => (
//         <HotelCard
//           key={hotel.id}
//           {...hotel}
//           onClick={handleHotelClick}
//         />
//       ))}
//     </div>
//   );
// }