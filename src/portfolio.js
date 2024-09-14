/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {SiAws, SiDocker, SiPytorch, SiApacheairflow} from "react-icons/si";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mehran Moazeni",
  title: "Hi all, I'm Mehran",
  subTitle: emoji(
    "A passionate Data scientist and ML engineer 🚀 having an experience of building real-world ML applications"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1bq6ByFxCofbqU36qmgMbjXn067wW7Diy/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mehranmzn",
  linkedin: "https://www.linkedin.com/in/mehran-moazeni/",
  gmail: "moazeni.mehran@gmail.com",
  medium: "https://medium.com/@mehran1414",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "EXPERIENCED MACHINE LEARNING DATA SCIENTIST PASSIONATE ABOUT REAL-WORLD AI SOLUTIONS",
  skills: [
    emoji(
      "⚡ Building highly scalable machine learning models for real-world prediction tasks, particularly in healthcare and medical data"
    ),
    emoji(
      "⚡ Extensive experience in data cleaning, preprocessing, and data modeling using SQL on large-scale medical databases"
    ),
    emoji(
      "⚡ Skilled in using Python for machine learning, including frameworks like TensorFlow, PyTorch, and Scikit-learn"
    ),
    emoji(
      "⚡ Proficient in deploying machine learning models using Docker and managing workflows with MLflow"
    ),
    emoji(
      "⚡ Hands-on experience with cloud platforms (AWS, Google Cloud, Azure) for running and analyzing large-scale machine learning workloads"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "logos-tensorflow", // Iconify icon
      style: {backgroundColor: "transparent"}
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "logos:airflow-icon",
      style: {backgroundColor: "transparent"}
    },
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "devicon:pytorch",
      style: {backgroundColor: "transparent"}
    },
    {
      skillName: "MLflow",
      fontAwesomeClassname: "simple-icons:mlflow",
      style: {color: "#0056d6"}
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "logos:fastapi-icon"
    },
    {
      skillName: "DataBricks",
      fontAwesomeClassname: "simple-icons:databricks",
      color: "#d95000"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "logos-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "devicon:azure"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-pgsql"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "logos-python"
    },
    {
      skillName: "Langchain",
      fontAwesomeClassname: "simple-icons:langchain"
    },
    {
      skillName: "Huggingface",
      fontAwesomeClassname: "simple-icons:huggingface"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "devicon:docker-wordmark"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "logos-kubernetes"
    },
    {
      skillName: "Terrafom",
      fontAwesomeClassname: "devicon:terraform-wordmark"
    },
    {
      skillName: "AWS SageMaker",
      fontAwesomeClassname: "logos-aws-sagemaker"
    },
    {}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Utrecht University",
      logo: require("./assets/images/utrechtLogo.png"), // Ensure the correct logo is available
      subHeader: "PhD in Data Science and Statistics",
      duration: "December 2020 - February 2025",
      desc: "Research focus on applied methods for personalized prediction modeling for health data. Involved in teaching courses and conducting research for industry partners.",
      descBullets: [
        "Developed meta-learning models for early prediction of Atrial Fibrillation",
        "Taught Python Summer School and Advanced Research Methods for Statistics",
        "Collaborated with organizations like Abbott on funded research projects"
      ]
    },
    {
      schoolName: "Sharif University of Technology",
      logo: require("./assets/images/sharifLogo.png"), // Ensure the correct logo is available
      subHeader: "Master of Science in Industrial Engineering",
      duration: "September 2016 - January 2019",
      desc: "Focused on statistical modeling, machine learning, and healthcare systems. Developed a classifier for image segmentation as part of the thesis.",
      descBullets: [
        "Thesis: Developed a classifier for image segmentation and classification",
        "Studied statistical process control charts for monitoring healthcare data"
      ]
    },
    {
      schoolName: "Golpayegan University of Technology",
      logo: require("./assets/images/golpayeganLogo.png"), // Ensure the correct logo is available
      subHeader: "Bachelor of Science in Industrial Engineering",
      duration: "September 2011 - September 2015",
      desc: "Studied industrial engineering with a focus on process optimization and project management.",
      descBullets: [
        "Gained experience in project management and quality control during internships",
        "Studied process optimization and statistical methods"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Pytorch",
      progressPercentage: "80%"
    },
    {
      Stack: "Git",
      progressPercentage: "80%"
    },
    {
      Stack: "Huggingface",
      progressPercentage: "80%"
    },
    {
      Stack: "Streamlit",
      progressPercentage: "80%"
    },
    {
      Stack: "Langhcian",
      progressPercentage: "70%"
    },
    {
      Stack: "MLflow",
      progressPercentage: "70%"
    },
    {
      Stack: "Docker",
      progressPercentage: "70%"
    },
    {
      Stack: "Apache Airflow",
      progressPercentage: "70%"
    },
    {
      Stack: "Github Actions",
      progressPercentage: "70%"
    },
    {
      Stack: "FastAPI",
      progressPercentage: "60%"
    },
    {
      Stack: "Terraform, GCP, DataBricks",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "PhD Candidate in Data Science & Statistics",
      company: "Utrecht University",
      companylogo: require("./assets/images/utrechtLogo.png"), // Ensure you have the correct logo image
      date: "Dec 2020 – Feb 2025",
      desc: "Conducting research in applied data science methods for personalized health predictions, funded by organizations like Abbott. Teaching Python Summer School and Advanced Research Methods for Statistics.",
      descBullets: [
        "Developed personalized prediction models for health data",
        "Supervised students in data science projects",
        "Delivered lectures on advanced statistics and machine learning"
      ]
    },
    {
      role: "Marketing Operations Assistant",
      company: "IFSGuide (Remote)",
      companylogo: require("./assets/images/ifsGuideLogo.png"), // Ensure you have the correct logo image
      date: "Jun 2020 – Dec 2020",
      desc: "Managed marketing campaigns, customer support, and e-commerce platforms like Shopify, Weebly, and Webflow for IFSGuide.",
      descBullets: [
        "Designed the IFSGuide website using Shopify, Weebly, and Webflow",
        "Handled marketing operations including campaigns and product orders"
      ]
    },
    {
      role: "Quality and Inventory Control Assistant",
      company: "Behrizan Design Company",
      companylogo: require("./assets/images/behrizanLogo.png"), // Ensure you have the correct logo image
      date: "Jun 2013 – Dec 2013",
      desc: "Contributed to the execution of ISO 9001 standards, developed reports, and introduced new principles for auditing raw materials and finished products."
    },
    {
      role: "Project Management Intern",
      company: "Behrizan Design Company",
      companylogo: require("./assets/images/behrizanLogo.png"), // Ensure you have the correct logo image
      date: "Jun 2012 – Sep 2012",
      desc: "Established product scheduling for process lines, using MSP and P6 software, and presented results to top-tier managers."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "GitHub Projects",
  subtitle: "SOME OF THE PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/ragProject.png"), // Add a relevant image
      projectName: "End-to-End RAG Project",
      projectDesc:
        "An end-to-end implementation of Retrieval-Augmented Generation (RAG) using Langchain, LangSmith, and Pinecone.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Mehranmzn/end-to-end-rag"
        }
      ]
    },
    {
      image: require("./assets/images/llamaProject.png"), // Add a relevant image
      projectName: "Fine-Tuning Llama 2.7",
      projectDesc:
        "Fine-tuned Llama 2.7 to create a personalized storytelling model using transformers, PEFT, and TRL.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Mehranmzn/fine_tuning_llama_story_teller"
        }
      ]
    },
    {
      image: require("./assets/images/airflowProject.png"), // Add a relevant image
      projectName: "Stock Prices Using Airflow",
      projectDesc:
        "Showcased how to use Airflow for pipeline orchestration in gathering and analyzing stock prices.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Mehranmzn/Airflow-showcase"
        }
      ]
    },
    {
      image: require("./assets/images/afMamlProject.png"), // Add a relevant image
      projectName: "AF MAML",
      projectDesc:
        "Developed a meta-learning algorithm for early prediction of Atrial Fibrillation using the MAML approach.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Mehranmzn/AF_MAML.git"
        }
      ]
    },
    {
      image: require("./assets/images/mlflowProject.png"), // Add a relevant image
      projectName: "MLflow Small Project",
      projectDesc:
        "A small project showcasing the use of MLflow for managing machine learning experiments.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Mehranmzn/mlflow01"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Oxford Machine Learning Summer School",
      subtitle:
        "Attended the prestigious summer school covering topics such as statistical machine learning, representation learning, graph neural networks, and more.",
      image: require("./assets/images/oxfordLogo.png"), // Add the relevant image for Oxford
      imageAlt: "Oxford Machine Learning Summer School Logo",
      footerLink: [
        {
          name: "Certification",
          url: "" // Add the certification link if available
        }
      ]
    },
    {
      title: "Udacity Nanodegree - Data Science",
      subtitle:
        "Completed the Data Science Nanodegree, covering topics such as Python, PySpark, A/B testing, and SQL.",
      image: require("./assets/images/udacityLogo.png"), // Add the Udacity logo image
      imageAlt: "Udacity Data Science Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.udacity.com/certificate/G9FWDDXK"
        },
        {
          name: "View Project",
          url: "https://github.com/Mehranmzn/DataScience-Nanodegree"
        }
      ]
    },
    {
      title: "Udacity Nanodegree - Pytorch",
      subtitle:
        "Completed the Pytorch Nanodegree focusing on Python, Pytorch, and Dash.",
      image: require("./assets/images/udacityLogo.png"), // Add a relevant image for Pytorch Nanodegree
      imageAlt: "Udacity Pytorch Nanodegree Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "confirm.udacity.com/5WRAGZR9"
        },
        {
          name: "View Project",
          url: "https://github.com/Mehranmzn/Pytorch-nanodegree"
        }
      ]
    },
    {
      title: "AWS Machine Learning Foundations Course",
      subtitle:
        "Completed the AWS Machine Learning Foundations course on Udacity.",
      image: require("./assets/images/awsLogo.png"), // Add relevant image for AWS course
      imageAlt: "AWS Machine Learning Foundations Logo",
      footerLink: [
        {
          name: "Certification",
          url: "" // Add the certification link if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
