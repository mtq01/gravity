/*
  One list of the main navigation links, shared by the header.
  Keeping it here means we edit the menu in a single place.
*/

export type NavigationLink = {
  /* Text the visitor reads */
  label: string;
  /* Where the link goes */
  href: string;
  /* True when the link leaves our site and should open in a new tab */
  isExternal: boolean;
};

export const primaryNavigationLinks: NavigationLink[] = [
  {
    label: "Tools",
    href: "/#gravity-tools",
    isExternal: false,
  },
  {
    label: "Orbit",
    href: "/orbit",
    isExternal: false,
  },
  {
    label: "Radar",
    href: "https://radar.gogogravity.com",
    isExternal: true,
  },
];
