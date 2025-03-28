import { Product } from "../components/ui/ProductGrid";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const fetchProducts = async (category?: string): Promise<Product[]> => {
  try {
    let q = query(collection(db, "products"));

    // Add category filter if provided
    if (category) {
      q = query(q, where("category", "==", category));
    }

    // Fetch data from Firestore
    const querySnapshot = await getDocs(q);
    const products: Product[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      products.push({
        id: doc.id,
        name: data.name,
        image: data.image,
        price: data.price,
        category: data.category,
        color: data.color || [],
        size: data.size || [],
        type: data.type || [],
        isNew: data.isNew,
        tags: data.tags,
        createdAt: data.createdAt,
      } as Product);
    });

    return products;
  } catch (error) {
    console.error("Error fetching products from Firebase:", error);
    throw error;
  }
};