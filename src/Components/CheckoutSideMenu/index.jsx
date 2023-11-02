import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import  OrderCard  from "../OrderCard";
import { totalPrice } from "../../utils";
const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
    }
    const handleCheckout = () => {
        const time = Date.now();
        const today = new Date(time);
        const orderToAdd = {
            date: today.toLocaleDateString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        };
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.closeCheckoutSideMenu();
        context.setSearchBytitle(null);
    }
    return (
        <aside className={`${ context.isCheckoutSideMenuOpen ? "flex" : "hidden" } w-[360px] flex-col fixed right-0 bg-white border border-black rounded-lg h-[calc(100vh-80px)] top-20`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
                </div>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {
                    context.cartProducts.map(product => (
                        <OrderCard key = {product.id} id = {product.id} title = {product.title} imageUrl = {product.images} price = {product.price} handleDelete = {handleDelete} />
                    ))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-ligth">Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-order/last">
                    <button className="bg-black py-3 text-white w-full rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    );
}
export default CheckoutSideMenu;