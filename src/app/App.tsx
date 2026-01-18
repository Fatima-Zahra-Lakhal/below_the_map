import { Menu, Check } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import imgIPhone14ProFree1 from "../assets/image.png";
import imgBackground from "../assets/pg.png";
import imgImage18 from "../assets/seported.png";
import TravelerTestimonial from '@/imports/Frame1000000944';
import AccessPassCard from '@/app/components/AccessPassCard';
import beyondTheMap from "@/assets/beyond_the_map.png";
import agadir1 from "../assets/agadir1.png";
import agadir2 from "../assets/agadir2.png";
import agadir3 from "../assets/agadir3.png";
import agadir4 from "../assets/agadir4.png";
import agadir5 from "../assets/agadir5.png";
import agadir6 from "../assets/agadir6.png";
import agadir7 from "../assets/agadir7.png";
import agadir8 from "../assets/agadir8.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-y-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-1 bg-[#faf6f1]">
        <div className="flex items-center gap-1">
          <button className="p-2 -ml-2">
            <Menu className="w-6 h-6" />
          </button>
  <img
    src={beyondTheMap}
    alt="BEYOND THE MAP"
        className="h-6 w-auto object-contain"
  />


        </div>
        <div className="flex gap-2">
          <button className="w-7 h-7 rounded-full overflow-hidden border border-gray-200">
            <ImageWithFallback 
              src="https://flagcdn.com/w40/fr.png" 
              alt="Français"
              className="w-full h-full object-cover"
            />
          </button>
          <button className="w-7 h-7 rounded-full overflow-hidden border border-gray-200">
            <ImageWithFallback 
              src="https://flagcdn.com/w40/es.png" 
              alt="Español"
              className="w-full h-full object-cover"
            />
          </button>
          <button className="w-7 h-7 rounded-full overflow-hidden border border-gray-200">
            <ImageWithFallback 
              src="https://flagcdn.com/w40/gb.png" 
              alt="English"
              className="w-full h-full object-cover"
            />
          </button>
          <button className="w-7 h-7 rounded-full overflow-hidden border border-gray-200">
            <ImageWithFallback 
              src="https://flagcdn.com/w40/de.png" 
              alt="Deutsch"
              className="w-full h-full object-cover"
            />
          </button>
          <button className="w-7 h-7 rounded-full overflow-hidden border border-gray-200">
            <ImageWithFallback 
              src="https://flagcdn.com/w40/jp.png" 
              alt="日本語"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pb-8">
      {/* Hero Section */}
{/* Hero Section */}
<section
  className="w-full pb-8 text-white bg-cover bg-center"
  style={{ backgroundImage: `url(${imgBackground})` }}
>
  <div className="px-5 max-w-4xl mx-auto">
    <h2 className="text-3xl font-serif mb-4 leading-tight">
      Your smart city pass to explore Agadir at your own pace.
    </h2>

    <div className="space-y-3 mb-6">
      <p className="text-base">
        <span className="font-semibold">No internet ? No problem.</span><br />
        <span className="font-semibold">Off-line version available !</span>
      </p>

      <p className="text-sm leading-relaxed">
        Stories, culture, hidden spots, and authentic experiences, guided by AI, grounded in real Morocco.
      </p>
    </div>

    <button className="w-full bg-orange-700 hover:bg-orange-600 text-white py-3.5 px-6 rounded-md transition-colors">
      Buy Agadir city pass
    </button>
  </div>
</section>


        {/* Phone Mockup */}
<div className="relative w-full h-[400px] mb-38 -mt-20 flex justify-center items-start">
  <div className="relative h-[650px] w-[330px]"> {/* Augmentation légère */}
    <img
      alt="App preview"
      className="w-full h-full object-contain"
      src={imgIPhone14ProFree1}
    />
  </div>
</div>
        {/* How It Works Section */}
        <section className="mb-8 bg-[#faf6f1] -mx-5 px-10 py-8">
          <h3 className="text-2xl font-serif mb-6">How It Works</h3>
          
          <div className="space-y-4 ml-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-700 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                1
              </div>
              <p className="pt-2 text-base">Buy the Agadir City Tour Pass</p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-700 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                2
              </div>
              <p className="pt-2 text-base">Access Beyond the Map on your phone</p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-700 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                3
              </div>
              <p className="pt-2 text-base">Walk, listen, discover</p>
            </div>
          </div>

          <p className="text-sm text-gray-700 mt-6 leading-relaxed">
            Talk to the AI in your own language and get clear, real-time answers.
          </p>

          <p className="font-semibold mt-3">Simple. Smooth. Smart.</p>
        </section>


  {/* Supported By Section */}
        <section className="mb-12 bg-white px-10 ">
          <h3 className="text-2xl font-serif mb-6">Supported by</h3>

          <div className="w-full">
            <img 
              alt="Chamber of Commerce Agadir" 
              className="w-full h-auto" 
              src={imgImage18} 
            />
          </div>
        </section>


       {/* Agadir Section */}
<section className="mb-12 bg-orange-50 -mx-5 py-8">
  <h3 className="text-3xl font-serif px-10 mb-2">
    Agadir isn’t a checklist city.
  </h3>

  <p className="text-base mb-8 leading-relaxed px-10 ">
    It’s a feeling, ocean breeze, Amazigh roots, surf culture, modern Morocco.
  </p>

  {/* Photo Grid */}
  <div className="grid grid-cols-3 md:grid-cols-4 gap-0">
    
    {[agadir1, agadir2, agadir3, agadir4, agadir8, agadir6, agadir7].map(
      (img, index) => (
        <div key={index} className="aspect-square">
          <img
            src={img}
            alt={`Agadir ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      )
    )}

    {/* Dernière image : prend 2 colonnes */}
    <div className="aspect-[2/1] col-span-2">
    <img
      src={agadir5}
      alt="Agadir 5"
      className="w-full h-full object-cover"
    />
  </div>


  </div>

</section>

        {/* Who Is This Pass For Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-serif mb-6 px-10">Who Is This Pass For?</h3>

          <div className="space-y-3 mb-6 px-5">
            <div className="flex gap-3 items-start">
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-2 h-2 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm pt-1">First-time visitors who want real context</p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 ">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm pt-1">Repeat travelers who want depth</p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 ">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm pt-1">Solo travelers who want freedom + safety</p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm pt-1">Families who want learning without boredom</p>
            </div>

           <div className="flex gap-3 items-center">
  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
    <Check className="w-3 h-3 text-white" strokeWidth={3} />
  </div>
  <p className="text-sm leading-tight">
    Culture lovers, walkers, thinkers, explorers
  </p>
</div>

          </div>

        <p className="text-sm text-gray-700 leading-relaxed font-extrabold px-8">
  If you like discovering cities with meaning, this pass is for you.
</p>
        </section>
         {/* Testimonials Section */}
        <section className="mb-2 px-10">
          <h3 className="text-2xl font-serif mb-6 ">What Travelers Say</h3>

          <div className="w-full px-2">
            <TravelerTestimonial />
          </div>
        </section>

        {/* Pass Card Section */}
        <section className="mb-8 pt-8 px-2">
          <AccessPassCard />
        </section>

       
      </main>
    </div>
  );
}