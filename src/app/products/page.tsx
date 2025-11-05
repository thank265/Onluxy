import Image from 'next/image'
import { Heart } from 'lucide-react'

export default function ProductsPage() {
  return (
    <main className="min-h-screen px-4 md:px-20 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif mb-4">Choose the best everyday wear</h1>
        <p className="text-gray-600">
          Discover a wide range of women's clothing categories tailored to suit your fashion needs.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex justify-center gap-8 mb-16">
        {[
          { name: 'Tops', active: true },
          { name: 'Dress', active: false },
          { name: 'Bottoms', active: false },
          { name: 'Wear', active: false },
        ].map((category) => (
          <button
            key={category.name}
            className={`px-8 py-2.5 rounded-full transition-colors ${
              category.active
                ? 'bg-[#8B6E4F] text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: 'Wrap dress',
            price: 76,
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
          },
          {
            name: 'Blouse',
            price: 45,
            image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254'
          },
          {
            name: 'Denim jacket',
            price: 57,
            image: 'https://images.unsplash.com/photo-1523205771623-e0898e03828f'
          },
          {
            name: 'Hoodie',
            price: 80,
            image: 'https://images.unsplash.com/photo-1556139902-7367723b7e9e'
          },
          {
            name: 'Polo dress',
            price: 56,
            image: 'https://images.unsplash.com/photo-1583396060233-3d13e9d7bc06'
          },
          {
            name: 'Long shirt',
            price: 42,
            image: 'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1'
          },
        ].map((product) => (
          <div key={product.name} className="relative group">
            <div className="relative h-[500px] rounded-lg overflow-hidden bg-[#E5D3C8]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <button 
                className="absolute right-4 top-4 p-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Add to favorites"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-xl">${product.price}</p>
              </div>
              <button className="px-6 py-2.5 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                Shop now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-16">
        <button className="px-10 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
          See all
        </button>
      </div>
    </main>
  )
}