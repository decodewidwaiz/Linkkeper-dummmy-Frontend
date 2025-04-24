import React from 'react';

const Pricing = () => {
    const plans = [
        {
          name: 'Free',
          price: '$0',
          features: ['Save 10 links', 'Basic Link Organization', 'Community Support'],
          button: 'Get Started',
          highlight: false,
        },
        {
          name: 'Pro',
          price: '$19/mo',
          features: ['Save Unlimited Links', 'Advanced Link Filtering', 'Priority Support'],
          button: 'Upgrade to Pro',
          highlight: true,
        },
        {
          name: 'Team',
          price: '$49/mo',
          features: ['Save Unlimited Links', 'Team Collaboration & Sharing', 'Dedicated Account Manager'],
          button: 'Start Team Plan',
          highlight: false,
        },
      ];
      
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
        <p className="text-gray-600 mb-12 text-lg">Choose the plan that suits your needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${
                plan.highlight ? 'border-green-800 shadow-lg' : 'border-gray-200 shadow-sm'
              } p-8 flex flex-col items-center transition duration-300`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">{plan.price}</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 text-white rounded-xl font-medium ${
                  plan.highlight ? 'bg-green-800 hover:bg-green-500' : 'bg-gray-800 hover:bg-gray-900'
                } transition duration-300`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
