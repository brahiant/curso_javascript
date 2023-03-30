class Course {
    constructor({
      id,
      name,
      teacher,
      lessons = [],
    }) {
      this.id = id;
      this.name = name;
      this.teacher = teacher;
      this.lessons = lessons;
    }
  }
  
  class LearningPath {
    constructor({
      id,
      name,
      courses = [],
    }) {
      this.id = id;
      this.name = name;
      this.courses = courses;
    }
  
    addCourse(course) {
      this.courses.push(course);
    }
  
    replaceCourse(oldCourse, newCourse) {
      const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);//find id course for index array list
  
      if (oldCourseIndex !== -1) {//validate id is diferent or not
        this.courses[oldCourseIndex] = newCourse; //replace value in index array list
      }
  
      return this.courses;
    }
  
    deleteCourse(oldCourse) {
      const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id); //find id course for index array list
      this.courses.splice(courseIndex, 1);//deleted value of array list 
  
      return this.courses;
    }
  }
  
  // enter values in instance of the class
  const reactNativeLearningPath = new LearningPath({
    id: 'react-native',
    name: 'Desarrollo de Apps con React Native',
    //this is array of object 
    courses: [
      new Course({ 
        id: 'basico-javascript', 
        name: 'Curso Básico de JavaScript', 
        teacher: 'Diego De Granda',
      }),
      new Course({
        id: 'ecmascript-6',
        name: 'Curso de ECMAScript 6+',
        teacher: 'Orlando Naipes',
      }),
    ]
  })

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});