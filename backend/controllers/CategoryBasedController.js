// controllers/CategoryBasedController.js
import fs from "fs";
import path from "path";

// const categoryPath = path.join(process.cwd(), "backend", "data", "categories");
const categoryPath = path.join(process.cwd(), "data", "categories");

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

// ✅ Get category by slug
export const getDestinationByCategory = (req, res) => {
  const { category } = req.params;
  const filePath = path.join(categoryPath, `${category}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "Category not found" });
  }

  try {
    const rawData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const destinations = rawData.destinations.map(formatDestination);

    res.json({
      categoryName: rawData.category_name,
      destinations,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error reading category file", error: err });
  }
};

// ✅ Get destination by ID (search across all files)
// controllers/CategoryBasedController.js
export const getDestinationById = (req, res) => {
  const { category, id } = req.params;
  const filePath = path.join(categoryPath, `${category}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "Category not found" });
  }

  try {
    const rawData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const destination = rawData.destinations.find((d) => d.id === id);

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    // Return both a formatted version and the full raw object (so different pages can use what they need)
    res.json({
      // category: rawData.category_name || category,
      destination, // the selected destination in full
      // the entire category JSON file
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error reading destination", error: err.toString() });
  }
};
