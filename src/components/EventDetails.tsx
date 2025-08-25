import React from 'react';
import { Clock, MapPin, Utensils, Music, Camera } from 'lucide-react';

const EventDetails: React.FC = () => {
  const schedule = [
    { time: '3:30 PM', event: 'Guest Arrival & Cocktails', icon: Utensils },
    { time: '4:00 PM', event: 'Wedding Ceremony', icon: Camera },
    { time: '4:30 PM', event: 'Photos & More Cocktails', icon: Camera },
    { time: '6:00 PM', event: 'Reception & Dinner', icon: Utensils },
    { time: '8:00 PM', event: 'Dancing & Celebration', icon: Music },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-olive mb-4">
            Wedding Details
          </h2>
          <div className="w-24 h-1 bg-soft-rose mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-dark-olive mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-soft-rose mr-3" />
                Venue Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-montserrat font-semibold text-dark-olive">Vineyard Estate Gardens</h4>
                  <p className="font-montserrat text-muted-sage">1234 Wine Country Lane</p>
                  <p className="font-montserrat text-muted-sage">Napa Valley, CA 94558</p>
                </div>
                <div className="bg-cream rounded-xl p-4">
                  <p className="font-montserrat text-sm text-muted-sage">
                    <strong>Parking:</strong> Complimentary valet parking available<br/>
                    <strong>Accessibility:</strong> Wheelchair accessible venue
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl font-semibold text-dark-olive mb-6 flex items-center">
                <Clock className="h-6 w-6 text-soft-rose mr-3" />
                Schedule of Events
              </h3>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-cream rounded-xl">
                    <div className="flex-shrink-0">
                      <item.icon className="h-5 w-5 text-soft-rose" />
                    </div>
                    <div className="flex-grow">
                      <div className="font-montserrat font-semibold text-dark-olive">{item.time}</div>
                      <div className="font-montserrat text-muted-sage">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-dark-olive mb-6">
                Dress Code
              </h3>
              <div className="space-y-6">
                <div className="bg-rose-gradient rounded-xl p-6 text-white">
                  <h4 className="font-montserrat font-semibold mb-3">Garden Party Elegant</h4>
                  <p className="font-montserrat text-sm leading-relaxed">
                    We encourage you to dress in elegant attire suitable for an outdoor garden setting. 
                    Think cocktail dresses, dress shirts with slacks, or nice sundresses. 
                    Avoid stilettos as we'll be on grass and garden paths.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-cream rounded-xl p-4">
                    <h5 className="font-montserrat font-semibold text-dark-olive mb-2">Suggested Colors</h5>
                    <div className="flex justify-center space-x-2">
                      <div className="w-6 h-6 bg-soft-rose rounded-full"></div>
                      <div className="w-6 h-6 bg-muted-sage rounded-full"></div>
                      <div className="w-6 h-6 bg-dark-olive rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-cream rounded-xl p-4">
                    <h5 className="font-montserrat font-semibold text-dark-olive mb-2">Weather</h5>
                    <p className="font-montserrat text-sm text-muted-sage">Expect 75°F<br/>Light breeze</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="p-8 pb-4">
                <h3 className="font-playfair text-2xl font-semibold text-dark-olive mb-4">
                  Location Map
                </h3>
              </div>
              <div className="h-64 bg-cream flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-soft-rose mx-auto mb-4" />
                  <p className="font-montserrat text-muted-sage">Interactive map would be embedded here</p>
                  <button className="mt-3 bg-dark-olive text-white px-4 py-2 rounded-full font-montserrat text-sm hover:bg-muted-sage transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;