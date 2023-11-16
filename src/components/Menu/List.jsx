/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Category from "./Category";



const List = ({ items,title }) => {
    return (
        <div className="w-[900px] mx-auto">
            <h1 className="text-center font-bold text-3xl mb-10 mt-10">
                {title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    items.map(item => <Category key={item._id} item={item}></Category>)
                }
            </div>
            <div className="flex justify-center mt-5">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-primary">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default List;