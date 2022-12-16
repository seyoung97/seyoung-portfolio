export interface SkillsInfo {
  id: number;
  skill_type: string;
  skillName: string;
  imgUrl: string;
  projects: { project_name: string; link: string }[];
}

export interface ProjectDetailType {
  breif_info: { introduction: string; period: string; team: string };
  project_introduction: string[];
  links: { link_name: string; link_url: string }[];
  video_url: string;
  tech_stack: { position: string; skills: string[] }[];
  structure: { img_url: string[]; explain: string[] };
  cooperation: { title: string; content: string[] }[];
  Feature: {
    page_name: string;
    page_gif: string;
    features: { feature_name: string; code_img: string[]; explain: string[] }[];
  }[];
  Trouble_Shooting: {
    title: string;
    explain: string[];
    subtitle: string;
    figure_out: string[];
    subtitle_2: string;
    problem_solving: string[];
    subtitle_3: string;
    lesson: string[];
  }[];
  Level_up: string[];
  review: { sub_titile: string; explain: string[] }[];
}

export interface ProjectDataType {
  id: number;
  img_url: string;
  project_name: string;
  activity_type: string;
  project_introduction: string;
  github_url: string;
  distribute_url: string;
  blog_url: string;
  details: ProjectDetailType;
}

export interface ProjectsListData {
  projects_list: ProjectDataType[];
  internship_list: ProjectDataType[];
}

export interface EducationType {
  id: number;
  img_url: string;
  course_name: string;
  major: string;
  double_major: string;
  period: string;
  explain: string[];
}

export interface EducationListType {
  education: EducationType[];
  work_experience: EducationType[];
}

export interface ContentPropsType {
  Data: ProjectDetailType;
}
