import { Menu, Check } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import imgIPhone14ProFree1 from "../assets/205b6bb13d4676b9db7eef820ab4a1af32b0018a.png";
import imgIPhone14ProFree11 from "../assets/12e3790eb30a465f2f6a58c5e54e09ec4d11f92e.png";
import imgImage18 from "../assets/91c5f7a801d060d7faf19d4dd1355446279daf65.png";
import TravelerTestimonial from '@/imports/Frame1000000944';
import AccessPassCard from '@/app/components/AccessPassCard';
import beyondTheMap from "@/assets/beyond_the_map.png";

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
      <main className="px-5 pb-8">
        <h2 className="text-3xl font-serif mb-4 leading-tight">
          Your smart city pass to explore Agadir at your own pace.
        </h2>

        <div className="space-y-3 mb-6">
          <p className="text-base">
            <span className="font-semibold">No internet ? No problem.</span><br />
            <span className="font-semibold">Off-line version available !</span>
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Stories, culture, hidden spots, and authentic experiences, guided by AI, grounded in real Morocco.
          </p>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-orange-700 hover:bg-orange-600 text-white py-3.5 px-6 rounded-md mb-6 transition-colors">
          Buy Agadir city pass
        </button>

        {/* Phone Mockup */}
        <div className="relative w-full h-[400px] mb-26">
          <div className="absolute h-[411px] left-[40%] top-[46px] w-[206px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="App preview" className="absolute h-[105%] left-[-42.23%] max-w-none top-[-2.26%] w-[184.95%]" src={imgIPhone14ProFree1} />
            </div>
          </div>
          <div className="absolute h-[487px] left-0 top-0 w-[244px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="App preview" className="absolute h-[105.95%] left-[-43.14%] max-w-none top-[-2.87%] w-[186.7%]" src={imgIPhone14ProFree11} />
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="mb-12">
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

        {/* Agadir Section */}
        <section className="mb-12 bg-orange-50 -mx-5 px-5 py-8">
          <h3 className="text-2xl font-serif mb-4 text-orange-700">
            Agadir isn't a checklist city.
          </h3>

          <p className="text-sm text-gray-800 mb-6 leading-relaxed">
            It's a feeling, ocean breeze, Amazigh roots, surf culture, modern Morocco.
          </p>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1573133001449-a19835a04971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwYWdhZGlyJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODU4NDg2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Architecture in Agadir"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="aspect-square">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1738255328673-808f59664538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwdHJhZGl0aW9uYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njg1ODQ4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Traditional building"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="aspect-square">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1669542873085-c46ebc6f1014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwYmVhY2glMjBvY2VhbnxlbnwxfHx8fDE3Njg1ODQ4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beach in Morocco"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="aspect-square">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1702057830533-2afff81a57f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwY29sb3JmdWwlMjBzcGljZXN8ZW58MXx8fHwxNzY4NTg0ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Colorful spices"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="aspect-square">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1760727752323-7023aca96d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwYW5jaWVudCUyMHJ1aW5zfGVufDF8fHx8MTc2ODU4NDg2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ancient ruins"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="aspect-square">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1661163540654-199cae09649e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwbW9zcXVlJTIwbWluYXJldHxlbnwxfHx8fDE3Njg1ODQ4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mosque minaret"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </section>

        {/* Who Is This Pass For Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-serif mb-6">Who Is This Pass For?</h3>

          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm pt-1">First-time visitors who want real context</p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm pt-1">Repeat travelers who want depth</p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm pt-1">Solo travelers who want freedom + safety</p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm pt-1">Families who want learning without boredom</p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm pt-1">Culture lovers, walkers, thinkers, explorers</p>
            </div>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            If you like discovering cities with meaning, this pass is for you.
          </p>
        </section>

        {/* Pass Card Section */}
        <section className="mb-8 pt-8">
          <AccessPassCard />
        </section>

        {/* Testimonials Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-serif mb-6">What Travelers Say</h3>

          <div className="w-full">
            <TravelerTestimonial />
          </div>
        </section>

        {/* Supported By Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-serif mb-6">Supported by</h3>

          <div className="w-full">
            <img 
              alt="Chamber of Commerce Agadir" 
              className="w-full h-auto" 
              src={imgImage18} 
            />
          </div>
        </section>
      </main>
    </div>
  );
}