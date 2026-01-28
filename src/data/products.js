export const products = [
  { //wede gamitin ng ibang files pag export
    id: 1,
    name: "Rice",
    category: "Grains",
    price: 55,
    unit: "kg",
    image: "/images/rice1.jpg",
  },

  {
    id: 2,
    name: "Corn",
    category: "Crop",
    price: 40,
    unit: "kg",
    image: "/images/corn.jpg",
  },

  {
    id: 3,
    name: "Tomato",
    category: "Fruits",
    price: 45,
    unit: "kg",
    image: "/images/tomato.jpg",
  },

  {
    id: 4,
    name: "Carrot",
    category: "Vegetables",
    price: 30,
    unit: "kg",
    image: "/images/carrot.jpg",
  },

  {
    id: 5,
    name: "Mango",
    category: "Fruits",
    price: 120,
    unit: "kg",
    image: "/images/mango.jpg",
  },

  {
    id: 6,
    name: "Potato",
    category: "Crop",
    price: 100,
    unit: "kg",
    image: "/images/potato.jpg",
  }, // ✅ COMMA HERE (VERY IMPORTANT)

  // SECOND PAGE (Carrot offers from different farmers)
  {
    id: 11,
    name: "Carrot",
    category: "Vegetables",
    price: 70,
    unit: "kg",
    image: "/images/carrot1.jpg",
    farmer: { name: "Farmer Juan", location: "Benguet" },
  },

  {
    id: 12,
    name: "Carrot",
    category: "Vegetables",
    price: 65,
    unit: "kg",
    image: "/images/carrot2.jpg",
    farmer: { name: "Farmer Maria", location: "Nueva Ecija" },
  },

  {
    id: 13,
    name: "Carrot",
    category: "Vegetables",
    price: 75,
    unit: "kg",
    image: "/images/carrot3.jpg",
    farmer: { name: "Farmer Leo", location: "Bukidnon" },
  },
];
