import { redirect } from "next/navigation";

export const metadata = {
  title: "Open Positions - Tiger BioSciences",
  description: "View current job openings at Tiger BioSciences.",
};

export default function JobsPage() {
  redirect("https://jobs.tigerbiosciences.com");
}
