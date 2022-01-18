declare namespace responseResult {
  interface CourseItem {
    title: string;
    count: number;
  }
  interface CourseData {
    time: number;
    course: CourseItem[];
  }

  type isloggedin = boolean;
  type logout = boolean;
  type login = boolean;

  type getdata = boolean;
  type showdata = CourseData[];
}
