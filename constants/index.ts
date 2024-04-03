export const sidebarLinks = [
  {
    id: "1",
    imgURL: "/icons/Home.svg",
    route: "/dashboard",
    label: "Dashboard",
  },

  {
    id: "2",
    imgURL: "/icons/upcoming.svg",
    route: "/upcoming",
    label: "Upcoming",
  },
  {
    id: "3",
    imgURL: "/icons/previous.svg",
    route: "/previous",
    label: "Previous",
  },
  {
    id: "4",
    imgURL: "/icons/Video.svg",
    route: "/recordings",
    label: "Recordings",
  },
  {
    id: "5",
    imgURL: "/icons/add-personal.svg",
    route: "/personal-room",
    label: "Personal Room",
  },
];

export const initialValues = {
  dateTime: new Date(),
  description: "",
  link: "",
};

export const avatarImages = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
  "/images/avatar-5.jpg",
  // "/images/avatar-6.jpg",
];

export const homeCards = [
  {
    id: 1,
    img: "/icons/add-meeting.svg",
    title: "New Meeting",
    description: "Start an instant meeting",
    className: "bg-orange-1",
  },
  {
    id: 2,
    img: "/icons/schedule.svg",
    title: "Schedule Meeting",
    description: "Plan your meeting",
    className: "bg-green-2",
  },
  {
    id: 3,
    img: "/icons/recordings.svg",
    title: "View Recordings",
    description: "Meeting Recordings",
    className: "bg-green-2",
  },
  {
    id: 4,
    img: "/icons/join-meeting.svg",
    title: "Join Meeting",
    description: "Via invitation link",
    className: "bg-orange-1",
  },
];
