/* eslint-disable react/prop-types */
import Card from "./Card";


const OrderTabs = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                items.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};

export default OrderTabs;