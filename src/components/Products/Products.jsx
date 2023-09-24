import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 container mx-auto py-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
