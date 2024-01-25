import { IStudentInfo } from "./IStudent";
import { Student } from "./Student";

export class Management {
  private static MAX_NUMBER_OF_STUDENTS = 100;
  private static _studentList: Student[];

  static {
    this._studentList = [];
  }

  /**
   * factory method to Create A Student
   * @param studentDetails
   * @returns
   */
  public static createStudent(name:string,studentDetails: IStudentInfo): Student {
    if (this._studentList.length < this.MAX_NUMBER_OF_STUDENTS) {
      if (!this.checkStudentAlreadyExists(studentDetails)) {
        let newStudent = new Student(name,studentDetails);

        //add to the list
        this._studentList.push(newStudent);
        return newStudent;
      } else {
        throw new Error("Managemnt clas");
      }
    } else {
      throw new Error("Maximum number of stuent is reached");
    }
  }

  //check student already created!
  public static checkStudentAlreadyExists(
    studentDetails: IStudentInfo
  ): boolean {
    let searchResult = Management._studentList.find((item) => {
      return item.StudentID === studentDetails.studentID;
    });
    if (searchResult) {
      return true;
    } else {
      return false;
    }
  }
}
