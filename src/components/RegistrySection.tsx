import React from 'react';
import { Gift, Heart, Home, Plane } from 'lucide-react';

const RegistrySection: React.FC = () => {
  const registries = [
    {
      name: 'Williams Sonoma',
      description: 'For all our kitchen and home essentials',
      icon: Home,
      url: '#',
    },
    {
      name: 'Pottery Barn',
      description: 'Beautiful home decor and furniture',
      icon: Heart,
      url: '#',
    },
    {
      name: 'Honeymoon Fund',
      description: 'Help us create memories in Italy',
      icon: Plane,
      url: '#',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-olive mb-4">
            Registry & Gifts
          </h2>
          <p className="font-montserrat text-muted-sage text-lg max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you'd like to celebrate with us, 
            we've created a few registries to help us start our new life together.
          </p>
          <div className="w-24 h-1 bg-soft-rose mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {registries.map((registry, index) => (
            <div key={index} className="bg-cream rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-soft-rose/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <registry.icon className="h-8 w-8 text-soft-rose" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-dark-olive mb-3">
                {registry.name}
              </h3>
              <p className="font-montserrat text-muted-sage mb-6">
                {registry.description}
              </p>
              <a
                href={registry.url}
                className="inline-block bg-dark-olive hover:bg-muted-sage text-white font-montserrat font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View Registry
              </a>
            </div>
          ))}
        </div>

        <div className="bg-rose-gradient rounded-3xl p-8 md:p-12 text-center">
          <Gift className="h-12 w-12 text-white mx-auto mb-6" />
          <h3 className="font-playfair text-3xl font-bold text-white mb-4">
            Gift Guidelines
          </h3>
          <div className="max-w-3xl mx-auto">
            <p className="font-montserrat text-white/90 text-lg leading-relaxed mb-6">
              We're so grateful for your love and support as we begin this new chapter. 
              If you'd like to give a gift, we've registered for items that will help us 
              create our first home together. We've also set up a honeymoon fund to help 
              us explore the beautiful countryside of Tuscany!
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/20 rounded-2xl p-6">
                <h4 className="font-montserrat font-semibold text-white mb-3">Shipping Address</h4>
                <p className="font-montserrat text-white/90 text-sm">
                  Sarah Johnson & Michael Thompson<br/>
                  1234 Maple Street<br/>
                  San Francisco, CA 94102
                </p>
              </div>
              <div className="bg-white/20 rounded-2xl p-6">
                <h4 className="font-montserrat font-semibold text-white mb-3">Important Note</h4>
                <p className="font-montserrat text-white/90 text-sm">
                  Please have gifts delivered by August 1st to ensure 
                  they arrive before our wedding day. Thank you for 
                  understanding!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrySection;