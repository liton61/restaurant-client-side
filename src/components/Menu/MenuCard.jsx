/* eslint-disable react/prop-types */


const MenuCard = ({ item }) => {
    const { name, price, image, recipe } = item;
    return (
        <div className="flex items-center">
            <img className="w-20 h-20 rounded-full" src={image} alt="" />
            <div className="ml-5">
                <h3 className="font-medium">{name} ---------- <span className="text-yellow-500 font-medium">${price}</span></h3>
                <p className="text-justify">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuCard;