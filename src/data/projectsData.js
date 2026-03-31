import form_img from '../assets/images/form_request.png';
import website_img from '../assets/images/website.png'
import rename_img from '../assets/images/rename_hamilton.png'
import ham_metadata_img from '../assets/images/react_ham.png'
import airflow_DAGDiagram_img from '../assets/images/airflow_DAGDiagram.png'

export const projectsData = [
  {
    title: "Personal Website",
    description: "Created a personal website to showcase my portfolio, skills, and projects using React.js and Tailwind CSS.",
    tech: ["Web Development"],
    image: website_img,
    link: "https://github.com/phu-ngu/my-portfolio"
  },
  {
    title: "Renaming Hamilton's Robotics Labware Metadata",
    description: "This project involved creating a tool that automates the renaming of labware metadata files used in Hamilton's robotics systems. The tool ensures that all labware is accurately identified and managed without having to manually edit each file.",
    tech: ["Python", "CustomTkinter"],
    image: rename_img
  },
  {
    title: "Hamilton's Robotics Metadata Web Application",
    description: "A web application to display Hamilton's Metadata in a user-friendly format, allowing for easy access and management of labware information and sequence objects.",
    tech: ["Web Development", "ReactJS", "Data Visualization"],
    image: ham_metadata_img
  },
  {
    title: "Form Request App",
    description: "A desktop application for managing form requests, allowing client users to submit problems to the Automation team.",
    tech: ["Full Stack", "ReactJS", "NodeJS", "ExpressJS"],
    image: form_img
  },
  {
    title: "Ecommerce Airflow Data Pipeline",
    description: "Engineered an end-to-end e-commerce analytics pipeline orchestrating Apache Spark, Airflow, and BigQuery to automate data ingestion, transformation, and business intelligence reporting at scale.",
    tech: ["Airflow3", "Pyspark", "Google Cloud Storage", "DAGs", "BigQuery", "dbt"],
    image: airflow_DAGDiagram_img,
    link: "https://github.com/phu-ngu/airflow-ecommerce-pipeline"
  },
];