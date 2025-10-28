import { motion } from "framer-motion";

function FridayContent() {
    return (
        <main>
            <center>
                <div className="menu_parent">
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                        <div className="menu_div1">
                            <div className="menu_sub_part_div1">
                                <font className='menu_title_name'>
                                    Breakfast
                                </font>
                            </div>
                            <div className="menu_sub_part_div2">
                                <font className='menu_description'>
                                    07:00 - 10:00
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='menu_description'>
                                    <ul>
                                        <li>Veg Noodles, Ketchup</li>
                                        <li>Bread, Jam, Butter, Boiled Egg</li>
                                        <li>Tea</li>
                                    </ul>
                                </font>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="menu_div2">
                            <div className="menu_sub_part_div1">
                                <font className='menu_title_name'>
                                    Lunch
                                </font>
                            </div>
                            <div className="menu_sub_part_div2">
                                <font className='menu_description'>
                                    13:00 - 15:00
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='menu_description'>
                                    <ul>
                                        <li>Rice, Roti, Dal, Mix Boiled Veg</li>
                                        <li>Fish Masala, Besan Alu Curry, Seasonal Bhaji</li>
                                        <li>Frimes</li>
                                    </ul>
                                </font>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.55, ease: "easeInOut" }}
                    >
                        <div className="menu_div3">
                            <div className="menu_sub_part_div1">
                                <font className='menu_title_name'>
                                    Snacks
                                </font>
                            </div>
                            <div className="menu_sub_part_div2">
                                <font className='menu_description'>
                                    18:00 - 19:00
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='menu_description'>
                                    <ul>
                                        <li>Chicken Soup</li>
                                        <li>Veg Soup</li>
                                    </ul>
                                </font>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        <div className="menu_div4">
                            <div className="menu_sub_part_div1">
                                <font className='menu_title_name'>
                                    Dinner
                                </font>
                            </div>
                            <div className="menu_sub_part_div2">
                                <font className='menu_description'>
                                    20:00 - 22:00
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='menu_description'>
                                    <ul>
                                        <li>Chicken Biryani</li>
                                        <li>Mix Veg Biryani</li>
                                        <li>Raita</li>
                                    </ul>
                                </font>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </center>
        </main>
    );
}

export default FridayContent;
