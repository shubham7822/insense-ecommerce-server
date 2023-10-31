const products = [
    {
      name: "Sandalwood Incense Sticks",
      type: "Incense Stick",
      brand: "Kalyani",
      price: 100,
      description: "High-quality sandalwood incense sticks with a soothing aroma.",
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/I/71PPPbaTySL._SX679_.jpg",
      countInStock: 50
    },
    {
      name: "Rose Dhoop",
      type: "Dhoop",
      brand: "Gulab",
      price: 80,
      description: "Aromatic rose dhoop for a calming atmosphere.",
      rating: 4.2,
      imageUrl: "https://m.media-amazon.com/images/I/51o9cb5iyEL._SX679_.jpg",
      countInStock: 30
    },
    {
      name: "Lavender Incense Cones",
      type: "Incense Cone",
      brand: "Mystic Aromas",
      price: 120,
      description: "Lavender-scented incense cones for relaxation and meditation.",
      rating: 4.7,
      imageUrl: "https://m.media-amazon.com/images/I/714glagGemL._SX679_.jpg",
      countInStock: 20
    },
    {
      name: "Patchouli Incense Sticks",
      type: "Incense Stick",
      brand: "Aroma Delight",
      price: 90,
      description: "Patchouli-scented incense sticks for a unique fragrance.",
      rating: 4.4,
      imageUrl: "https://m.media-amazon.com/images/I/81hQBaJUQ-L._SX679_.jpg",
      countInStock: 40
    },
    {
      name: "Jasmine Dhoop",
      type: "Dhoop",
      brand: "Floral Bliss",
      price: 85,
      description: "Exquisite jasmine dhoop to create a floral ambiance.",
      rating: 4.3,
      imageUrl: "https://m.media-amazon.com/images/I/516BsnpGcHL._SX300_SY300_QL70_FMwebp_.jpg",
      countInStock: 25
    },
    {
      name: "Nag Champa Incense Cones",
      type: "Incense Cone",
      brand: "Sacred Scents",
      price: 110,
      description: "Traditional Nag Champa incense cones for spiritual rituals.",
      rating: 4.6,
      imageUrl: "https://m.media-amazon.com/images/I/71Mdz8meE4L._SX679_.jpg",
      countInStock: 35
    },
    {
      name: "Frankincense Incense Sticks",
      type: "Incense Stick",
      brand: "Mystical Fragrance",
      price: 95,
      description: "Frankincense-scented incense sticks for a mystical experience.",
      rating: 4.4,
      imageUrl: "https://m.media-amazon.com/images/I/71MWtgu7xzL._SX679_.jpg",
      countInStock: 55
    },
    {
      name: "Musk Dhoop",
      type: "Dhoop",
      brand: "Divine Aroma",
      price: 75,
      description: "Rich musk dhoop to enhance meditation and prayer.",
      rating: 4.1,
      imageUrl: "https://m.media-amazon.com/images/I/71h+8+MCgkL._AC_UL640_FMwebp_QL65_.jpg",
      countInStock: 15
    },
    {
      name: "Vanilla Incense Cones",
      type: "Incense Cone",
      brand: "Sweet Serenity",
      price: 125,
      description: "Vanilla-scented incense cones for a sweet and calming atmosphere.",
      rating: 4.8,
      imageUrl: "https://m.media-amazon.com/images/I/71Yyh+fbzUL._AC_UL640_FMwebp_QL65_.jpg",
      countInStock: 60
    },
    {
      name: "Cedarwood Incense Sticks",
      type: "Incense Stick",
      brand: "Natural Harmony",
      price: 105,
      description: "Cedarwood incense sticks to promote balance and harmony.",
      rating: 4.6,
      imageUrl: "https://m.media-amazon.com/images/I/71Rhl4vN8-L._AC_UL640_FMwebp_QL65_.jpg",
      countInStock: 28
    },
    {
      name: "Saffron Dhoop",
      type: "Dhoop",
      brand: "Golden Spice",
      price: 95,
      description: "Aromatic saffron dhoop to create a warm and inviting atmosphere.",
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/125169fc-7472-4b4c-9ec9-a491010a08e9._CR0,0,1200,628_SX860_QL70_.jpg",
      countInStock: 22
    },
    {
      name: "Lemongrass Incense Cones",
      type: "Incense Cone",
      brand: "Fresh Aromatics",
      price: 115,
      description: "Lemongrass-scented incense cones for a refreshing environment.",
      rating: 4.7,
      imageUrl: "https://m.media-amazon.com/images/I/71SzWbJH4dL._AC_UL640_FMwebp_QL65_.jpg",
      countInStock: 33
    },
    {
      name: "Oud Incense Sticks",
      type: "Incense Stick",
      brand: "Exotic Elegance",
      price: 150,
      description: "Luxurious Oud-scented incense sticks for a touch of elegance.",
      rating: 4.9,
      imageUrl: "https://m.media-amazon.com/images/I/71Ez6ntq+aL._AC_UL640_FMwebp_QL65_.jpg",
      countInStock: 48
    },
    {
      name: "Amber Dhoop",
      type: "Dhoop",
      brand: "Amber Essence",
      price: 70,
      description: "Amber-scented dhoop to create a warm and inviting ambiance.",
      rating: 4.0,
      imageUrl: "https://m.media-amazon.com/images/I/71CyOHWMJCS._AC_UL640_FMwebp_QL65_.jpg",
      countInStock: 10
    },
    {
      name: "Palo Santo Incense Cones",
      type: "Incense Cone",
      brand: "Spiritual Sanctum",
      price: 135,
      description: "Palo Santo-scented incense cones for spiritual cleansing.",
      rating: 4.8,
      imageUrl: "https://m.media-amazon.com/images/I/71nxcfPgedL._AC_UL640_FMwebp_QL65_.jpg",
      countInStock: 42
    },
    {
      name: "Cherry Blossom Incense Sticks",
      type: "Incense Stick",
      brand: "Blossom Bliss",
      price: 110,
      description: "Cherry blossom-scented incense sticks for a delightful atmosphere.",
      rating: 4.7,
      imageUrl: "https://m.media-amazon.com/images/I/71cQYwq2r8L._AC_UL640_FMwebp_QL65_.jpg",
      countInStock: 37
    },
    {
      name: "Jasmine and Sandalwood Dhoop",
      type: "Dhoop",
      brand: "Divine Fusion",
      price: 90,
      description: "Blend of jasmine and sandalwood dhoop for a harmonious experience.",
      rating: 4.4,
      imageUrl: "https://m.media-amazon.com/images/I/41iO6UvkykL._AC_UL640_FMwebp_QL65_.jpg",
      countInStock: 23
    },
    {
      name: "Citrus Burst Incense Cones",
      type: "Incense Cone",
      brand: "Zesty Aromas",
      price: 125,
      description: "Citrus-scented incense cones to uplift your spirits.",
      rating: 4.6,
      imageUrl: "https://m.media-amazon.com/images/I/71SzWbJH4dL._AC_UL640_FMwebp_QL65_.jpg",
      countInStock:40
    }
]  
  
  module.exports = products;