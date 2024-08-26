import {
  ADMIN_LOGIN,
  UPDATE_ADMIN,
  ADD_ADMIN,
  ADD_DEPARTMENT,
  ADD_FACULTY,
  GET_ALL_FACULTY,
  ADD_SUBJECT,
  ADD_STUDENT,
  GET_ALL_STUDENT,
  GET_FACULTY,
  GET_SUBJECT,
  GET_STUDENT,
  GET_ALL_ADMIN,
  GET_ALL_DEPARTMENT,
  SET_ERRORS,
  UPDATE_PASSWORD,
  GET_ALL_SUBJECT,
  DELETE_ADMIN,
  DELETE_DEPARTMENT,
  DELETE_FACULTY,
  DELETE_STUDENT,
  DELETE_SUBJECT,
  CREATE_NOTICE,
  GET_NOTICE,
} from "../actionTypes";
import * as api from "../api";

const handleApiError = (error, dispatch) => {
  const errorMessage = error.response?.data || "An unexpected error occurred";
  dispatch({ type: SET_ERRORS, payload: errorMessage });
};

export const adminSignIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.adminSignIn(formData);
    dispatch({ type: ADMIN_LOGIN, data });
    navigate(data.result.passwordUpdated ? "/admin/home" : "/admin/update/password");
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const adminUpdatePassword = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.adminUpdatePassword(formData);
    dispatch({ type: UPDATE_PASSWORD, payload: true });
    alert("Password Updated Successfully");
    navigate("/admin/home");
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const getAllStudent = () => async (dispatch) => {
  try {
    const { data } = await api.getAllStudent();
    dispatch({ type: GET_ALL_STUDENT, payload: data });
  } catch (error) {
    console.log("Error fetching students:", error);
    handleApiError(error, dispatch);
  }
};

export const getAllFaculty = () => async (dispatch) => {
  try {
    const { data } = await api.getAllFaculty();
    dispatch({ type: GET_ALL_FACULTY, payload: data });
  } catch (error) {
    console.log("Error fetching faculty:", error);
    handleApiError(error, dispatch);
  }
};

export const getAllAdmin = () => async (dispatch) => {
  try {
    const { data } = await api.getAllAdmin();
    dispatch({ type: GET_ALL_ADMIN, payload: data });
  } catch (error) {
    console.log("Error fetching admins:", error);
    handleApiError(error, dispatch);
  }
};

export const getAllDepartment = () => async (dispatch) => {
  try {
    const { data } = await api.getAllDepartment();
    dispatch({ type: GET_ALL_DEPARTMENT, payload: data });
  } catch (error) {
    console.log("Error fetching departments:", error);
    handleApiError(error, dispatch);
  }
};

export const getAllSubject = () => async (dispatch) => {
  try {
    const { data } = await api.getAllSubject();
    dispatch({ type: GET_ALL_SUBJECT, payload: data });
  } catch (error) {
    console.log("Error fetching subjects:", error);
    handleApiError(error, dispatch);
  }
};

export const updateAdmin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateAdmin(formData);
    dispatch({ type: UPDATE_ADMIN, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const addAdmin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addAdmin(formData);
    alert("Admin Added Successfully");
    dispatch({ type: ADD_ADMIN, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const createNotice = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createNotice(formData);
    alert("Notice Created Successfully");
    dispatch({ type: CREATE_NOTICE, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const getAdmin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getAdmin(formData);
    dispatch({ type: GET_STUDENT, payload: data });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const deleteAdmin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteAdmin(formData);
    alert("Admin Deleted Successfully");
    dispatch({ type: DELETE_ADMIN, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const deleteFaculty = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteFaculty(formData);
    alert("Faculty Deleted Successfully");
    dispatch({ type: DELETE_FACULTY, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const deleteStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteStudent(formData);
    alert("Student Deleted Successfully");
    dispatch({ type: DELETE_STUDENT, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const deleteSubject = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteSubject(formData);
    alert("Subject Deleted Successfully");
    dispatch({ type: DELETE_SUBJECT, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const deleteDepartment = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteDepartment(formData);
    alert("Department Deleted Successfully");
    dispatch({ type: DELETE_DEPARTMENT, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const addDepartment = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addDepartment(formData);
    alert("Department Added Successfully");
    dispatch({ type: ADD_DEPARTMENT, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const addFaculty = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addFaculty(formData);
    alert("Faculty Added Successfully");
    dispatch({ type: ADD_FACULTY, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const getFaculty = (department) => async (dispatch) => {
  try {
    const { data } = await api.getFaculty(department);
    dispatch({ type: GET_FACULTY, payload: data });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const addSubject = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addSubject(formData);
    alert("Subject Added Successfully");
    dispatch({ type: ADD_SUBJECT, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const getSubject = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getSubject(formData);
    dispatch({ type: GET_SUBJECT, payload: data });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const addStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addStudent(formData);
    alert("Student Added Successfully");
    dispatch({ type: ADD_STUDENT, payload: true });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const getStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getStudent(formData);
    dispatch({ type: GET_STUDENT, payload: data });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};

export const getNotice = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getNotice(formData);
    dispatch({ type: GET_NOTICE, payload: data });
  } catch (error) {
    handleApiError(error, dispatch);
  }
};
