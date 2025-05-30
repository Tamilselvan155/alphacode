export default function WhyChooseVAccel() {
    const features = [
      {
        title: "Cloud Expertise",
        description: "Built on AWS, Azure, Google Cloud—2025’s top platforms.",
      },
      {
        title: "Custom Fit",
        description: "SaaS tailored to your vision, users, and market.",
      },
      {
        title: "Fast to Market",
        description: "Launch-ready in weeks, not months.",
      },
      {
        title: "Ongoing Support",
        description: "Updates, scaling, and fixes—we’re with you post-launch.",
      },
    ];
  
    return (
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 via-purple-800 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b5824e] mb-10 sm:mb-12 md:mb-16">
            Why Choose Tekvian for SaaS Development Services?
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-md text-left">
                <h3 className="text-base sm:text-lg font-bold text-[#b5824e] mb-2 relative">
                  {feature.title}
                  <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 mt-2"></div>
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mt-3 sm:mt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
