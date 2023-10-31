export interface MenuItem {
  label: string;
  link: string;
}

export interface NavbarProps {
  menuItems: MenuItem[];
  loginRegisterItems: MenuItem[];
  children: React.ReactNode;
}
