import { FC, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Breadcrumb from "../components/ui/Breadcrumb";
import FilterSidebar from "../components/ui/FilterSidebar";
import ProductSort from "../components/ui/ProductSort";
import ProductGrid, { Product } from "../components/ui/ProductGrid";
import Pagination from "../components/ui/Pagination";
import { fetchProducts } from "../utils/fetchProducts";

const SweatshirtPage: FC = () => {
  const { category } = useParams<{ category: string }>(); // Get category from URL
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const breadcrumbItems = [
    { label: "Category", href: "/category" },
    { label: category || "All Products", href: `/category/${category || ""}`, current: true },
  ];

  const fetchFilteredProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const fetchedProducts = await fetchProducts(category);
      setProducts(fetchedProducts);
      setError(null);
    } catch (err) {
      setError("Failed to load products. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchFilteredProducts();
  }, [fetchFilteredProducts]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[20%] w-full border-r-2 border-solid border-[#f1f1f1]">
            <FilterSidebar
              onFilterChange={() => {}}
              onPriceChange={() => {}}
              onApplyFilters={() => {}}
              onClearFilters={() => {}}
              onSearchChange={() => {}}
            />
          </div>
          <div className="lg:w-3/4 w-full">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex justify-between items-center mt-4 mb-2">
              <h1 className="text-2xl font-bold">{category || "All Products"}</h1>
              <ProductSort
                currentSort={"most-popular"}
                currentView="grid"
                onSortChange={() => {}}
                onViewChange={() => {}}
              />
            </div>
            <div className="mt-6">
              {isLoading ? (
                <div className="py-12 text-center">Loading products...</div>
              ) : (
                <ProductGrid products={products} view="grid" />
              )}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={20}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SweatshirtPage;