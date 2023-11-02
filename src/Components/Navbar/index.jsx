
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
const activeStyle = "underline underline-offset-4";
const Navbar = () =>{
    const context = useContext(ShoppingCartContext);
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 bg-violet-800 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3 text-white">
                <li className="font-semibold text-lg">
                    <NavLink to={'/'}>
                        Shopi        
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/'}
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        All        
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/clothes'}
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        Clothes        
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/electronics'}
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        Electronics       
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/furnitures'}
                        onClick={() => context.setSearchByCategory('furnitures')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        Furnitures        
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/toys'}
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        Toys       
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/others'}
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        Others        
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3 text-white">
                <li className="text-white/60">
                  user@dominio.com
                </li>
                <li>
                    <NavLink to={'/my-orders'}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/my-account'}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'sign-in'}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingCartIcon className="w-6 h-6 text-white" /> 
                    <div>{context.cartProducts.length}</div>
                </li>
                <li></li>
            </ul>
        </nav>
    );
}

export default Navbar;