// src/app/page.tsx
import Link from 'next/link'; // Import Link for navigation
import Card from './components/Card'; // Import the Card component

export default function Home() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Amazing Website!</h1>
        <p className="text-lg mb-6">Your journey towards excellence begins here.</p>
        {/* Get Started Button */}
        <Link href="/signup.tsx"> {/* Link to the signup page */}
          <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200">
            Get Started
          </button>
        </Link>
      </header>

      {/* Navigation Bar */}
      <nav className="flex w-full bg-black h-20 items-center shadow-lg px-6 mt-6">
        <div className="bg-purple-700 h-10 w-40 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold text-lg">Brand</span>
        </div>
        <div className="flex justify-end w-full items-center space-x-6 ml-auto">
          <Link href="/" className="bg-green-700 h-10 w-32 rounded-lg hover:bg-green-600 transition duration-200 flex items-center justify-center">
            <span className="text-white font-medium">Home</span>
          </Link>
          <Link href="/about" className="bg-yellow-700 h-10 w-32 rounded-lg hover:bg-yellow-600 transition duration-200 flex items-center justify-center">
            <span className="text-white font-medium">About</span>
          </Link>
          <Link href="/contact" className="bg-orange-400 h-10 w-32 rounded-lg hover:bg-orange-300 transition duration-200 flex items-center justify-center">
            <span className="text-white font-medium">Contact</span>
          </Link>
        </div>
      </nav>

      {/* Cards Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Card 1" description="Description for Card 1" imageUrl="https://via.placeholder.com/150" />
          <Card title="Card 2" description="Description for Card 2" imageUrl="https://via.placeholder.com/150" />
          <Card title="Card 3" description="Description for Card 3" imageUrl="https://via.placeholder.com/150" />
          <Card title="Card 4" description="Description for Card 4" imageUrl="https://via.placeholder.com/150" />
          <Card title="Card 5" description="Description for Card 5" imageUrl="https://via.placeholder.com/150" />
        </div>
      </section>
    </div>
  );
}

