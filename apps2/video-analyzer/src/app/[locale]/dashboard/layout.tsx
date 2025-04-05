import '@swimetrics/utils/global.css';
import { SidebarProvider } from '@swimetrics/components/sidebar';
import { AppSidebar } from '../../../components/app-sidebar/app-sidebar';
import { ProfileDropdown } from '../../../components/profile-dropdown/profile-dropdown';
import { Main } from '../../../components/main/main';
import { Header } from '../../../components/header/header';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header>
          <ProfileDropdown />
        </Header>

        <Main>{children}</Main>
      </div>
    </SidebarProvider>
  );
}
