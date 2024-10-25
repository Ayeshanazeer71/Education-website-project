
  export default function NotFound() {
    return (
      <div className="relative p-10 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_1280.jpg"
            alt="background"
            className="w-full h-full object-cover"  
          />
        </div>
        <div className="relative z-10 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg text-center hover:scale-95">
          <h1 className="text-4xl font-extrabold text-white">Page Not Found</h1>
          <p className="mt-4 text-white">
            Oops! The page you're looking for doesn't exist. Please check the URL or return to the homepage.
          </p>
        </div>
      </div>
    );
}
