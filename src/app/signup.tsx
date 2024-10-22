// src/app/signup.tsx
export default function Signup() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border border-gray-300 p-2 w-full rounded-lg"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-300 p-2 w-full rounded-lg"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-300 p-2 w-full rounded-lg"
                type="password"
                id="password"
                required
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition duration-200"
              type="submit"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  
  