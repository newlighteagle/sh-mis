import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

export const menuData = {
  user: {
    name: "Admin User",
    email: "admin@wri-indonesia.org",
    avatar: "https://ui.shadcn.com/avatars/01.png",
  },
  teams: [
    {
      name: "WRI Indonesia",
      logo: GalleryVerticalEnd,
      plan: "Smallholder HUB",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard-restricted/dashboard",
      icon: PieChart,
      items: [
        { title: "Basic KPI", url: "/dashboard-restricted/dashboard/basic-kpi" },
        { title: "Farmer & Land Parcel", url: "/dashboard-restricted/dashboard/farmer-land-parcel" },
        { title: "Training", url: "/dashboard-restricted/dashboard/training" },
        { title: "BMP", url: "/dashboard-restricted/dashboard/bmp" },
        { title: "HCV", url: "/dashboard-restricted/dashboard/hcv" },
        { title: "HSE", url: "/dashboard-restricted/dashboard/hse" },
        { title: "Supply Chain", url: "/dashboard-restricted/dashboard/supply-chain" },
        { title: "Risk Management", url: "/dashboard-restricted/dashboard/risk-management" },
        { title: "BusDev", url: "/dashboard-restricted/dashboard/busdev" },
        { title: "GEDSI", url: "/dashboard-restricted/dashboard/gedsi" },
        { title: "Interactive Map", url: "/dashboard-restricted/dashboard/interactive-map" },
      ],
    },
    {
      title: "Report",
      url: "/dashboard-restricted/report",
      icon: BookOpen,
      items: [
        { title: "Basic KPI", url: "/dashboard-restricted/report/basic-kpi" },
        { title: "Farmer & Land Parcel", url: "/dashboard-restricted/report/farmer-land-parcel" },
        { title: "Training", url: "/dashboard-restricted/report/training" },
        { title: "BMP", url: "/dashboard-restricted/report/bmp" },
        { title: "HCV", url: "/dashboard-restricted/report/hcv" },
        { title: "HSE", url: "/dashboard-restricted/report/hse" },
        { title: "Supply Chain", url: "/dashboard-restricted/report/supply-chain" },
        { title: "Risk Management", url: "/dashboard-restricted/report/risk-management" },
        { title: "BusDev", url: "/dashboard-restricted/report/busdev" },
        { title: "GEDSI", url: "/dashboard-restricted/report/gedsi" },
        { title: "Interactive Map", url: "/dashboard-restricted/report/interactive-map" },
      ],
    },
    {
      title: "Master Data",
      url: "/master-data",
      icon: SquareTerminal,
      items: [
        { title: "Provinces", url: "/master-data/provinces" },
        { title: "Districts", url: "/master-data/districts" },
        { title: "Groups", url: "/master-data/groups" },
        { title: "Farmer Groups", url: "/master-data/farmer-groups" },
        { title: "Users", url: "/master-data/users" },
      ],
    },
    {
      title: "CMS",
      url: "/dashboard-restricted/cms",
      icon: Frame,
      items: [
        { title: "Home", url: "/dashboard-restricted/cms/home" },
        { title: "Community", url: "/dashboard-restricted/cms/community" },
        { title: "Activity", url: "/dashboard-restricted/cms/activity" },
        { title: "Media", url: "/dashboard-restricted/cms/media" },
      ],
    },
  ],
  navSecondary: [
    {
        title: "Management User",
        url: "/dashboard-restricted/users",
        icon: Bot,
    },
    {
      title: "Settings",
      url: "/dashboard-restricted/settings",
      icon: Settings2,
    },
  ],
  projects: [], 
}
