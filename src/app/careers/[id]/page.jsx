import { idData } from "./idData";
import JobDetails from "./JobDetails";

// Define the generateStaticParams function
export async function generateStaticParams() {
  return idData.map((item) => ({
    id: item.id.toString(), // Convert numeric ID to string for URL
  }));
}

export default function Page({ params }) {
  const { id } = params;
  const jobData = idData.find((item) => item.id.toString() === id);

  if (!jobData) {
    return <p>Job not found</p>;
  }

  return <JobDetails jobData={jobData} />;
}
