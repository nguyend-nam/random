export interface Company {
  id: number;
  website: string;
  name: string;
  slug: string;
  batch: string;
  location: string;
  is_hiring: boolean;
  description: string;
  hiring_description: string;
  tech_description: string;
  lat: string;
  lng: string;
  primary_vertical: string;
  parent_sector: string;
  child_sector: string;
  team_size: number;
  pretty_location: string;
  logo_url: string;
  small_logo_url: string;
  twitter_url: string;
  fb_url: string;
  ats_url: string;
  ats_email: string;
  hiring_jobs_url: string;
  one_liner: string;
  country: string;
  show_waas_founder_contact: boolean;
  website_url: string;
  website_display: string;
  ats_name: string;
  visibility: string;
  bf_internal_url: any;
  jobs: Job[];
  founders: Founder[];
  company_news: CompanyNew[];
  waas_company_videos: any[];
  hiring_video_url: any;
  event_video_urls: EventVideoUrls;
  event_attendees: any;
  waas_ats_integrations: any[];
  external_link: string;
}

export interface CompanyNew {
  id: number;
  title: string;
  url: string;
  image_url: any;
  posted_at: string;
  created_at: string;
  updated_at: string;
  domain: string;
}

export interface EventVideoUrls {}

export interface Founder {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  founder_bio: any;
  linkedin: string;
  avatar_medium: string;
  avatar_thumb: string;
  past_companies: string;
  past_schools: string;
}

export interface Job {
  id: number;
  company_id: number;
  state: string;
  title: string;
  skills: Skill[];
  description: string;
  salary_min: number;
  salary_max: number;
  equity_min: any;
  equity_max: any;
  show_path: string;
  edit_path: string;
  interview_process: string;
  time_to_hire: any;
  pretty_job_type: string;
  pretty_eng_type: string;
  pretty_design_type: string;
  pretty_science_type: string;
  pretty_recruiting_type: string;
  pretty_min_experience: string;
  pretty_min_school_year: string;
  pretty_location_or_remote: string;
  pretty_salary_range: string;
  pretty_equity_range: string;
  job_type: string;
  eng_type: string[];
  design_type: any;
  design_portfolio_only: any;
  science_type: any;
  recruiting_type: any;
  min_experience: number;
  location: any;
  locations: string[];
  remote: string;
  local_only: any;
  visa: string;
  hiring_manager: HiringManager;
  jobs_search: JobsSearch;
  Technologies?: string;
}

export interface HiringManager {
  id: number;
  hnid: string;
  first_name: string;
  last_name: string;
  avatar_thumb: string;
  avatar_medium: string;
}

export interface JobsSearch {
  id: number;
  state: string;
  filters: Filters;
  created_at: string;
}

export interface Filters {
  role: string;
  visa: string;
  remote: string;
  eng_type: string[];
  job_type: string;
  locations: string[];
  min_experience: number;
  remote_restrictions: string[];
}

export interface Skill {
  id: number;
  name: string;
  popularity: number;
}

export interface CompanySummary {
  name: string;
  country: string;
  primary_vertical: string;
  tech_description: string;
  website: string;
  jobs: JobSummary[];
}

interface JobSummary {
  pretty_eng_type: string;
  title: string;
  skills: string[]; // GraphQL, JavaScript
}
