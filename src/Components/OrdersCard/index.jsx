import { ChevronRightIcon } from "@heroicons/react/24/solid";
const OrdersCard = props => {
    const {date, totalPrice, totalProducts} = props;
    return (
        <div className="flex justify-between items-center gap-2 mb-3 border border-black w-80 p-4 rounded-lg">
            <p className="flex justify-between items-center w-full">
                <span className="font-light">{date}</span>
                <span className="font-light">{totalProducts} articles</span>
                <span className="font-medium text-2xl">${totalPrice}</span>                
            </p>
            <ChevronRightIcon className="w-6 h-6 text-black-700 cursor-pointer" />
        </div>
    );
}
export default OrdersCard;