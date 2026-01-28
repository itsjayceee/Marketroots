import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductOffers() {
  const { productName } = useParams(); // ex: "carrot"

  const offers = products.filter(
    (p) => p.name.toLowerCase() === productName.toLowerCase()
  );

  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl font-bold text-green-800 mb-6">
        {productName.charAt(0).toUpperCase() + productName.slice(1)} Offers
      </h1>

      {offers.length === 0 && <p className="text-gray-500">No offers found.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="border rounded-lg p-4 bg-white shadow-sm">
            <img
              src={offer.image}
              alt={offer.name}
              className="w-full h-40 object-cover rounded"
            />

            <p className="mt-2 font-semibold">{offer.name}</p>
            <p className="text-sm text-gray-700">
              ₱{Number(offer.price).toFixed(2)} / {offer.unit}
            </p>

            <p className="text-sm text-gray-600 mt-2">
              {offer.farmer?.name || "Farmer (TBD)"} • {offer.farmer?.location || "Location (TBD)"}
            </p>

            <Link
              to={`/marketplace/offer/${offer.id}`}
              className="inline-block mt-3 px-3 py-2 text-sm rounded-md bg-green-700 text-white"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
