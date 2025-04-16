export interface HotelCardProps {
    id: number;
    name: string;
    location: string;
    image: string;
    rating: number;
    price: string;
    description: string;
    onClick?: (id: string) => void;
  }