import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside className={`${ context.isProductDetailOpen ? "flex" : "hidden" } w-[360px] flex-col fixed right-0 bg-white border border-black rounded-lg h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
                </div>
            </div>
            <div className="overflow-y-scroll flex-1">
                <figure className="px-6">
                    <img 
                    className="w-full h-full rounded-lg" 
                    src={context?.productToShow?.images} 
                    alt={context.productToShow.title} />
                </figure>
                <p className="flex flex-col p-6">
                    <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
                    <span className="font-medium text-md">{context.productToShow.title}</span>
                    <span className="font-ligth text-sm">{context.productToShow.description}</span>

                </p>
            </div>
        </aside>
    );
}
export default ProductDetail;