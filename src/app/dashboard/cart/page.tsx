import { ItemCard } from "@/components/dashboard/cart/itemCard";
import { Product, products } from "@/components/dashboard/productos/data/products";
import { cookies } from "next/headers";


export const metadata = {
    title: 'Productos en el carrito',
    description: 'Productos en el carrito',
};
interface ProductInCart {
    product: Product;
    quantity: number;
}
const getProductsInCart = (cart: { [id: string]: number }) => {
    const productsInCart: ProductInCart[] = [];

    for (const id of Object.keys(cart)) {
        const product = products.find((product) => product.id === id);
        if (product) {
            productsInCart.push({
                product,
                quantity: cart[id]
            });
        }
    }
    return productsInCart;
}


export default async function CartPage() {

    const cookieStore = await cookies();
    const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}');
    const productsInCart = getProductsInCart(cart);
    return (
        <div>
            <h1 className="text-5xl ">Productos en el carrito</h1>
            <hr className="mb-2" />
            <div className="flex flex-col sm:flex-row gap-2  w-full">

                <div className="flex flex-col gap-2 sm:w-8/12">
                    {
                        productsInCart.length > 0 ? (
                            productsInCart.map((item, index) => (
                                <ItemCard key={index} product={item.product} quantity={item.quantity} />
                            ))
                        ) : (
                            <div className="text-center text-gray-500">
                                No hay productos en el carrito
                            </div>
                        )
                    }

                </div>

            </div>
        </div>
    );
}