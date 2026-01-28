import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/marketplace/product/${product.name.toLowerCase()}`)
      }
      className="border rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition cursor-pointer"
    >
      <div className="h-[180px] md:h-[200px] bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-green-50 px-4 py-4">
        <p className="text-base font-semibold text-gray-900">
          {product.name}
        </p>

        <p className="text-sm text-gray-700 mt-1">
          ₱{Number(product.price).toFixed(2)}
          <span className="text-xs text-gray-500"> / {product.unit}</span>
        </p>
      </div>
    </div>
  );
}
