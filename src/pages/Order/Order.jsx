import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import Cover from "../../components/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OrderTab from "./OrderTab";
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['Salad', 'Pizza', 'Soup', 'Dessert', 'Drinks', 'Popular']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'Dessert');
    const soup = menu.filter(item => item.category === 'Soup');
    const pizza = menu.filter(item => item.category === 'Pizza');
    const salad = menu.filter(item => item.category === 'Salad');
    const drinks = menu.filter(item => item.category === 'Drinks');
    const popular = menu.filter(item => item.category === 'Popular');
    return (
        <div>
            <Cover></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="lg:w-1/2 mx-auto text-center lg:px-0 md:px-5 px-5 mt-5 mb-10">
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                        <Tab>Popular</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={popular}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;