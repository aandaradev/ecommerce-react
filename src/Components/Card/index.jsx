import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
const Card = (data) =>{
    let product = data.data;
    const context = useContext(ShoppingCartContext);
    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
        context.closeCheckoutSideMenu();
    }
    const addProductsToCart = (e,productData) => {
        e.stopPropagation();
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    }
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
        if (isInCart) {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2">
                    <CheckIcon className="h-6 w-6 text-white" onClick={(e) => e.stopPropagation()} />
                </div>
            );
        } else {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2" 
                onClick={(e) => addProductsToCart(e,product)}>
                    <PlusIcon className="h-6 w-6 text-black" />
                </div>
            );
        }
    }
    return (       
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg text-black text-sm" onClick={() => showProduct(product)}>
            <figure className="relative w-full h-4/5 mb-3">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs m-2 px-3 py-0.5">{product?.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={product.images[0]} alt={product.title} />
                {renderIcon(product.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{product.title}</span>
                <span className="text-lg font-medium">${product.price}</span>
            </p>
        </div>
    );
}
export default Card;