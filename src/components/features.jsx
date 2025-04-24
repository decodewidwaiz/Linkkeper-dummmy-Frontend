import React from 'react'

const Features = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold capitalize mb-12">
          We handle just about <span className="text-green-800">everything</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="rounded-2xl h-[250px] shadow-2xl p-8 bg-white flex flex-col justify-center text-center">
            <h3 className="text-xl font-bold mb-2">🔗 Save Any Link</h3>
            <p className="text-gray-600">Capture links from anywhere—webpages, videos, or tweets—with one click.</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl h-[250px] shadow-2xl p-8 bg-white flex flex-col justify-center text-center">
            <h3 className="text-xl font-bold mb-2">📁 Organized Collections</h3>
            <p className="text-gray-600">Group saved links into folders so everything is neat and easy to find.</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl h-[250px] shadow-2xl p-8 bg-white flex flex-col justify-center text-center">
            <h3 className="text-xl font-bold mb-2">🏷️ Custom Tags</h3>
            <p className="text-gray-600">Use tags to label your links and filter content faster than ever.</p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl h-[250px] shadow-2xl p-8 bg-white flex flex-col justify-center text-center">
            <h3 className="text-xl font-bold mb-2">🔍 Fast Search</h3>
            <p className="text-gray-600">Search by title, tag, or URL to instantly find saved content.</p>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl h-[250px] shadow-2xl p-8 bg-white flex flex-col justify-center text-center">
            <h3 className="text-xl font-bold mb-2">📱 Sync Across Devices</h3>
            <p className="text-gray-600">Your links are available everywhere—on mobile, desktop, and tablet.</p>
          </div>

          {/* Card 6 */}
          <div className="rounded-2xl h-[250px] shadow-2xl p-8 bg-white flex flex-col justify-center text-center">
            <h3 className="text-xl font-bold mb-2">🔒 Privacy First</h3>
            <p className="text-gray-600">Your data stays yours. All links are stored securely and privately.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features
