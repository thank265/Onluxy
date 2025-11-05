import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-between px-4 md:px-20 py-12">
        {/* Left Content */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-6xl font-serif">
            Find stylish clothes for your daily life
          </h1>
          <p className="text-gray-600">
            Shop our wide selection of stylish women's clothing and accessories in our online store.
          </p>
          <Link 
            href="/products" 
            className="inline-block px-8 py-3 bg-[#8B6E4F] text-white rounded-full hover:bg-[#7A5E3F] transition-colors"
          >
            Shop now
          </Link>
          
          {/* Customer Count */}
          <div className="flex items-center gap-4 mt-12">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"/>
              ))}
            </div>
            <div>
              <p className="font-semibold">20K+</p>
              <p className="text-gray-600 text-sm">Happy customer</p>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Images */}
        <div className="w-1/2 relative h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15"
            alt="Woman in stylish outfit"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 md:px-20 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Choose the best everyday wear</h2>
          <p className="text-gray-600">
            Discover a wide range of women's clothing categories tailored to suit your fashion needs.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center gap-8 mb-12">
          {['Tops', 'Dress', 'Bottoms', 'Wear'].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Wrap dress', price: 76, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f' },
            { name: 'Blouse', price: 45, image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254' },
            { name: 'Denim jacket', price: 57, image: 'https://images.unsplash.com/photo-1523205771623-e0898e03828f' },
            { name: 'Hoodie', price: 80, image: 'https://images.unsplash.com/photo-1556139902-7367723b7e9e' },
            { name: 'Polo dress', price: 56, image: 'https://images.unsplash.com/photo-1583396060233-3d13e9d7bc06' },
            { name: 'Long shirt', price: 42, image: 'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1' },
          ].map((product) => (
            <div key={product.name} className="relative group">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                <button className="absolute right-4 top-4 p-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity">
                  ❤️
                </button>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-lg">${product.price}</p>
                </div>
                <button className="px-4 py-2 rounded-full bg-white border hover:bg-gray-50 transition-colors">
                  Shop now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full border hover:bg-gray-50 transition-colors">
            See all
          </button>
        </div>
      </section>
    </main>
  )
}