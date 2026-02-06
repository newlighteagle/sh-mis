
import { redirect } from 'next/navigation';

export default function DashboardRestrictedPage() {
  redirect('/dashboard-restricted/dashboard/basic-kpi');
}
