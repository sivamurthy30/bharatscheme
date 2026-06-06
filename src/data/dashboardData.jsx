import {
  Bell,
  BookOpenCheck,
  FileText,
  FolderCheck,
  Home,
  Mail,
  Settings,
  User,
} from 'lucide-react';

export const navItems = [
  { label: 'Dashboard', icon: Home, active: true },
  { label: 'My Schemes', icon: BookOpenCheck },
  { label: 'Applications', icon: FolderCheck },
  { label: 'Documents', icon: FileText },
  { label: 'Messages', icon: Mail, badge: '2' },
  { label: 'Reminders', icon: Bell },
  { label: 'Profile', icon: User },
  { label: 'Settings', icon: Settings },
];

export const stats = [
  { value: '12', label: 'Total Schemes Found', tone: 'green' },
  { value: '5', label: 'High Match Schemes', tone: 'blue' },
  { value: '3', label: 'Applications In Progress', tone: 'blue' },
  { value: '₹2,45,000', label: 'Total Benefits You May Receive', tone: 'purple' },
];

export const schemes = [
  {
    title: 'PM Mudra Yojana',
    agency: 'Government of India',
    detail: 'Loan up to ₹10 Lakh',
    match: 'High Match',
    level: 'high',
    symbol: 'seal',
  },
  {
    title: 'PMEGP Scheme',
    agency: 'Ministry of MSME',
    detail: 'Grant up to ₹25 Lakh',
    match: 'High Match',
    level: 'high',
    symbol: 'seal',
  },
  {
    title: 'Stand Up India Scheme',
    agency: 'Government of India',
    detail: 'Loan between ₹10 Lakh - ₹1 Cr',
    match: 'Medium Match',
    level: 'medium',
    symbol: 'people',
  },
];
