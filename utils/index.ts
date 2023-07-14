import { CompanySummary } from "../types";

export const getPrimaryVertial = (jsonArray: CompanySummary[]) => {
  const verticalCount: any = {};

  // Iterate through each object in the array
  jsonArray.forEach((company) => {
    // Extract the value of "primary_vertical" field
    const vertical = company.primary_vertical;

    // Increase the occurrence count for the vertical
    if (vertical && verticalCount[vertical]) {
      verticalCount[vertical]++;
    } else {
      verticalCount[vertical] = 1;
    }
  });

  // Convert the verticalCount object to an array of objects
  const verticalCountArray = Object.entries(verticalCount).map(
    ([name, occ]) => ({ name, occ })
  );

  // Print the array of objects with vertical names and occurrence count
  return verticalCountArray;
};

export const getSkills = (jsonArray: CompanySummary[]) => {
  const skillCount: any = {};

  // Iterate through each object in the array
  jsonArray.forEach((company) => {
    // Iterate through each job in the "jobs" array
    company.jobs.forEach((job) => {
      // Extract the skills array from the current job
      const skills = job.skills;

      // Count the occurrence of each skill
      skills.forEach((skill) => {
        if (skill && skillCount[skill]) {
          skillCount[skill]++;
        } else {
          skillCount[skill] = 1;
        }
      });
    });
  });

  // Convert the skillCount object to an array of objects
  const skillCountArray = Object.entries(skillCount).map(([name, occ]) => ({
    name,
    occ,
  }));

  // Print the array of objects with skill names and occurrence count
  return skillCountArray;
};

export const getJobNames = (jsonArray: CompanySummary[]) => {
  const jobNameCount: any = {};

  // Iterate through each object in the array
  jsonArray.forEach((company) => {
    // Iterate through each job in the "jobs" array
    company.jobs.forEach((job) => {
      // Extract the job name
      const jobName = job.title;

      // Count the occurrence of each job name
      if (jobName && jobNameCount[jobName]) {
        jobNameCount[jobName]++;
      } else {
        jobNameCount[jobName] = 1;
      }
    });
  });

  // Convert the jobNameCount object to an array of objects
  const jobNameCountArray = Object.entries(jobNameCount).map(([name, occ]) => ({
    name,
    occ,
  }));

  // Print the array of objects with job names and occurrence count
  return jobNameCountArray;
};

const categories = [
  { name: "Lead", keywords: ["Lead"] },
  {
    name: "Frontend",
    keywords: ["Frontend", "Front-end", "React", "Web UI Engineer"],
  },
  { name: "Mobile", keywords: ["iOS", "Android"] },
  { name: "Backend", keywords: ["Backend", "Back-end"] },
  { name: "Business", keywords: ["Business Analyst", "Business Intelligence"] },
  { name: "Data", keywords: ["Data"] },
  { name: "Machine Learning", keywords: ["Machine Learning", "ML"] },
  { name: "Growth", keywords: ["Growth"] },
  { name: "Account", keywords: ["Account Manager", "Accounts Director"] },
  { name: "Product Manager", keywords: ["Product Manager"] },
  { name: "Full Stack", keywords: ["Full Stack", "Full-Stack"] },
  { name: "Product Engineer", keywords: ["Product Engineer"] },
  { name: "Designer", keywords: ["Designer"] },
  { name: "System", keywords: ["System", "Systems"] },
  { name: "Operations", keywords: ["Operations"] },
  { name: "Software Engineer", keywords: ["Software Engineer"] },
  { name: "Quality Assurance", keywords: ["Quality Assurance", "QA"] },
  { name: "Community", keywords: ["Sale", "Marketing"] },
  { name: "Other", keywords: [] },
];

export const getJobCategories = (jsonArray: CompanySummary[]) => {
  const categoryCount: any = {};

  // Iterate through each object in the array
  jsonArray.forEach((company) => {
    // Iterate through each job in the "jobs" array
    company.jobs.forEach((job) => {
      // Extract the job name
      const jobName = job.title;

      // Find the matching category for the job name
      let matchedCategory = categories.find((category) => {
        return category.keywords.some((keyword) =>
          jobName.toLowerCase().includes(keyword.toLowerCase())
        );
      });

      // If no category is found, assign it to "Other"
      if (!matchedCategory) {
        matchedCategory = { name: "Other", keywords: [] };
      }

      // Count the occurrence of each category
      if (matchedCategory.name && categoryCount[matchedCategory.name]) {
        categoryCount[matchedCategory.name]++;
      } else {
        categoryCount[matchedCategory.name] = 1;
      }
    });
  });

  // Convert the categoryCount object to an array of objects
  const categoryCountArray = Object.entries(categoryCount).map(
    ([name, occ]) => ({ name, occ })
  );

  // Print the array of objects with category names and occurrence count
  return categoryCountArray;
};
