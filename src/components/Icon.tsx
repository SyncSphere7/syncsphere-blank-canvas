import {
  BriefcaseBusiness,
  Globe,
  HeartHandshake,
  Hotel,
  MapPin,
  Megaphone,
  MessageCircle,
  Palette,
  Plane,
  School,
  ShieldCheck,
  ShoppingCart,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '@/lib/content';

const icons: Record<IconName, LucideIcon> = {
  globe: Globe,
  message: MessageCircle,
  megaphone: Megaphone,
  palette: Palette,
  map: MapPin,
  shield: ShieldCheck,
  workflow: Workflow,
  plane: Plane,
  hotel: Hotel,
  heart: HeartHandshake,
  school: School,
  cart: ShoppingCart,
  briefcase: BriefcaseBusiness,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = icons[name];
  return <Cmp className={className} aria-hidden="true" />;
}
