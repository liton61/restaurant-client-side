/* eslint-disable react/prop-types */


const PopularMenuCard = ({ item }) => {
    const { name, price, image, recipe } = item;
    return (
        <div className="flex items-center">
            <img className="w-24 h-24 rounded-full" src={image} alt="" />
            <div className="ml-5">
                <h3>{name} ---------- ${price}</h3>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default PopularMenuCard;