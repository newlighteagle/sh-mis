"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { menuData } from "@/lib/restrict-data/data-menu"
import React from "react"

export function NavBreadcrumb() {
  const pathname = usePathname()

  const generateBreadcrumbs = () => {
    // Skip if we are at root restricted dashboard
    if (pathname === '/dashboard-restricted') {
      return [
        { title: 'Restricted Data', url: '/dashboard-restricted', active: true }
      ]
    }

    const segments = pathname.split('/').filter(Boolean)
    const crumbs = [
      { title: 'Restricted Data', url: '/dashboard-restricted', active: false }
    ]

    let currentPath = ''
    
    // Iterate through segments to build breadcrumbs
    // segments: ['dashboard-restricted', 'dashboard', 'basic-kpi']
    
    // We start from index 1 to skip 'dashboard-restricted' which is already added as "Restricted Area"
    // However, we need to construct the path correctly.
    
    // Strategy: Flatten menu items to find titles matching paths
    const flattenItems = (items: any[]) => {
      let flat: any[] = []
      items.forEach(item => {
        flat.push(item)
        if (item.items) {
          flat = flat.concat(flattenItems(item.items))
        }
      })
      return flat
    }

    const allMenuItems = [
        ...flattenItems(menuData.navMain),
        ...menuData.navSecondary
    ]

    // Construct paths incrementally
    // 1. /dashboard-restricted
    // 2. /dashboard-restricted/dashboard
    // 3. /dashboard-restricted/dashboard/basic-kpi

    let accumPath = ''
    segments.forEach((segment, index) => {
        accumPath += `/${segment}`
        
        // Skip root
        if(accumPath === '/dashboard-restricted') return

        // Find title in menuData
        const menuItem = allMenuItems.find(item => item.url === accumPath)
        
        // Fallback title: Title Case of segment
        const title = menuItem ? menuItem.title : segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

        crumbs.push({
            title,
            url: accumPath,
            active: index === segments.length - 1
        })
    })

    return crumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.url}>
            <BreadcrumbItem className={crumb.active ? "" : "hidden md:block"}>
              {crumb.active ? (
                <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.url}>
                  {crumb.title}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
