import React, { Component } from "react";
import PropTypes from "prop-types";

class PriceOption extends Component {
  render() {
    const { pricingOption } = this.props;

    return (
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold">{pricingOption.name}</h2>
        <p className="text-lg">${pricingOption.price}/month</p>

        <ul>
          {pricingOption.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    );
  }
}

PriceOption.propTypes = {
  pricingOption: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PriceOption;