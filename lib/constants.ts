export const WA_NUMBER = "919810088181";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94] as const;

export const LOCATIONS = [
  {
    name: "KHAN MARKET",
    lines: ["Shop No. 46, Loknayak Bhawan", "Khan Market, New Delhi — 110003"],
    phone: "+91-11-4350 4242",
    phoneTel: "+911143504242",
    note: "Walk in anytime",
  },
  {
    name: "MG ROAD",
    lines: ["Plot No. 47 & 49", "MG Road, New Delhi — 110030"],
    phone: "+91 98100 88181",
    phoneTel: "+919810088181",
    note: "Two showrooms, side by side",
  },
  {
    name: "FACTORY",
    lines: ["4651/279, Daulatabad Road", "Gurgaon (Nr Railway Station), Haryana"],
    phone: "+91-124-246 9788",
    phoneTel: "+911242469788",
    note: "By appointment",
  },
];

export const CLIENTS = [
  { name: "DLF", src: "/images/clients/dlf.png" },
  { name: "The Imperial", src: "/images/clients/the-imperial.jpg" },
  { name: "The Grand", src: "/images/clients/the-grand.png" },
  { name: "Eros Hotel", src: "/images/clients/eros-hotel.jpeg" },
  { name: "Uppal's", src: "/images/clients/uppals.jpg" },
  { name: "GD Goenka", src: "/images/clients/gd-goenka.jpg" },
  { name: "Salcon", src: "/images/clients/salcon.png" },
];
