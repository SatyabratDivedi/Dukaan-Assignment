import { GoHome } from "react-icons/go";
import { MdOutlineEventNote } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineSound } from "react-icons/ai";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { HiOutlineLightningBolt } from "react-icons/hi";

const Lists =[
    {
        id:1,
        name: 'Home',
        icon:<GoHome/>
    },
    {
        id:2,
        name: 'Orders',
        icon:<MdOutlineEventNote/>
    },
    {
        id:3,
        name: 'Products',
        icon:<PiSquaresFour/>
    },
    {
        id:4,
        name: 'Delivery',
        icon:<CiDeliveryTruck/>
    },
    {
        id:5,
        name: 'Marketing',
        icon:<AiOutlineSound/>
    },
    {
        id:6,
        name: 'Analytics',
        icon:<TbBrandGoogleAnalytics/>
    },
    {
        id:7,
        name: 'Payouts',
        icon:<MdOutlinePayments/>
    },
    {
        id:8,
        name: 'Discounts',
        icon:<TbDiscount2/>
    },
    {
        id:9,
        name: 'Audience',
        icon:<MdOutlinePeopleAlt/>
    },
    {
        id:10,
        name: 'Appearance',
        icon:<IoMdColorPalette/>
    },
    {
        id:11,
        name: 'Plugins',
        icon:<HiOutlineLightningBolt/>
    },
]

export default Lists;