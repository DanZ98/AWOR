/////////////////////// Icon Section
import financialManagementIcon from './assets/img/FinancialManagement.svg';
import inventoryManagementIcon from './assets/img/InventoryManagement.svg';
import lossPreventionIcon from './assets/img/LossPrevention.svg';
import marketingPromotionsIcon from './assets/img/MarketingPromotions.svg';
import peopleManagementIcon from './assets/img/PeopleManagement.svg';
import eCommerceIcon from './assets/img/eCommerce.svg';
import storeEnvironment from './assets/img/StoreEnvironment.svg';
import b2b from './assets/img/B2BPoliciesProcedures.svg';
import Unproductive_inventory from './assets/img/Unproductive_Inventory_Icon.svg';
import Instock_Position from './assets/img/Instock_Position_Icon.svg';
import Ordering_Icon from './assets/img/Ordering_Icon.svg';
import Manage_and_Coach from './assets/img/Manage_and_Coach_Icon.svg'
import awor_icon from './assets/img/awor_icon.svg';

type IconDataType = {
  id: number;
  title: string;
  img: string;
}

export const IconData: IconDataType[] = [
  {
    id: 1,
    title: 'Financial Management',
    img: financialManagementIcon,
  },
  {
    id: 2,
    title: 'Inventory Management',
    img: inventoryManagementIcon,
  },
  {
    id: 3,
    title: 'Loss Prevention',
    img: lossPreventionIcon,
  },
  {
    id: 4,
    title: 'Marketing & Promotions',
    img: marketingPromotionsIcon,
  },
  {
    id: 5,
    title: 'People Management',
    img: peopleManagementIcon,
  },
  {
    id: 6,
    title: 'eCommerce',
    img: eCommerceIcon,
  },
  {
    id: 7,
    title: 'Store Environment',
    img: storeEnvironment,
  },
  {
    id: 8,
    title: 'Business to Business',
    img: b2b,
  },
];

/////////////////////// Pills Section
type PillsDataType = {
  id: number;
  title: string;
}

export const PillsData: PillsDataType[] = [
  {
    id: 1,
    title: 'Financial',
  },
  {
    id: 2,
    title: 'Financial Inventory',
  },
  {
    id: 3,
    title: 'Financial Reports',
  },
  {
    id: 4,
    title: 'Inventory Reports',
  },
  {
    id: 5,
    title: 'Inventory Ledgers',
  },
  {
    id: 6,
    title: 'Loss Prevention Reports',
  },
  {
    id: 7,
    title: 'Marketing Reports',
  },
  {
    id: 8,
    title: 'Promotions Stats',
  },
  {
    id: 9,
    title: 'Promotions Archives',
  },
  {
    id: 10,
    title: 'People Policies',
  },
  {
    id: 11,
    title: 'People Performance',
  },
  {
    id: 12,
    title: 'People Training',
  },
  {
    id: 13,
    title: 'People Surveys',
  },
  {
    id: 14,
    title: 'People Reviews',
  },
  {
    id: 15,
    title: 'Ecommerce Reports',
  },
  {
    id: 16,
    title: 'Ecormmerce Sales',
  },
  {
    id: 17,
    title: 'Ecommerce Inventory',
  },
  {
    id: 18,
    title: 'Ecormmerce Promotions',
  },
  {
    id: 19,
    title: 'Ecormmerce Marketing',
  },
  {
    id: 20,
    title: 'Ecormmerce Reviews',
  },
  {
    id: 21,
    title: 'Ecormmerce Surveys',
  },
  {
    id: 22,
    title: 'Store Environment',
  },
  {
    id: 23,
    title: 'Store Policies',
  },
  {
    id: 24,
    title: 'B2B Procedures',
  },
  {
    id: 25,
    title: 'B2B Reports',
  },
  {
    id: 26,
    title: 'B2B Status',
  },
];

///////////////////////Store Cards Section
type StoreDataType = {
  id: number;
  title: string;
  description: string;
  metric: string;
  goal: string;
  link: string;
}

export const StoreCardsData: StoreDataType[] = [
  {
    id: 100,
    title: 'Sales',
    description: 'Overall Customer Satisfaction',
    metric: '100%',
    goal: '80%',
    link: 'https://acenet.aceservices.com/awor/promotional-ordering-and-execution/dynamic-promotions-instant-savings'
  },
  {
    id: 200,
    title: 'SOCi',
    description: 'Review Response Time (Hrs)',
    metric: '55 hrs',
    goal: '< 24 hrs',
    link: 'https://acenet.aceservices.com/awor/train-and-develop/associate-badge-program'
  },
  {
    id: 300,
    title: 'Employee Engagement',
    description: 'Employee Engagement',
    metric: '75%',
    goal: '80%',
    link: 'https://acenet.aceservices.com/awor/manage-and-coach/employee-engagement-survey'
  },
  {
    id: 400,
    title: 'Ace Marketing Muscle',
    description: 'Total Emails Deployed',
    metric: '0%',
    goal: '2-4/month',
    link: 'https://acenet.aceservices.com/awor/ordering/economic-order-quantities'
  },
  {
    id: 500,
    title: 'Optimal Shelf Quantity',
    description: 'Min Order Point Acceptance',
    metric: '42%',
    goal: '80%',
    link: 'https://acenet.aceservices.com/awor/inventory-record-accuracy/achieving-inventory-accuracy'
  },
];

/////////////////////// Topics Section
type TopicsDataType = {
  id: number;
  title: string;
}

export const TopicsData: TopicsDataType[] = [
  {
    id: 1,
    title:'Trending topics',
  
  },
  {
    id: 2,
    title:'Latest topics',
   
  },
];

type TrendingDataType = {
  id: number;
  title: string;
  img: string;
}

export const TrendingContentData: TrendingDataType[] = [
  {
    id: 1,
    title:'In-Stock Position',
    img: Unproductive_inventory
  },
  {
    id: 2,
    title:'Obsolete Inventory',
    img: Ordering_Icon
  },
  {
    id: 3,
    title:'Economic Order Quantities',
    img: Instock_Position
  },
  {
    id: 4,
    title:'Employee Engagement Survey',
    img: Ordering_Icon
  },
  {
    id: 5,
    title:'Minimum Order Point',
    img: Manage_and_Coach
  }
];

type LatestDataType = {
  id: number;
  title: string;
  img: string;
}

export const LatestContentData: LatestDataType[] = [
  {
    id: 6,
    title:'Customer Returns',
    img: awor_icon
  },
  {
    id: 7,
    title:'Vendor Rebate Credits in Propello',
    img: awor_icon
  },
  {
    id: 8,
    title:'QuickBooks Online (QBO) Integration - Propello',
    img: awor_icon
  },
  {
    id: 9,
    title:'Inventory Shrinkage',
    img: awor_icon
  },
  {
    id: 10,
    title:'Receiving Ace Orders',
    img: awor_icon
  },
];

/////////////////////// Store Login Section
type StoreLoginLinksType = {
  id: number;
  title: string;
}

export const StoreLoginLinks:StoreLoginLinksType[] = [
  {
    id: 1,
    title: 'News Archive',
  },
  {
    id: 2,
    title: 'Discussion Boards',
  },
  {
    id: 3,
    title: 'People & Store Search',
  },
  {
    id: 4,
    title: 'Help',
  },
  {
    id: 5,
    title: 'Ace Way of Retailing',
  },
  {
    id: 6,
    title: 'Settings',
  },
  {
    id: 7,
    title: 'End Store Session',
  },
  {
    id: 8,
    title: 'Logout',
  },
];
