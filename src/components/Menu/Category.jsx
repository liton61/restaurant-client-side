/* eslint-disable react/prop-types */


const Category = ({ item }) => {
    const { name, image, price } = item;
    return (
        <div className="flex items-center">
            <img className="w-24 h-24 rounded-full" src={image} alt="" />
            <h1 className="ml-5 text-base font-medium text-yellow-500">{name}-------------${price}</h1>
        </div>
    );
};

export default Category;