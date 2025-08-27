import React from 'react';
import { Clock, MapPin, Utensils, Music, Camera } from 'lucide-react';

const EventDetails: React.FC = () => {
  const schedule = [
    { time: '10:30 AM', event: 'Guest Arrival', icon: Utensils },
    { time: '11:00 AM', event: 'Wedding Ceremony', icon: Camera },
    { time: '13:30 PM', event: 'Mocktails & Snacks', icon: Camera },
    { time: '14:00 PM', event: 'Lunch', icon: Utensils },
    { time: '14:30 PM', event: 'Reception & Dancing', icon: Music },
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
                  <h4 className="font-montserrat font-semibold text-dark-olive">Strathaven Shiloh Gardens</h4>
                  <p className="font-montserrat text-muted-sage">15 Golda Ave</p>
                  <p className="font-montserrat text-muted-sage">Strathaven, Harare</p>
                </div>
                <div className="bg-cream rounded-xl p-4">
                  <p className="font-montserrat text-sm text-muted-sage">
                    <strong>Parking:</strong> Complimentary valet parking available<br />
                    <strong>Accessibility:</strong> Wheelchair accessible venue
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-dark-olive mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-soft-rose mr-3" />
                PLEASE NOTE
              </h3>
              <div className="space-y-4">
                <div className="bg-cream rounded-xl p-4">
                  <p className="font-montserrat text-sm text-muted-sage">
                    <span>
                      <strong>CHILDREN:</strong> We respectfully request no children.
                      Thank you for your understanding<br />
                    </span>

                    <span className='span-space'>
                      <strong>INVITATION:</strong> Attendance and entry are strictly by invitation.
                      We appreciate your understanding. <br />
                    </span>

                    <span><strong>GIFTS:</strong> Preferably cash gifts are appreciated thank you.</span>
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
                  <h4 className="font-montserrat font-semibold mb-3">Elegant Formal or Smart Casual</h4>
                  <p className="font-montserrat text-sm leading-relaxed">
                    Our wedding style is Elegant Formal or Smart Casual. Gentlemen may wear suits, dress shirts, or tailored outfits, while ladies can choose cocktail dresses, or chic ensembles. Dress to impress, with comfort in mind, as we celebrate in style.
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
                    <p className="font-montserrat text-sm text-muted-sage">Expect 30°C<br />Light breeze</p>
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
              <div className="h-80">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3798.9937684878582!2d31.021999075174268!3d-17.791989983165774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ3JzMxLjIiUyAzMcKwMDEnMjguNSJF!5e0!3m2!1sen!2szw!4v1756144976683!5m2!1sen!2szw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                // className="rounded-b-3xl"
                ></iframe>
              </div>
              <div className="p-4 bg-cream">
                <a
                  href="https://maps.app.goo.gl/rR5Vbvd9beJzP7hv8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-dark-olive text-white px-4 py-2 rounded-full font-montserrat text-sm hover:bg-muted-sage transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;