import React from 'react'
import { ChevronDown, Star } from 'lucide-react'

// Add this new data for recommendations
const recommendedWithPurchase = [
  {
    title: "Mastering Self-Confidence: A Comprehensive Guide",
    author: 'Confidence Coach',
    rating: 4.9,
    reviews: 128,
    price: '$19',
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  }
];

const authorTopPicks = [
  {
    title: "Mindfulness Meditation for Beginners",
    author: 'Mindfulness Guru',
    rating: 5.0,
    reviews: 1024,
    price: '$29',
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  }
];

export default function Component() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm">
            Continue shopping
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <img
                  src="https://picsum.photos/id/3/300/300"
                  alt="Product"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-grow">
                  <h2 className="font-bold text-lg">How to Improve Your Looks</h2>
                  <p className="text-gray-600">Mark Baker</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">Qty: 1</span>
                    <div>
                      <button className="text-blue-600 text-sm mr-2">Configure</button>
                      <button className="text-blue-600 text-sm">Remove</button>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <span className="font-bold">US$0</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-bold">US$0</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>US$0</span>
              </div>
              <div className="mt-4 flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">Give as a gift</span>
                </label>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                    defaultValue="akshaychugh995@gmail.com"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <div className="h-5 w-5 bg-pink-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="tip" className="block text-sm font-medium text-gray-700 mb-1">
                  Add a tip
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    id="tip"
                    className="w-full border border-gray-300 rounded-md py-2 pl-8 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white rounded-md py-2 font-semibold hover:bg-gray-800 transition-colors"
              >
                Get
              </button>
            </form>
          </div>
        </div>

        {/* New section for recommendations */}
        <section className="mt-12">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold mr-4">I highly recommended purchasing along with -</h2>
            <div className="bg-gradient-to-r from-gumroad-pink-500 to-gumroad-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md transform -rotate-1">
              <span className="text-white">Recommended</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendedWithPurchase.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-grow">
                  <h3 className="font-bold text-base mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center mb-2">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3C/svg%3E"
                      alt="Author"
                      className="w-5 h-5 rounded-full mr-2"
                    />
                    <p className="text-gray-600 text-sm">{product.author}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="w-16 h-6 bg-gumroad-pink-500 text-white text-xs font-semibold flex items-center justify-center rounded-sm relative">
                    <div className="absolute -right-2 top-0 bottom-0 w-2 overflow-hidden">
                      <div className="w-3 h-3 bg-gumroad-pink-500 rotate-45 transform origin-top-left"></div>
                    </div>
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold mr-4">My top find from Gumroad!</h2>
            <div className="bg-gradient-to-r from-gumroad-blue-600 to-gumroad-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md transform -rotate-2">
              <span className="text-white">Top Pick</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authorTopPicks.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-grow">
                  <h3 className="font-bold text-base mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center mb-2">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3C/svg%3E"
                      alt="Author"
                      className="w-5 h-5 rounded-full mr-2"
                    />
                    <p className="text-gray-600 text-sm">{product.author}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="w-16 h-6 bg-gumroad-pink-500 text-white text-xs font-semibold flex items-center justify-center rounded-sm relative">
                    <div className="absolute -right-2 top-0 bottom-0 w-2 overflow-hidden">
                      <div className="w-3 h-3 bg-gumroad-pink-500 rotate-45 transform origin-top-left"></div>
                    </div>
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          {/* Add this line */}
          <div className="md:w-1/2">
            <hr className="border-t-2 border-dotted border-gray-400 mb-8" />
          </div>
          
          <h2 className="text-xl font-bold mb-4">Customers who bought this item also bought</h2>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Guru Anaerobic's Bookshelf: 9 FREE Guides To Improve Your Life & Health",
                  author: 'Mark Baker',
                  rating: 5.0,
                  reviews: 62,
                  price: '$0+',
                  image: "https://picsum.photos/id/4/300/200",
                },
                {
                  title: 'Six-Pack at 60',
                  author: 'Mark Baker',
                  rating: 4.9,
                  reviews: 41,
                  price: '$0+',
                  image: "https://picsum.photos/id/5/300/200",
                },
                {
                  title: 'Run A Faster Mile',
                  author: 'Mark Baker',
                  rating: 4.8,
                  reviews: 20,
                  price: '$0+',
                  image: "https://picsum.photos/id/6/300/200",
                },
                {
                  title: "Young Man's Simple Guide to Super-Health",
                  author: 'Mark Baker',
                  rating: 4.9,
                  reviews: 12,
                  price: '$0+',
                  image: "https://picsum.photos/id/7/300/200",
                },
                {
                  title: 'Physical Fitness & Longevity Tests',
                  author: 'Mark Baker',
                  rating: 5.0,
                  reviews: 16,
                  price: '$0+',
                  image: "https://picsum.photos/id/8/300/200",
                },
                {
                  title: 'Escaping Entrapment',
                  author: 'Mark Baker',
                  rating: 4.9,
                  reviews: 29,
                  price: '$0+',
                  image: "https://picsum.photos/id/9/300/200",
                },
              ].map((product, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 flex-grow">
                    <h3 className="font-bold text-base mb-2 line-clamp-3">{product.title}</h3>
                    <div className="flex items-center mb-2">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3C/svg%3E"
                        alt="Author"
                        className="w-5 h-5 rounded-full mr-2"
                      />
                      <p className="text-gray-600 text-sm">{product.author}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="flex mr-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="w-12 h-6 bg-gumroad-pink-500 text-white text-xs font-semibold flex items-center justify-center rounded-sm relative">
                      <div className="absolute -right-2 top-0 bottom-0 w-2 overflow-hidden">
                        <div className="w-3 h-3 bg-gumroad-pink-500 rotate-45 transform origin-top-left"></div>
                      </div>
                      {product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}