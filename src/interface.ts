export interface SkillsInfo {
  id: number;
  skillName: string;
  imgUrl: string;
}

export interface ProjectCardType {
  id: number;
  img_url: string;
  project_name: string;
  activity_type: string;
  project_introduction: string;
  github_url: string;
  distribute_url: string;
  blog_url: string;
}

export interface ProjectsListData {
  projects_list: ProjectCardType[];
  internship_list: ProjectCardType[];
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
}
