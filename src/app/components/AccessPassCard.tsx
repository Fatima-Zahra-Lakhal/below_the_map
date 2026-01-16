import { Plus } from 'lucide-react';

export default function AccessPassCard() {
  return (
    <div className="bg-[#faf6f1] p-5 py-20">
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        {/* Header Card with Gradient */}
        <div className="bg-gradient-to-r from-[#c97648] to-[#e8a75c] rounded-2xl p-6 mb-4 text-center text-white">
          <div className="text-xs font-semibold tracking-wider mb-2 opacity-90">
            LIMITED INTRO
          </div>
         <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-[#b02e2e] text-2xl font-serif">€9</span>
        </div>

          <div className="text-lg font-semibold mb-3">
            7-day access
          </div>
          <div className="inline-block bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-xs font-medium">
            Instant delivery
          </div>
        </div>

        {/* NEW Badge */}
        <div className="mb-3">
          <span className="inline-block bg-teal-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
            NEW
          </span>
        </div>

        {/* Title */}
        <h4 className="text-xl font-serif mb-3">
          7-Day Access Pass
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-5 leading-relaxed">
          Pay securely with Stripe, receive your code instantly, and unlock the full AR experience.
        </p>

        {/* Features List */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-2">
            <Plus className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-sm text-gray-700">Secure Stripe checkout</span>
          </div>
          <div className="flex items-start gap-2">
            <Plus className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-sm text-gray-700">Unique code valid for one week</span>
          </div>
          <div className="flex items-start gap-2">
            <Plus className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-sm text-gray-700">Works across all devices</span>
          </div>
          <div className="flex items-start gap-2">
            <Plus className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-sm text-gray-700">Full AR experience & map access</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-50 bg-gradient-to-r from-[#c97648] to-[#d88a5a] hover:from-[#b86638] hover:to-[#c77a4a] text-white py-3 px-6 rounded-full mb-3 mt-5 transition-all font-medium">
          Get Access Pass
        </button>

        {/* Preview Link */}
        <div className="text-start w-50">
          <button className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors  pl-6">
            Preview Tour →
          </button>
        </div>
      </div>
    </div>
  );
}