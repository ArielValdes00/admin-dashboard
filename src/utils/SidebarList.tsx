import IconArrow from "../../public/icons/IconArrow";
import IconHome from "../../public/icons/IconHome";
import IconProducts from "../../public/icons/IconProducts";

interface SidebarItem {
    icon: React.ComponentType<{ color: string }>;
    name: string;
}

export const sidebarItems: SidebarItem[] = [
    {
        icon: IconHome,
        name: 'Inicio',
    },
    {
        icon: IconProducts,
        name: 'Products',
    },
    {
        icon: IconProducts,
        name: 'Customers',
    },
    {
        icon: IconProducts,
        name: 'Sells',
    },
    {
        icon: IconProducts,
        name: 'Settings',
    },
];