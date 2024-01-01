/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Category = ({ items, title }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10 lg:w-3/4 mx-auto lg:px-0 md:px-5 px-5">
                {
                    items.map(item => <div key={item._id}>
                        <div className="flex items-center">
                            <img className="w-20 h-20 rounded-full" src={item.image} alt="" />
                            <div className="ml-5">
                                <h3 className="font-medium">{item.name} ---------- <span className="text-yellow-500 font-medium">${item.price}</span></h3>
                                <p className="text-justify">{item.recipe}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="card-actions justify-center mt-6 mb-10">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-neutral text-yellow-500">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Category;