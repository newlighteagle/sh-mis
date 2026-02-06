
import { trainingData, riskData } from '@/lib/restrict-data/data-farmer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NavBreadcrumb } from "@/components/nav-breadcrumb";
import { BasicKpiView } from "@/components/dashboard/basic-kpi-view";
import { DashboardGenericView } from "@/components/dashboard/dashboard-generic-view";
import { ReportView } from "@/components/dashboard/report-view";
import { MasterDataView } from "@/components/dashboard/master-data-view";
import { CmsView } from "@/components/dashboard/cms-view";

export default async function DashboardSubPage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section, slug } = await params;

  // Helper to format slug to Title Case
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const renderContent = () => {
    if (section === 'dashboard') {
      if (slug === 'basic-kpi') {
        return <BasicKpiView breadcrumb={<NavBreadcrumb />} />;
      }
      return <DashboardGenericView slug={slug} />;
    }

    if (section === 'report') {
      return <ReportView slug={slug} />;
    }

    if (section === 'master-data') {
      return <MasterDataView slug={slug} />;
    }

    if (section === 'cms') {
      return <CmsView slug={slug} />;
    }

    return (
      <div className="flex h-[50vh] flex-col items-center justify-center rounded-xl border border-dashed text-center">
        <h3 className="text-2xl font-bold text-gray-400">{title}</h3>
        <p className="text-gray-500">Prototype for {section} / {slug}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
       <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <Badge variant="outline" className="text-xs uppercase">{section}</Badge>
      </div>
      {slug !== 'basic-kpi' && (
        <div className="mb-4">
          <NavBreadcrumb />
        </div>
      )}
      {renderContent()}
    </div>
  );
}
