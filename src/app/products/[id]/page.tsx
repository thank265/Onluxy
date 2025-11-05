import Image from 'next/image'
import { Heart } from 'lucide-react'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // This would normally come from a database or API
  // Using static data for demo
  const products = {
    'hoodie': {
      name: 'Hoodie',
      price: 80,
      image: 'https://images.unsplash.com/photo-1556139902-7367723b7e9e',
      description: 'Comfortable cotton blend hoodie perfect for casual wear.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      color: 'Brown',
    },
    'polo-dress': {
      name: 'Polo dress',
      price: 56,
      image: 'https://images.unsplash.com/photo-1583396060233-3d13e9d7bc06',
      description: 'Elegant polo dress suitable for both casual and semi-formal occasions.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      color: 'Olive',
    },
    'long-shirt': {
      name: 'Long shirt',
      price: 42,
      image: 'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1',
      description: 'Classic long shirt with a modern fit.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      color: 'Black',
    }
  }

  const product = products[params.id as keyof typeof products]

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden bg-[#E5D3C8]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <button 
              className="absolute right-4 top-4 p-2 rounded-full bg-white hover:bg-gray-50 transition-colors"
              aria-label="Add to favorites"
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-serif mb-4">{product.name}</h1>
              <p className="text-2xl font-medium">${product.price}</p>
            </div>

            <div>
              <h2 className="font-medium mb-4">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div>
              <h2 className="font-medium mb-4">Color</h2>
              <div className="flex gap-2">
                <div className={`w-8 h-8 rounded-full border-2 border-[#8B6E4F] bg-${product.color.toLowerCase()}-700`} />
              </div>
            </div>

            <div>
              <h2 className="font-medium mb-4">Select Size</h2>
              <div className="flex gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 rounded-full border hover:border-[#8B6E4F] hover:bg-gray-50 flex items-center justify-center transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full py-4 bg-[#8B6E4F] text-white rounded-full hover:bg-[#7A5E3F] transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-serif mb-8">Similar Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(products).slice(0, 3).map((similarProduct) => (
              <div key={similarProduct.name} className="relative group">
                <div className="relative h-[400px] rounded-lg overflow-hidden bg-[#E5D3C8]">
                  <Image
                    src={similarProduct.image}
                    alt={similarProduct.name}
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
                    <h3 className="font-medium text-lg">{similarProduct.name}</h3>
                    <p className="text-xl">${similarProduct.price}</p>
                  </div>
                  <button className="px-6 py-2.5 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                    Shop now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}