// Define the props for the Card component
interface CardProps {
    title: string;        // Title of the card
    description: string;  // Description of the card
    imageUrl: string;     // URL for the image to display on the card
  }
  
  // Create the Card component
  const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
        {/* Card image with a fixed height and rounded corners */}
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-md" />
        
        {/* Card title */}
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        
        {/* Card description */}
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  // Export the Card component to use in other files
  export default Card;
  