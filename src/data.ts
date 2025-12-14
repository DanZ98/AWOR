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
	url: string;
};

export const HamburgerSubLink2Type: HamburgerSubLink2Type[] = [
	{
		id: 1,
		title: "Category Management",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-product/inventory-and-planograms/category-management",
	},
	{
		id: 2,
		title: "Departments",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-product/inventory-and-planograms/departments",
	},
	{
		id: 3,
		title: "Inventory Management",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-product/inventory-and-planograms/inventory-management",
	},
	{
		id: 4,
		title: "Inventory Health Check",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-product/inventory-and-planograms/inventory-health-check",
	},
	{
		id: 5,
		title: "Legislative Issues",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-product/inventory-and-planograms/legislative-issues",
	},
	{
		id: 6,
		title: "Opportunity Report",
		showIcon: true,
		url: "https://acenet.aceservices.com/manage-product/inventory-and-planograms/opportunity-report",
	},
	{
		id: 7,
		title: "Planograms",
		showIcon: true,
		url: "https://acenet.aceservices.com/manage-product/inventory-and-planograms/planograms",
	},
	{
		id: 8,
		title: "Product Recalls & Stop Sales",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-product/inventory-and-planograms/product-recalls-and-stop-sales",
	},
	{
		id: 9,
		title: "Chemical Lookup",
		showIcon: true,
		url: "https://acenet.aceservices.com/chemical-lookup",
	},
	{
		id: 10,
		title: "Claims",
		showIcon: true,
		url: "https://acenet.aceservices.com/claims",
	},
	{
		id: 11,
		title: "Defective Goods",
		showIcon: true,
		url: "https://acenet.aceservices.com/defective-goods",
	},
	{
		id: 12,
		title: "Item Change Management",
		showIcon: true,
		url: "https://acenet.aceservices.com/item-change-management",
	},
	{
		id: 13,
		title: "Mobile Item Lookup",
		showIcon: true,
		url: "https://acenet.aceservices.com/mobile-item-lookup",
	},
	{
		id: 14,
		title: "Planogram Change Management",
		showIcon: true,
		url: "https://acenet.aceservices.com/planogram-change-management",
	},
	{
		id: 15,
		title: "Pricing",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-product/item-management/pricing",
	},
	{
		id: 16,
		title: "Pricing Profile",
		showIcon: true,
		url: "https://acenet.aceservices.com/pricing-profile",
	},
	{
		id: 17,
		title: "Request Bin Tags",
		showIcon: true,
		url: "https://acenet.aceservices.com/request-bin-tags",
	},
	{
		id: 18,
		title: "Request Hotsheet",
		showIcon: true,
		url: "https://acenet.aceservices.com/request-hotsheet",
	},
	{
		id: 19,
		title: "Safety Data Sheets",
		showIcon: true,
		url: "https://acenet.aceservices.com/safety-data-sheets",
	},
	{
		id: 20,
		title: "Suppress Bin Tags",
		showIcon: true,
		url: "https://acenet.aceservices.com/suppress-bin-tags",
	},
	{
		id: 21,
		title: "View Hotsheets/Invoices",
		showIcon: true,
		url: "https://acenet.aceservices.com/view-hotsheets-invoices",
	},
	{
		id: 22,
		title: "Weather Sales Impact",
		showIcon: false,
		url: "https://acenet.aceservices.com/weather-sales-impact",
	},
	{
		id: 23,
		title: "AceHardware.com Listing",
		showIcon: true,
		url: "https://acenet.aceservices.com/acehardwarecom-listing",
	},
	{
		id: 24,
		title: "Customer Orders",
		showIcon: true,
		url: "https://acenet.aceservices.com/acenet-aos",
	},
	{
		id: 25,
		title: "Customer Priority Order Listing",
		showIcon: true,
		url: "https://acenet.aceservices.com/customer-priority-order-listing",
	},
	{
		id: 26,
		title: "Management & Receiving Docs",
		showIcon: true,
		url: "https://acenet.aceservices.com/management-receiving-docs",
	},
	{
		id: 27,
		title: "Order Tracking",
		showIcon: true,
		url: "https://acenet.aceservices.com/order-tracking",
	},
	{
		id: 28,
		title: "Special Order Listing",
		showIcon: true,
		url: "https://acenet.aceservices.com/special-order-listing",
	},
	{
		id: 29,
		title: "Stock Reserve Backorder Listing",
		showIcon: true,
		url: "https://acenet.aceservices.com/stock-reserve-backorder-listing",
	},
	{
		id: 30,
		title: "Stock Reserve Listing",
		showIcon: true,
		url: "https://acenet.aceservices.com/stock-reserve-listing",
	},
	{
		id: 31,
		title: "Batch/Quick Entry",
		showIcon: true,
		url: "https://acenet.aceservices.com/batch-quick-entry",
	},
	{
		id: 32,
		title: "Browse Product & Vendors",
		showIcon: true,
		url: "https://acenet.aceservices.com/browse-product",
	},
	{
		id: 33,
		title: "Conversion Batch/Quick Entry",
		showIcon: true,
		url: "https://acenet.aceservices.com/conversion-batch-quick-entry",
	},
	{
		id: 34,
		title: "Discovery Assortment Planner",
		showIcon: true,
		url: "https://acenet.aceservices.com/discovery-assortment-planner",
	},
	{
		id: 35,
		title: "Dropship Programs",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-product/order-product/dropship-programs",
	},
	{
		id: 36,
		title: "Event Planner",
		showIcon: true,
		url: "https://acenet.aceservices.com/event-planner",
	},
	{
		id: 37,
		title: "International Deals",
		showIcon: true,
		url: "https://acenet.aceservices.com/international-show-ordering",
	},
	{
		id: 38,
		title: "Paint Chips (Ace/C+K)",
		showIcon: true,
		url: "https://acenet.aceservices.com/paint-chips-(acevalspar)",
	},
	{
		id: 39,
		title: "Paint Chips (Benjamin Moore)",
		showIcon: true,
		url: "https://acenet.aceservices.com/paint-chips-(benjamin-moore)",
	},
	{
		id: 40,
		title: "Paint Chips (Magnolia Home)",
		showIcon: true,
		url: "https://docs.google.com/forms/d/e/1FAIpQLSckhtCtfKV2wDFayJu4pbvZwkkuwxR_izS1ji2xrwYzO7R1ew/viewform",
	},
	{
		id: 41,
		title: "Preseason Planner",
		showIcon: true,
		url: "https://acenet.aceservices.com/preseason-planner",
	},
	{
		id: 42,
		title: "Ace Bankcard - Online Settlement",
		showIcon: true,
		url: "https://acenet.aceservices.com/ace-bankcard-online-settlement",
	},
	{
		id: 43,
		title: "Ace Gift Card - Settlement Portal",
		showIcon: true,
		url: "https://www.businesstrack.com/manage/landing",
	},
	{
		id: 44,
		title: "Ace Online Statement",
		showIcon: true,
		url: "https://acenet.aceservices.com/ace-online-statements",
	},
	{
		id: 45,
		title: "Ace Statement Coding",
		showIcon: true,
		url: "https://acenet.aceservices.com/ace-statement-coding",
	},
	{
		id: 46,
		title: "Ace Statement - Current Activity",
		showIcon: true,
		url: "https://acenet.aceservices.com/ace-statement-current-activity-quick-links",
	},
	{
		id: 47,
		title: "Ace Statement & Invoices",
		showIcon: true,
		url: "https://acenet.aceservices.com/ace-statements-and-invoices",
	},
	{
		id: 48,
		title: "Bankcard Program",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/financial/bankcard-program",
	},
	{
		id: 49,
		title: "Financial Management",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/financial/financial-management",
	},
	{
		id: 50,
		title: "Gift Card",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/financial/gift-card",
	},
	{
		id: 51,
		title: "SAVINGSource",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/financial/savingsource",
	},
	{
		id: 52,
		title: "Ace Learning Place",
		showIcon: true,
		url: "https://acenet.aceservices.com/ace-learning-place",
	},
	{
		id: 53,
		title: "ACENET Security Administration",
		showIcon: true,
		url: "https://acenet.aceservices.com/acenet-security-administration",
	},
	{
		id: 54,
		title: "Helpful Experience Dashboard",
		showIcon: true,
		url: "https://acenet.aceservices.com/helpful-experience-dashboard",
	},
	{
		id: 55,
		title: "Helpful Experience Programs",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/people-management/helpful-experience-programs",
	},
	{
		id: 56,
		title: "People First Planner",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/people-management/people-first-planner",
	},
	{
		id: 57,
		title: "Recruiting & Employment",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/people-management/recruiting-and-employment",
	},
	{
		id: 58,
		title: "Retailer Self-Assessment Survey",
		showIcon: true,
		url: "https://acenet.aceservices.com/retailer-self-assessment-survey",
	},
	{
		id: 59,
		title: "Retail Training & PRS",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/people-management/retail-training",
	},
	{
		id: 60,
		title: "Ace Insurance",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/security-and-preparedness/ace-insurance",
	},
	{
		id: 61,
		title: "Disaster Preparation",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/security-and-preparedness/disaster-preparation",
	},
	{
		id: 62,
		title: "Loss Prevention",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/security-and-preparedness/loss-prevention",
	},
	{
		id: 63,
		title: "Delivery and Services",
		showIcon: true,
		url: "https://acenet.aceservices.com/delivery-and-repair",
	},
	{
		id: 64,
		title: "Store Services",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/services-and-delivery",
	},
	{
		id: 65,
		title: "Store Environment Resources",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/store-environment",
	},
	{
		id: 66,
		title: "Ace Way of Retailing",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor",
	},
	{
		id: 67,
		title: "ADW Reports",
		showIcon: true,
		url: "https://acenet.aceservices.com/adw-reports",
	},
	{
		id: 68,
		title: "Retail Technology",
		showIcon: false,
		url: "https://acenet.aceservices.com/manage-my-store/store-systems-and-operations/retail-technology",
	},
	{
		id: 69,
		title: "Ace Rewards Program",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/ace-rewards",
	},
	{
		id: 70,
		title: "Ace Rewards Maintenance",
		showIcon: true,
		url: "https://acenet.aceservices.com/ace-rewards-maintenance",
	},
	{
		id: 71,
		title: "Ace Marketing Muscle",
		showIcon: true,
		url: "https://acenet.aceservices.com/ace-marketing-muscle",
	},
	{
		id: 72,
		title: "Ace Style Guide",
		showIcon: true,
		url: "https://acenet.aceservices.com/ace-style-guide",
	},
	{
		id: 73,
		title: "acehardware.com",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/digital-marketing/acehardwarecom",
	},
	{
		id: 74,
		title: "Brandfolder",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/digital-marketing/search-and-online-marketing/brandfolder",
	},
	{
		id: 75,
		title: "Local Email",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/traditional-marketing/local-marketing/local-email",
	},
	{
		id: 76,
		title: "PR & Social Media",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/digital-marketing/public-relations-and-social-media",
	},
	{
		id: 77,
		title: "Search & Online Marketing",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/digital-marketing/search-and-online-marketing",
	},
	{
		id: 78,
		title: "SOCi",
		showIcon: true,
		url: "https://app.meetsoci.com/auth/sso/saml/attempt-with-key?key=f6099d94-5130-40bf-80ca-83756d0e790e",
	},
	{
		id: 79,
		title: "Webstop Digital Circular",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/digital-marketing/webstop-digital-circular",
	},
	{
		id: 80,
		title: "100th Anniversary",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/traditional-marketing/100th-anniversary",
	},
	{
		id: 81,
		title: "Ace Brand Identity Standards",
		showIcon: true,
		url: "https://acenet.aceservices.com/ace-brand-identity-standards",
	},
	{
		id: 82,
		title: "Local",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/traditional-marketing/local-marketing",
	},
	{
		id: 83,
		title: "Media Advertising",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/traditional-marketing/media-advertising",
	},
	{
		id: 84,
		title: "Media Manager",
		showIcon: true,
		url: "https://acenet.aceservices.com/media-manager",
	},
	{
		id: 85,
		title: "Win the Month",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/promotions",
	},
	{
		id: 86,
		title: "In-Store Parties & Demos",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/promotions/in-store-parties-and-demos",
	},
	{
		id: 87,
		title: "Sign Kit Customization",
		showIcon: true,
		url: "https://acenet.aceservices.com/sign-kit-customization",
	},
	{
		id: 88,
		title: "Vendor Promotional Pricing Changes",
		showIcon: false,
		url: "https://acenet.aceservices.com/marketing/promotions/vendor-promotional-pricing-changes",
	},
	{
		id: 89,
		title: "AWOR Home",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor",
	},
	{
		id: 90,
		title: "B2B on Acehardware.com",
		showIcon: false,
		url: "",
	},
	{
		id: 91,
		title: "Order Management",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/acehardwarecom-order-management",
	},
	{
		id: 92,
		title: "Accounts Payable",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/accounts-payable",
	},
	{
		id: 93,
		title: "Accounts Receivable",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/accounts-receivable",
	},
	{
		id: 94,
		title: "Financial Reconciliation",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/financial-reconciliation",
	},
	{
		id: 95,
		title: "Financing & Funding",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/financing-and-funding",
	},
	{
		id: 96,
		title: "Payroll Processing",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/payroll-processing",
	},
	{
		id: 97,
		title: "Reports & Measurements",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/reports-and-measurements",
	},
	{
		id: 98,
		title: "Staffing & Organization",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/staffing-and-organization",
	},
	{
		id: 99,
		title: "Helpful Experience",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/helpful-experience",
	},
	{
		id: 100,
		title: "Measure Helpful",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/measure-helpful",
	},
	{
		id: 101,
		title: "In-Stock Position",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/inventory-management/in-stock-position/in-stock-position-summary",
	},
	{
		id: 102,
		title: "Inventory Record Accuracy",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/inventory-record-accuracy",
	},
	{
		id: 103,
		title: "Item Setup",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/item-setup",
	},
	{
		id: 104,
		title: "Merchandising",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/merchandising",
	},
	{
		id: 105,
		title: "Ordering",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/ordering",
	},
	{
		id: 106,
		title: "Point of Sale Transactions",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/point-of-sale-transactions",
	},
	{
		id: 107,
		title: "Reports & Measurements",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/reports-and-measurements-x12905",
	},
	{
		id: 108,
		title: "Unproductive Inventory",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/unproductive-inventory",
	},
	{
		id: 109,
		title: "Physical Security",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/physical-security",
	},
	{
		id: 110,
		title: "Store Operations",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/store-operations",
	},
	{
		id: 111,
		title: "Ace Rewards",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/ace-rewards",
	},
	{
		id: 112,
		title: "Digital Marketing",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/digital-marketing",
	},
	{
		id: 113,
		title: "Gift Cards",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/gift-cards",
	},
	{
		id: 114,
		title: "Local Marketing",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/local-marketing",
	},
	{
		id: 115,
		title: "Marketing Planning",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/marketing-planning",
	},
	{
		id: 116,
		title: "Promotional Ordering & Execution",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/promotional-ordering-and-execution",
	},
	{
		id: 117,
		title: "Retail Pricing",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/retail-pricing",
	},
	{
		id: 118,
		title: "Accounting and Tax",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/accounting-and-tax",
	},
	{
		id: 119,
		title: "Demand Scheduling and Timekeeping",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/demand-scheduling-and-timekeeping",
	},
	{
		id: 120,
		title: "Manage and Coach",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/manage-and-coach",
	},
	{
		id: 121,
		title: "Org Chart / Job Descriptions",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/people-management/org-chart-job-descriptions",
	},
	{
		id: 122,
		title: "Payroll and Benefits",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/payroll-and-benefits",
	},
	{
		id: 123,
		title: "Recruit, Hire and Onboard",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/recruit-hire-and-onboard",
	},
	{
		id: 124,
		title: "Train and Develop",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor/train-and-develop",
	},
	{
		id: 125,
		title: "Customer First Sales Culture",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/ace-initiatives/customer-first-sales-culture",
	},
	{
		id: 126,
		title: "ELEVATE Ace",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/ace-initiatives/elevate-ace",
	},
	{
		id: 127,
		title: "Famous for Four",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/ace-initiatives/famous-for-four",
	},
	{
		id: 128,
		title: "Local Lift Max",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/ace-initiatives/local-lift-max",
	},
	{
		id: 129,
		title: "Logistics Revolution",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/ace-initiatives/logistics-revolution",
	},
	{
		id: 130,
		title: "Win Big in Q4",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/ace-initiatives/win-big-in-q4",
	},
	{
		id: 131,
		title: "YardRx",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/ace-initiatives/yardrx",
	},
	{
		id: 132,
		title: "Ace Hardware Home Services",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/business-specialties/ace-hardware-home-services",
	},
	{
		id: 133,
		title: "B2B - Business to Business",
		showIcon: true,
		url: "https://acenet.aceservices.com/b2b-business-to-business",
	},
	{
		id: 134,
		title: "B2B Online Account Management",
		showIcon: true,
		url: "https://acenet.aceservices.com/b2b-online-account-management",
	},
	{
		id: 135,
		title: "B2B - Paint",
		showIcon: true,
		url: "https://acenet.aceservices.com/b2b-paint",
	},
	{
		id: 136,
		title: "Drop Ship Building Materials",
		showIcon: false,
		url: "https://acenet.aceservices.com/drop-ship-building-materials",
	},
	{
		id: 137,
		title: "LED Savings Estimator",
		showIcon: true,
		url: "https://acenet.aceservices.com/led-savings-estimator",
	},
	{
		id: 138,
		title: "Rental",
		showIcon: false,
		url: "https://acenet.aceservices.com/rental",
	},
	{
		id: 139,
		title: "Hand Tools Level 3",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/level-3-programs/hand-tools-level-3",
	},
	{
		id: 140,
		title: "STIHL",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/level-3-programs/stihl",
	},
	{
		id: 141,
		title: "ADW Reports",
		showIcon: true,
		url: "https://acenet.aceservices.com/adw-reports",
	},
	{
		id: 142,
		title: "Higher Ground",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/retail-growth-strategy/higher-ground",
	},
	{
		id: 143,
		title: "Retail Analytics Dashboard",
		showIcon: true,
		url: "https://acenet.aceservices.com/adw-reports",
	},
	{
		id: 144,
		title: "Store Growth",
		showIcon: false,
		url: "https://acenet.aceservices.com/growth-drivers/retail-growth-strategy/store-growth",
	},
	{
		id: 145,
		title: "Ace Foundation",
		showIcon: false,
		url: "https://acenet.aceservices.com/about-ace/ace-foundation",
	},
	{
		id: 146,
		title: "Ace Helpful Fund",
		showIcon: false,
		url: "https://acenet.aceservices.com/about-ace/ace-foundation/ace-helpful-fund",
	},
	{
		id: 147,
		title: "Company Information",
		showIcon: false,
		url: "https://acenet.aceservices.com/about-ace/company-information",
	},
	{
		id: 148,
		title: "Retail Support & Logistics",
		showIcon: false,
		url: "https://acenet.aceservices.com/about-ace/retail-support-and-logistics",
	},
	{
		id: 149,
		title: "Retailers & Groups",
		showIcon: false,
		url: "https://acenet.aceservices.com/about-ace/retailers-and-groups",
	},
	{
		id: 150,
		title: "Stockholder Relations",
		showIcon: false,
		url: "https://acenet.aceservices.com/about-ace/stockholder-relations",
	},
	{
		id: 151,
		title: "2025 Spring Convention",
		showIcon: false,
		url: "https://acenet.aceservices.com/about-ace/conventions/2025-fall-convention",
	},
	{
		id: 152,
		title: "Future Conventions",
		showIcon: false,
		url: "https://acenet.aceservices.com/about-ace/conventions/future-conventions",
	},
	{
		id: 153,
		title: "International Programs & Information",
		showIcon: false,
		url: "https://acenet.aceservices.com/about-ace/international",
	},
	{
		id: 154,
		title: "Ace Identity Standards",
		showIcon: false,
		url: "https://acenet.aceservices.com/_Cross%20Site%20Shared%20Assets/Documents/Ace%20Brand%20Identity%20Standards.pdf",
	},
	{
		id: 155,
		title: "Ace Way of Retailing",
		showIcon: false,
		url: "https://acenet.aceservices.com/awor",
	},
	{
		id: 156,
		title: "General Member Standards / Ace Brand",
		showIcon: false,
		url: "https://acenet.aceservices.com/ACENET/Documents/Static%20Content/About%20Ace/Stockholder%20Relations/General%20Brand%20Standards%20and%20Operational%20Requirements.pdf",
	},
	{
		id: 157,
		title: "Help",
		showIcon: false,
		url: "https://acenet.aceservices.com/help",
	},
	{
		id: 158,
		title: "Analytics Dashboard",
		showIcon: false,
		url: "https://acenet.aceservices.com/help",
	},
];