// import CategoryBasedData from "../data/categoryBasedData.json"; getDestinationByCategory
// controllers/CategoryBasedController.js
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "categoryBasedData.json");

// Load JSON
let rawData = {};
try {
  rawData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
} catch (err) {
  console.error("Error reading JSON:", err);
}

// Helper to format destinations for frontend
const formatDestination = (destination) => ({
  id: destination.id,
  name: destination.name,
  description: destination.description.overview,
  location: `${
    destination.location.district || destination.location.city || ""
  }, ${destination.state}`,
  famousFor: destination.description.famous_for?.join(", "),
  activities: destination.activities?.map((a) => a.name) || [],
  famousFood:
    destination.famous_food?.local_specialties?.map((f) => f.dish) || [],
  images: [
    ...(destination.images?.main_image
      ? [{ _id: "main", url: destination.images.main_image }]
      : []),
    ...(destination.images?.gallery?.map((url, i) => ({ _id: i, url })) || []),
  ],
  rating: destination.rating?.overall || 0,
});

// Get all categories (overview)
export const getAllCategories = (req, res) => {
  if (!rawData.categories)
    return res.status(500).json({ message: "No categories found" });

  const categoriesOverview = Object.values(rawData.categories).map((cat) => ({
    slug: cat.category_id,
    name: cat.category_name,
    description: cat.category_description,
    destinationsCount: cat.destinations.length,
  }));

  res.json(categoriesOverview);
};

// Get category by slug
export const getDestinationByCategory = (req, res) => {
  const { category } = req.params; // ✅ param name matches router
  console.log("Requested category:", category);

  if (!rawData.categories) {
    return res.status(500).json({ message: "No categories found" });
  }

  const categoryData = rawData.categories[category]; // ✅ lookup by key
  if (!categoryData) {
    return res.status(404).json({ message: "Category not found" });
  }

  const destinations = categoryData.destinations.map(formatDestination);

  res.json({
    categoryName: categoryData.category_name,
    destinations,
  });
};
