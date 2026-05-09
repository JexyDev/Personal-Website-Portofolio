import { Outlet } from 'react-router';
import ModernSidebar from '../components/ModernSidebar';

export default function Root() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <ModernSidebar />
      <div className="flex-1 lg:ml-80 overflow-x-hidden min-h-screen">
        <main className="w-full h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}