
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  backgroundImage: string;
  link: string;
  benefits: string[];
  stats: {
    [key: string]: string;
  };
}
