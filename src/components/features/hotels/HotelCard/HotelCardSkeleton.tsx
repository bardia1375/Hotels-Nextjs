export function HotelCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="h-56 bg-gray-200 dark:bg-gray-700" />
      
      <div className="p-5 space-y-4">
        {/* Title Skeleton */}
        <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
        
        {/* Location Skeleton */}
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        
        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        
        {/* Price and Button Skeleton */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-1">
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="h-10 w-28 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}