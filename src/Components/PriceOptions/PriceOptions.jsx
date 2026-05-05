import React, { Component } from "react";
import { FaCircleCheck } from "react-icons/fa6";

class PriceOptions extends Component {
  render() {
    const pricingOptions = [
      {
        id: 1,
        name: "Basic Membership",
        price: 19,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Open gym hours",
          "1 free fitness assessment",
          "Basic workout guidance",
          "Access to cardio machines",
          "Free parking",
          "Mobile app workout tracking"
        ]
      },
      {
        id: 2,
        name: "Standard Membership",
        price: 39,
        features: [
          "All Basic features",
          "Group fitness classes",
          "2 personal training sessions per month",
          "Access to strength training zone",
          "Weekly workout plan"
        ]
      },
      {
        id: 3,
        name: "Premium Membership",
        price: 59,
        features: [
          "All Standard features",
          "Unlimited group classes",
          "5 personal training sessions per month",
          "Sauna and steam room access",
          "Nutrition consultation"
        ]
      }
    ];

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Best prices in the town
        </h2>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pricingOptions.map((option) => (
            <div
              key={option.id}
              className="flex flex-col border p-5 text-black rounded-lg bg-purple-400 hover:shadow-xl transition h-full"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-2">
                {option.name}
              </h3>

              {/* Price */}
              <p className="text-lg font-semibold text-center mb-4">
                ${option.price}/month
              </p>

              {/* Features */}
              <ul className="space-y-2 text-sm flex-grow">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCircleCheck className="mr-2 mt-1 text-green-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-6 w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-800 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PriceOptions;