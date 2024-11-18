import { TbHistory } from 'react-icons/tb';
import { RxDashboard } from 'react-icons/rx';
import { FaClipboardList } from 'react-icons/fa';
import { MdInbox } from 'react-icons/md';
import { MdInventory } from 'react-icons/md';
import { FaUserShield } from 'react-icons/fa';

export const SIDEBAR_LINKS = [
  {
    id: '1',
    name: 'Dashboard',
    path: '/',
    icon: RxDashboard,
    label: 'Overview',
  },
  {
    id: '2',
    name: 'Transaction History',
    path: '/transaction-history',
    icon: TbHistory,
    label: 'Transaction History',
  },
  {
    id: '3',
    name: 'Stock List',
    path: '/stock-list',
    icon: FaClipboardList,
    label: 'Stock List',
  },
  {
    id: '4',
    name: 'Stock In & Out',
    path: '/stock-in-out',
    icon: MdInbox,
    label: 'Stock In & Out',
  },
  {
    id: '5',
    name: 'Inventory',
    path: '/inventory',
    icon: MdInventory,
    label: 'Inventory',
  },
  {
    id: '6',
    name: 'Admin',
    path: '/admin',
    icon: FaUserShield,
    label: 'Admin',
  },
];
