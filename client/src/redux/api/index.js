import axios from "axios";

// Set up the API base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5001/",
});

// Request interceptor to add the Authorization header
API.interceptors.request.use(
  (req) => {
    const user = localStorage.getItem("user");
    if (user) {
      req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log and handle API errors
    console.error("API Error:", error.response?.data || error.message);
    // Optionally: Display a notification or alert to users
    // notifyUser("An error occurred. Please try again.");
    return Promise.reject(error);
  }
);

// Admin API
export const adminSignIn = (formData) => API.post("/api/admin/login", formData);

export const adminUpdatePassword = (updatedPassword) => 
  API.post("/api/admin/updatepassword", updatedPassword);

export const getAllStudent = () => API.get("/api/admin/getallstudent");

export const getAllFaculty = () => API.get("/api/admin/getallfaculty");

export const getAllAdmin = () => API.get("/api/admin/getalladmin");

export const getAllDepartment = () => API.get("/api/admin/getalldepartment");

export const getAllSubject = () => API.get("/api/admin/getallsubject");

export const updateAdmin = (updatedAdmin) => 
  API.post("/api/admin/updateprofile", updatedAdmin);

export const addAdmin = (admin) => API.post("/api/admin/addadmin", admin);

export const createNotice = (notice) => API.post("/api/admin/createnotice", notice);

export const deleteAdmin = (adminId) => 
  API.post("/api/admin/deleteadmin", { adminId });

export const deleteFaculty = (facultyId) => 
  API.post("/api/admin/deletefaculty", { facultyId });

export const deleteStudent = (studentId) => 
  API.post("/api/admin/deletestudent", { studentId });

export const deleteSubject = (subjectId) => 
  API.post("/api/admin/deletesubject", { subjectId });

export const deleteDepartment = (departmentId) => 
  API.post("/api/admin/deletedepartment", { departmentId });

export const getAdmin = (adminId) => 
  API.post("/api/admin/getadmin", { adminId });

export const addDepartment = (department) => 
  API.post("/api/admin/adddepartment", department);

export const addFaculty = (faculty) => 
  API.post("/api/admin/addfaculty", faculty);

export const getFaculty = (departmentId) => 
  API.post("/api/admin/getfaculty", { departmentId });

export const addSubject = (subject) => 
  API.post("/api/admin/addsubject", subject);

export const getSubject = (subjectId) => 
  API.post("/api/admin/getsubject", { subjectId });

export const addStudent = (student) => 
  API.post("/api/admin/addstudent", student);

export const getStudent = (studentId) => 
  API.post("/api/admin/getstudent", { studentId });

export const getNotice = (noticeId) => 
  API.post("/api/admin/getnotice", { noticeId });

// Faculty API
export const facultySignIn = (formData) => 
  API.post("/api/faculty/login", formData);

export const facultyUpdatePassword = (updatedPassword) => 
  API.post("/api/faculty/updatepassword", updatedPassword);

export const updateFaculty = (updatedFaculty) => 
  API.post("/api/faculty/updateprofile", updatedFaculty);

export const createTest = (test) => 
  API.post("/api/faculty/createtest", test);

export const getTest = (testId) => 
  API.post("/api/faculty/gettest", { testId });

export const getMarksStudent = (studentId) => 
  API.post("/api/faculty/getstudent", { studentId });

export const uploadMarks = (data) => 
  API.post("/api/faculty/uploadmarks", data);

export const markAttendance = (data) => 
  API.post("/api/faculty/markattendance", data);

// Student API
export const studentSignIn = (formData) => 
  API.post("/api/student/login", formData);

export const studentUpdatePassword = (updatedPassword) => 
  API.post("/api/student/updatepassword", updatedPassword);

export const updateStudent = (updatedStudent) => 
  API.post("/api/student/updateprofile", updatedStudent);

export const getTestResult = (testResult) => 
  API.post("/api/student/testresult", testResult);

export const getAttendance = (attendance) => 
  API.post("/api/student/attendance", attendance);
