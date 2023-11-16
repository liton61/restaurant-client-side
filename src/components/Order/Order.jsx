import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../Hooks/useMenu";
import OrderTabs from "./OrderTabs";
import { useParams } from "react-router-dom";


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks', 'offered', 'popular'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const popular = menu.filter(item => item.category === 'popular');
    const drinks = menu.filter(item => item.category === 'drinks');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div className="mt-20">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="w-1/2 mx-auto mb-10">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Offered</Tab>
                    <Tab>Popular</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={dessert}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={offered}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={popular}></OrderTabs>
                </TabPanel>
            </Tabs>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
        </div>
    );
};

export default Order;