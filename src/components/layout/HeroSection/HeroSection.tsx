import Image from "next/image";
import Button from "../../common/Button/Button";

export default function HeroSection() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pexels-apasaric-1285625.jpg"
          alt="Hero background"
          fill
          className="object-cover opacity-100 dark:opacity-30"
          priority
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Welcome to Modern Design
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Create stunning experiences with our professional solutions
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </header>
  );
}