export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'viewer';
  avatar?: string;
}

export const users: User[] = [
  {
    id: 'u-1',
    name: 'Admin User',
    email: 'admin@wri-indonesia.org',
    role: 'admin',
    avatar: 'https://ui.shadcn.com/avatars/01.png',
  },
  {
    id: 'u-2',
    name: 'Staff Member',
    email: 'staff@wri-indonesia.org',
    role: 'staff',
    avatar: 'https://ui.shadcn.com/avatars/02.png',
  },
  {
    id: 'u-3',
    name: 'Viewer',
    email: 'viewer@wri-indonesia.org',
    role: 'viewer',
    avatar: 'https://ui.shadcn.com/avatars/03.png',
  },
];
