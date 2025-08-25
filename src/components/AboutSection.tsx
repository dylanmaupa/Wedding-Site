import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-olive mb-4">
            Our Love Story
          </h2>
          <div className="w-24 h-1 bg-soft-rose mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-cream rounded-2xl p-8 shadow-md">
              <h3 className="font-playfair text-2xl font-semibold text-dark-olive mb-4">
                How We Met
              </h3>
              <p className="font-montserrat text-muted-sage leading-relaxed">
                It was a crisp autumn morning at the local coffee shop where our paths first crossed. 
                Sarah was reading her favorite novel, and Michael couldn't help but notice the beautiful 
                smile that appeared every time she turned a page. What started as a conversation about 
                books became hours of talking about dreams, adventures, and everything in between.
              </p>
            </div>

            <div className="bg-rose-gradient rounded-2xl p-8 shadow-md">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                The Proposal
              </h3>
              <p className="font-montserrat text-white/90 leading-relaxed">
                Three years later, on the same bench where we had our first official date, Michael 
                got down on one knee during a beautiful sunset. With tears of joy and a resounding 
                "Yes!", Sarah said she couldn't imagine spending her life with anyone else.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-md">
              <h3 className="font-playfair text-2xl font-semibold text-dark-olive mb-4">
                Our Future
              </h3>
              <p className="font-montserrat text-muted-sage leading-relaxed">
                Now we're excited to celebrate this next chapter with our favorite people. 
                We can't wait to dance the night away and create memories that will last a lifetime 
                with all of you by our side.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-cream rounded-2xl p-4 shadow-md">
              <img 
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sarah and Michael" 
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cream rounded-2xl p-4 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Engagement photo 1" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="bg-cream rounded-2xl p-4 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1024859/pexels-photo-1024859.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Engagement photo 2" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;