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

/////////////////////// Hamburger Menu Link Section
type HamburgerLinkType = {
   id: number;
   title: string;
};

export const HamburgerLinkType: HamburgerLinkType[] = [
   {
      id: 1,
      title: "Home",
   },
   {
      id: 2,
      title: "Manage Product",
   },
   {
      id: 3,
      title: "Manage My Store",
   },
   {
      id: 4,
      title: "Marketing",
   },
   {
      id: 5,
      title: "AWOR",
   },
   {
      id: 6,
      title: "Growth Drivers",
   },
   {
      id: 7,
      title: "About Ace",
   },
   {
      id: 8,
      title: "Analytics Dashboard",
   },
];

/////////////////////// Hamburger Menu Sublink Section
type HamburgerSubLinkType = {
   id: number;
   title: string;
   showIcon?: boolean;
};

export const HamburgerSubLinkType: HamburgerSubLinkType[] = [
   {
      id: 1,
      title: "Inventory & Planograms",
   },
   {
      id: 2,
      title: "Item Management",
   },
   {
      id: 3,
      title: "Order Management",
   },
   {
      id: 4,
      title: "Order Product",
   },
   {
      id: 5,
      title: "Financial",
   },
   {
      id: 6,
      title: "People Management",
   },
   {
      id: 7,
      title: "Security & Prepardness",
   },
   {
      id: 8,
      title: "Services & Delivery",
   },
   {
      id: 9,
      title: "Store Environment",
   },
   {
      id: 10,
      title: "Systems & Operations",
   },
   {
      id: 11,
      title: "Ace Rewards",
   },
   {
      id: 12,
      title: "Digital Marketing",
   },
   {
      id: 13,
      title: "Traditional Marketing",
   },
   {
      id: 14,
      title: "Promotions",
   },
   {
      id: 15,
      title: "AWOR Home Page",
   },
   {
      id: 16,
      title: "Business to Business",
   },
   {
      id: 17,
      title: "E-Commerce",
   },
   {
      id: 18,
      title: "Financial Management",
   },
   {
      id: 19,
      title: "Helpful Customer Service",
   },
   {
      id: 20,
      title: "Inventory Management",
   },
   {
      id: 21,
      title: "Loss Prevention",
   },
   {
      id: 22,
      title: "Marketing & Promotions",
   },
   {
      id: 23,
      title: "People Management",
   },
   {
      id: 24,
      title: "Ace Initiatives",
   },
   {
      id: 25,
      title: "Business Specialties",
   },
   {
      id: 26,
      title: "Level 3 Programs",
   },
   {
      id: 27,
      title: "Retail Growth Strategy",
   },
   {
      id: 28,
      title: "Company Information",
   },
   {
      id: 29,
      title: "Conventions",
   },
   {
      id: 30,
      title: "International Retailers",
   },
   {
      id: 31,
      title: "Operations",
   },
];

/////////////////////// Hamburger Menu Sublink2 Section
type HamburgerSubLink2Type = {
	id: number;
	title: string;
	showIcon: boolean;
};

