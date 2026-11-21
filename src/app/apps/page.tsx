import { PillarPage } from '@/components/PillarPage';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta(
  '/apps',
  'App Development in Uganda — Web and Mobile Apps',
  'Web apps from UGX 8,000,000 and Android apps from UGX 15,000,000. Booking, ordering, stock, school and clinic systems with Mobile Money built in. Kampala team.',
);

export default function AppsPage() {
  return (
    <PillarPage
      pillar="apps"
      eyebrow="Apps · Web and mobile"
      title="Apps that run your business"
      intro="Booking, ordering, stock, school and clinic systems, and Android and iPhone apps, built in Kampala with Mobile Money built in. You own the code."
      cta="Hello SyncSphere, I'd like to talk about building an app for my business."
    />
  );
}
