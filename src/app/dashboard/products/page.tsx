import { ProductCard } from "@/components/dashboard/productos/Card";
import { products } from "@/components/dashboard/productos/data/products";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
      
      {
        products.map(product =>(
          <ProductCard key={product.id} {...product}/>

        ))
      }
    </div>
  );
}