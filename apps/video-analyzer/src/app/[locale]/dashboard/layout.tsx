import '@swimetrics/utils/global.css';
import {
  SidebarProvider,
  SidebarTrigger,
} from '@swimetrics/components/sidebar';
import { AppSidebar } from '../../../components/app-sidebar';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