export const HamburgerSubLink2Type: HamburgerSubLinkType[] = [
	{
		id: 1,
		title: "Category Management",
	},
	{
		id: 2,
		title: "Departments",
	},
	{
		id: 3,
		title: "Inventory Management",
	},
	{
		id: 4,
		title: "Inventory Health Check",
	},
	{
		id: 5,
		title: "Legislative Issues",
	},
	{
		id: 6,
		title: "Opportunity Report",
		showIcon: true,
	},
	{
		id: 7,
		title: "Planograms",
		showIcon: true,
	},
	{
		id: 8,
		title: "Product Recalls & Stop Sales",
	},
	{
		id: 9,
		title: "Chemical Lookup",
		showIcon: true,
	},
	{
		id: 10,
		title: "Claims",
		showIcon: true,
	},
	{
		id: 11,
		title: "Defective Goods",
		showIcon: true,
	},
	{
		id: 12,
		title: "Item Change Management",
		showIcon: true,
	},
	{
		id: 13,
		title: "Mobile Item Lookup",
		showIcon: true,
	},
	{
		id: 14,
		title: "Planogram Change Management",
		showIcon: true,
	},
	{
		id: 15,
		title: "Pricing",
	},
	{
		id: 16,
		title: "Pricing Profile",
		showIcon: true,
	},
	{
		id: 17,
		title: "Request Bin Tags",
		showIcon: true,
	},
	{
		id: 18,
		title: "Request Hotsheet",
		showIcon: true,
	},
	{
		id: 19,
		title: "Safety Data Sheets",
		showIcon: true,
	},
	{
		id: 20,
		title: "Suppress Bin Tags",
		showIcon: true,
	},
	{
		id: 21,
		title: "View Hotsheets/Invoices",
		showIcon: true,
	},
	{
		id: 22,
		title: "Weather Sales Impact",
	},
	{
		id: 23,
		title: "AceHardware.com Listing",
		showIcon: true,
	},
	{
		id: 24,
		title: "Customer Orders",
		showIcon: true,
	},
	{
		id: 25,
		title: "Customer Priority Order Listing",
		showIcon: true,
	},
	{
		id: 26,
		title: "Management & Receiving Docs",
		showIcon: true,
	},
	{
		id: 27,
		title: "Order Tracking",
		showIcon: true,
	},
	{
		id: 28,
		title: "Special Order Listing",
		showIcon: true,
	},
	{
		id: 29,
		title: "Stock Reserve Backorder Listing",
		showIcon: true,
	},
	{
		id: 30,
		title: "Stock Reserve Listing",
		showIcon: true,
	},
	{
		id: 31,
		title: "Batch/Quick Entry",
		showIcon: true,
	},
	{
		id: 32,
		title: "Browse Product & Vendors",
		showIcon: true,
	},
	{
		id: 33,
		title: "Conversion Batch/Quick Entry",
		showIcon: true,
	},
	{
		id: 34,
		title: "Discovery Assortment Planner",
		showIcon: true,
	},
	{
		id: 35,
		title: "Dropship Programs",
	},
	{
		id: 36,
		title: "Event Planner",
		showIcon: true,
	},
	{
		id: 37,
		title: "International Deals",
		showIcon: true,
	},
	{
		id: 38,
		title: "Paint Chips (Ace/C+K)",
		showIcon: true,
	},
	{
		id: 39,
		title: "Paint Chips (Benjamin Moore)",
		showIcon: true,
	},
	{
		id: 40,
		title: "Paint Chips (Magnolia Home)",
		showIcon: true,
	},
	{
		id: 41,
		title: "Preseason Planner",
		showIcon: true,
	},
	{
		id: 42,
		title: "Ace Bankcard - Online Settlement",
		showIcon: true,
	},
	{
		id: 43,
		title: "Ace Gift Card - Settlement Portal",
		showIcon: true,
	},
	{
		id: 44,
		title: "Ace Online Statement",
		showIcon: true,
	},
	{
		id: 45,
		title: "Ace Statement Coding",
		showIcon: true,
	},
	{
		id: 46,
		title: "Ace Statement - Current Activity",
		showIcon: true,
	},
	{
		id: 47,
		title: "Ace Statement & Invoices",
		showIcon: true,
	},
	{
		id: 48,
		title: "Bankcard Program",
	},
	{
		id: 49,
		title: "Financial Management",
	},
	{
		id: 50,
		title: "Gift Card",
	},
	{
		id: 51,
		title: "SAVINGSource",
	},
	{
		id: 52,
		title: "Ace Learning Place",
		showIcon: true,
	},
	{
		id: 53,
		title: "ACENET Security Administration",
		showIcon: true,
	},
	{
		id: 54,
		title: "Helpful Experience Dashboard",
		showIcon: true,
	},
	{
		id: 55,
		title: "Helpful Experience Programs",
	},
	{
		id: 56,
		title: "People First Planner",
	},
	{
		id: 57,
		title: "Recruiting & Employment",
	},
	{
		id: 58,
		title: "Retailer Self-Assessment Survey",
		showIcon: true,
	},
	{
		id: 59,
		title: "Retail Training & PRS",
	},
	{
		id: 60,
		title: "Ace Insurance",
	},
	{
		id: 61,
		title: "Disaster Preparation",
	},
	{
		id: 62,
		title: "Loss Prevention",
	},
	{
		id: 63,
		title: "Delivery and Services",
		showIcon: true,
	},
	{
		id: 64,
		title: "Store Services",
	},
	{
		id: 65,
		title: "Store Environment Resources",
	},
	{
		id: 66,
		title: "Ace Way of Retailing",
	},
	{
		id: 67,
		title: "ADW Reports",
		showIcon: true,
	},
	{
		id: 68,
		title: "Retail Technology",
	},
	{
		id: 69,
		title: "Ace Rewards Program",
	},
	{
		id: 70,
		title: "Ace Rewards Maintenance",
		showIcon: true,
	},
	{
		id: 71,
		title: "Ace Marketing Muscle",
		showIcon: true,
	},
	{
		id: 72,
		title: "Ace Style Guide",
		showIcon: true,
	},
	{
		id: 73,
		title: "acehardware.com",
	},
	{
		id: 74,
		title: "Brandfolder",
	},
	{
		id: 75,
		title: "Local Email",
	},
	{
		id: 76,
		title: "PR & Social Media",
	},
	{
		id: 77,
		title: "Search & Online Marketing",
	},
	{
		id: 78,
		title: "SOCi",
		showIcon: true,
	},
	{
		id: 79,
		title: "Webstop Digital Circular",
	},
	{
		id: 80,
		title: "100th Anniversary",
	},
	{
		id: 81,
		title: "Ace Brand Identity Standards",
		showIcon: true,
	},
	{
		id: 82,
		title: "Local",
	},
	{
		id: 83,
		title: "Media Advertising",
	},
	{
		id: 84,
		title: "Media Manager",
		showIcon: true,
	},
	{
		id: 85,
		title: "Win the Month",
	},
	{
		id: 86,
		title: "In-Store Parties & Demos",
	},
	{
		id: 87,
		title: "Sign Kit Customization",
		showIcon: true,
	},
	{
		id: 88,
		title: "Vendor Promotional Pricing Changes",
	},
	{
		id: 89,
		title: "B2B on Acehardware.com",
	},
	{
		id: 90,
		title: "System Setup & Maintenance",
	},
	{
		id: 91,
		title: "Order Management",
	},
	{
		id: 92,
		title: "Accounts Payable",
	},
	{
		id: 93,
		title: "Accounts Receivable",
	},
	{
		id: 94,
		title: "Financial Reconciliation",
	},
	{
		id: 95,
		title: "Financing & Funding",
	},
	{
		id: 96,
		title: "Payroll Processing",
	},
	{
		id: 97,
		title: "Reports & Measurements",
	},
	{
		id: 98,
		title: "Staffing & Organization",
	},
	{
		id: 99,
		title: "Helpful Experience",
	},
	{
		id: 100,
		title: "Measure Helpful",
	},
	{
		id: 101,
		title: "In-Stock Position",
	},
	{
		id: 102,
		title: "Inventory Record Accuracy",
	},
	{
		id: 103,
		title: "Item Setup",
	},
	{
		id: 104,
		title: "Merchandising",
	},
	{
		id: 105,
		title: "Ordering",
	},
	{
		id: 106,
		title: "Point of Sale Transactions",
	},
	{
		id: 107,
		title: "Reports & Measurements",
	},
	{
		id: 108,
		title: "Unproductive Inventory",
	},
	{
		id: 109,
		title: "Physical Security",
	},
	{
		id: 110,
		title: "Store Operations",
	},
	{
		id: 111,
		title: "Ace Rewards",
	},
	{
		id: 112,
		title: "Digital Marketing",
	},
	{
		id: 113,
		title: "Gift Cards",
	},
	{
		id: 114,
		title: "Local Marketing",
	},
	{
		id: 115,
		title: "Marketing Planning",
	},
	{
		id: 116,
		title: "Promotional Ordering & Execution",
	},
	{
		id: 117,
		title: "Retail Pricing",
	},
	{
		id: 118,
		title: "Accounting and Tax",
	},
	{
		id: 119,
		title: "Demand Scheduling and Timekeeping",
	},
	{
		id: 120,
		title: "Manage and Coach",
	},
	{
		id: 121,
		title: "Org Chart / Job Descriptions",
	},
	{
		id: 122,
		title: "Payroll and Benefits",
	},
	{
		id: 123,
		title: "Recruit, Hire and Onboard",
	},
	{
		id: 124,
		title: "Train and Develop",
	},
	{
		id: 125,
		title: "Customer First Sales Culture",
	},
	{
		id: 126,
		title: "ELEVATE Ace",
	},
	{
		id: 127,
		title: "Famous for Four",
	},
	{
		id: 128,
		title: "Local Lift Max",
	},
	{
		id: 129,
		title: "Logistics Revolution",
	},
	{
		id: 130,
		title: "Win Big in Q4",
	},
	{
		id: 131,
		title: "YardRx",
	},
	{
		id: 132,
		title: "Ace Hardware Home Services",
	},
	{
		id: 133,
		title: "B2B - Business to Business",
		showIcon: true,
	},
	{
		id: 134,
		title: "B2B Online Account Management",
		showIcon: true,
	},
	{
		id: 135,
		title: "B2B - Paint",
		showIcon: true,
	},
	{
		id: 136,
		title: "Drop Ship Building Materials",
	},
	{
		id: 137,
		title: "LED Savings Estimator",
		showIcon: true,
	},
	{
		id: 138,
		title: "Rental",
	},
	{
		id: 139,
		title: "Hand Tools Level 3",
	},
	{
		id: 140,
		title: "Impulse",
	},
	{
		id: 141,
		title: "Power Tool Accessories",
	},
	{
		id: 142,
		title: "STIHL",
	},
	{
		id: 143,
		title: "ADW Reports",
		showIcon: true,
	},
	{
		id: 144,
		title: "Higher Ground",
	},
	{
		id: 145,
		title: "Retail Analytics Dashboard",
		showIcon: true,
	},
	{
		id: 146,
		title: "Store Growth",
	},
	{
		id: 147,
		title: "Ace Foundation",
	},
	{
		id: 148,
		title: "Ace Helpful Fund",
	},
	{
		id: 149,
		title: "Company Information",
	},
	{
		id: 150,
		title: "Retail Support & Logistics",
	},
	{
		id: 151,
		title: "Retailers & Groups",
	},
	{
		id: 152,
		title: "Stockholder Relations",
	},
	{
		id: 153,
		title: "2025 Spring Convention",
	},
	{
		id: 154,
		title: "Future Conventions",
	},
	{
		id: 155,
		title: "International Programs & Information",
	},
	{
		id: 156,
		title: "Ace Identity Standards",
	},
	{
		id: 157,
		title: "Ace Way of Retailing",
	},
	{
		id: 158,
		title: "General Member Standards / Ace Brand",
	},
	{
		id: 159,
		title: "Standards",
	},
	{
		id: 160,
		title: "Help",
	},
];