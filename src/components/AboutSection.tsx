import React from 'react';
import img1 from '../images/Engagement/WhatsApp Image 2025-08-26 at 11.55.53 (1).jpeg';
import img2 from '../images/Engagement/WhatsApp Image 2025-08-26 at 11.55.55 (2).jpeg';
import img3 from '../images/Engagement/WhatsApp Image 2025-08-26 at 11.55.58.jpeg';
import img4 from '../images/Engagement/WhatsApp Image 2025-08-26 at 13.03.41.jpeg';
import img5 from '../images/Engagement/WhatsApp Image 2025-08-26 at 13.03.42.jpeg';
import img6 from '../images/Engagement/WhatsApp Image 2025-08-26 at 13.03.43.jpeg';
import img7 from '../images/Engagement/WhatsApp Image 2025-08-26 at 13.03.45.jpeg';
import img8 from '../images/Engagement/WhatsApp Image 2025-08-26 at 13.03.46.jpeg';
import img9 from '../images/Engagement/WhatsApp Image 2025-08-26 at 13.03.47.jpeg';

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
                We were just 2 young innocent kids in primary school, being in each other’s space because of church . Sunday school was our common ground, as well, living in the same neighborhood, and same section . Being in each other’s spaces was inevitable, a mutual crush developed. Kuda’s testimony says, he saw this young pretty girl , and his heart was fixed. He describes it as the fresh prince love story, coming to living in the uptown side and find what would become his wife of destiny. The fresh prince of Bluffhill got the jewel of his crown. From then on, he knew, she was the one… YES, at that young age . Maka says her heart would leap every time she’d see him. A huge crush she had, and could almost sense his presence , even before he arrived at the scene. Sounds very fictional right ? 😅…. exactly, that’s how love written in the heavens is like.
              </p>
            </div>

            <div className="bg-rose-gradient rounded-2xl p-8 shadow-md">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                The Proposal
              </h3>
              <p className="font-montserrat text-white/90 leading-relaxed">
                Maka had always spoken of wanting a simple proposal, where a cool breeze would be our company. I snuck into her phone often, scrolling through her ‘screenshots’ , just for ideas. She’s a BIG lover of things— picnics and nature walks to be precise. I went around to scout for rings, how I got to know her size ? Don’t ask 😂😂. Just know it was a struggle, I mean, how do you hide that from someone you love ? But eventually, gangster rakazongoita plan, zvikatobuda. I had to collaborate with an events planner friend of mine— she went hard on this one, and in the modern day slang, she baked the cake and ATE (delivered exceptionally). She picked a very serene venue — Rain Tree Gardens, drafted a beautiful picnic plan, made all the set up. I picked up the beautiful lady from her parent’s place and went for a drive, which seemed like a drive of inspiration (appreciating good architecture) in the Northern suburbs . I made sure to drive long enough until she was hungry and tired 😂. Finally, we drove to the venue, walked through the park and i pretended to inquire more about the place. She saw the picnic set up and even commented on its beauty. Hanzi izvi zvakanaka izvi, we should do it too. I said let’s have a closer look at it, and she was screaming like an ambulance , wow, oh wow, woowww’ , apa shasha haisi kuziva all this is for her. Jahmahn vakazongobudisa ka little black box from his pocket, went on one knee. She froze, tears streaming down her cheeks…akazoitoita mariro zve paya, takutobvisa ma socks kuti ashandise se hanky . Ndakangoti hunza chigunwe ndikufenze 🤭. Muskana akabva ari happy , ari grateful
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-md">
              <h3 className="font-playfair text-2xl font-semibold text-dark-olive mb-4">
                Our Future
              </h3>
              <p className="font-montserrat text-muted-sage leading-relaxed">
                Now, as we are celebrating this day, we’re very optimistic about what the future holds. We envision a future cemented with love, partnership, absolute support for one another, and being each other’s keeper. We want to commit ourselves to servitude , for both the Lord, and humanity . Our mantra says, <strong><i>‘be the change you want to see, and touch lives, from one vessel to another’</i></strong>. We want to be a beacon of hope for others. Life is too short, so we want to live it as fulfilled as possible, driven by purpose, and die empty knowing we gave it our all. Ohh, did we mention? We want to make looootsss of money 😅.. so, after the wedding, please go see Victor, tine zvatakakurongerai 😂😂 <strong>[just for laughs]</strong>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-cream rounded-2xl p-4 shadow-md">
              <img 
                // src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                src={img1}
                alt="Sarah and Michael" 
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cream rounded-2xl p-4 shadow-md">
                <img 
                  // src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  src={img2}
                  alt="Engagement photo 1" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="bg-cream rounded-2xl p-4 shadow-md">
                <img 
                  // src="https://images.pexels.com/photos/1024859/pexels-photo-1024859.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  src={img3}
                  alt="Engagement photo 2" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-cream rounded-2xl p-4 shadow-md">
              <img 
                // src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800" 
                src={img4}
                alt="Sarah and Michael" 
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cream rounded-2xl p-4 shadow-md">
                <img 
                  // src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  src={img5}
                  alt="Engagement photo 1" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="bg-cream rounded-2xl p-4 shadow-md">
                <img 
                  // src="https://images.pexels.com/photos/1024859/pexels-photo-1024859.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  src={img6}
                  alt="Engagement photo 2" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cream rounded-2xl p-4 shadow-md">
                <img 
                  // src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  src={img7}
                  alt="Engagement photo 1" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="bg-cream rounded-2xl p-4 shadow-md">
                <img 
                  // src="https://images.pexels.com/photos/1024859/pexels-photo-1024859.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  src={img8}
                  alt="Engagement photo 2" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-cream rounded-2xl p-4 shadow-md">
              <img 
                // src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800" 
                src={img9}
                alt="Sarah and Michael" 
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <p className="font-montserrat text-muted-sage text-sm">
            <i><strong>1 Corinthians 13:13:</strong> "And now these three remain: faith, hope, and love. But the greatest of these is love."</i>
          </p>
            <p className="font-montserrat text-muted-sage text-sm">
            <i><strong>WE HAVE A MAXIMUM OF 200 GUESTS, KINDLY NOTE, ENTRY IS STRICTLY BY INVITATION. THANK YOU FOR UNDERSTANDING</strong></i>
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;