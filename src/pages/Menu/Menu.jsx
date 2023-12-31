import { useState } from "react";
import Cover from "../../components/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import MenuTab from "./MenuTab";


const Menu = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
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
                    </TabList>
                </div>
                <TabPanel>
                    <MenuTab items={salad}></MenuTab>
                </TabPanel>
                <TabPanel>
                    <MenuTab items={pizza}></MenuTab>
                </TabPanel>
                <TabPanel>
                    <MenuTab items={soup}></MenuTab>
                </TabPanel>
                <TabPanel>
                    <MenuTab items={dessert}></MenuTab>
                </TabPanel>
                <TabPanel>
                    <MenuTab items={drinks}></MenuTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Menu;