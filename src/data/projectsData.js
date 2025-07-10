import form_img from '../assets/images/form_request.png';
import website_img from '../assets/images/website.png'
import rename_img from '../assets/images/rename_hamilton.png'

export const projectsData = [
  {
    title: "Personal Website",
    description: "A personal website developed through react.js",
    tech: ["Web Development"],
    image: website_img,
    link: "#"
  },
  {
    title: "Renaming Hamilton's Labware Metadata",
    description: "A tool for renaming and organizing labware metadata in Hamilton's lab automation systems, improving data consistency and accessibility.",
    tech: ["Python", "Data Management", "Hamilton Robotics"],
    image: rename_img,
    link: "#"
  },
  {
    title: "Hamilton's Robotics Metadata Web Application",
    description: "A web application to display Hamilton's Metadata in a user-friendly format, allowing for easy access and management of labware information.",
    tech: ["Web Development", "React.js", "Data Visualization"],
    image: "",
    link: "#"
  },
  {
    title: "Form Request App",
    description: "A web application for managing form requests, allowing client users to submit problems to the Automation team.",
    tech: ["Full Stack", "React.js", "Node.js", "Express.js"],
    image: form_img,
    link: "#"
  }
];