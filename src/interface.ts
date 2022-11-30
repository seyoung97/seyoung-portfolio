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
