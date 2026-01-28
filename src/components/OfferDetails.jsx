import { Link } from "react-router-dom";

export default function OfferDetails() {
  return (
    

      <div className="mt-10">
        <h1 className="text-2xl font-bold text-green-800">
          Product Details
        </h1>

        <p className="mt-4 text-gray-700">
          This page is for displaying the selected product details from different farmers.
        </p>

        <p className="mt-2 text-gray-700">
          Here, the MSME can view information about the product and the farmer.
        </p>

        <p className="mt-2 text-gray-700">
          This section will also allow messaging the farmer for inquiries.
        </p>

        <button
          type="button"
          className="mt-6 px-6 py-2 bg-green-700 text-white rounded-md"
          disabled
        >
          Message Farmer
        </button>
      </div>
  );
}
