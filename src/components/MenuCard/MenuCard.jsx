/* eslint-disable react/prop-types */


const MenuCard = ({ item }) => {
    const { name, image, category, recipe, price } = item;
    return (
        <div className="flex items-center gap-5 mb-5">
            <img className="w-24 h-24 rounded-full" src={image} alt="" />
            <div>
                <h3 className="text-xl font-semibold text-yellow-500">{name}----------${price}</h3>
                <p>{recipe}</p>
                <p className="text-lg font-medium">{category}</p>
            </div>
        </div>
    );
};

export default MenuCard;