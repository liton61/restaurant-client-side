/* eslint-disable react/prop-types */


const SaladCard = ({ item }) => {
    const { name, price, image, description, rating } = item;
    return (
        <div>
            <div className="card card-compact lg:w-80 lg:mb-5 md:w-80 mx-auto md:mb-10 bg-base-100 shadow-xl mb-10">
                <figure><img className="w-full h-60" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}
                        <div className="badge badge-secondary">{rating}</div></h2>
                    <p className="font-medium">Price : ${price}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-neutral text-yellow-500">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaladCard;