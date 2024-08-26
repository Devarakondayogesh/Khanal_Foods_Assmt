import {
  SET_ERRORS,
  UPDATE_PASSWORD,
  TEST_RESULT,
  STUDENT_LOGIN,
  ATTENDANCE,
  UPDATE_STUDENT,
  GET_SUBJECT,
} from "../actionTypes";
import * as api from "../api";

export const studentSignIn = (formData, navigate) => async (dispatch) => {
  try {
    const response = await api.studentSignIn(formData);
    const data = response?.data;
    if (data) {
      dispatch({ type: STUDENT_LOGIN, data });
      if (data.result?.passwordUpdated) {
        navigate("/student/home");
      } else {
        navigate("/student/password");
      }
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error in studentSignIn:", error);
    dispatch({
      type: SET_ERRORS,
      payload: error.response?.data || "An unexpected error occurred",
    });
  }
};

export const studentUpdatePassword = (formData, navigate) => async (dispatch) => {
  try {
    const response = await api.studentUpdatePassword(formData);
    const data = response?.data;
    if (data) {
      dispatch({ type: UPDATE_PASSWORD, payload: true });
      alert("Password Updated");
      navigate("/student/home");
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error in studentUpdatePassword:", error);
    dispatch({
      type: SET_ERRORS,
      payload: error.response?.data || "An unexpected error occurred",
    });
  }
};

export const updateStudent = (formData) => async (dispatch) => {
  try {
    const response = await api.updateStudent(formData);
    const data = response?.data;
    if (data) {
      dispatch({ type: UPDATE_STUDENT, payload: true });
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error in updateStudent:", error);
    dispatch({
      type: SET_ERRORS,
      payload: error.response?.data || "An unexpected error occurred",
    });
  }
};

export const getSubject = (department, year) => async (dispatch) => {
  try {
    const formData = { department, year };
    const response = await api.getSubject(formData);
    const data = response?.data;
    if (data) {
      dispatch({ type: GET_SUBJECT, payload: data });
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error in getSubject:", error);
    dispatch({
      type: SET_ERRORS,
      payload: error.response?.data || "An unexpected error occurred",
    });
  }
};

export const getTestResult = (department, year, section) => async (dispatch) => {
  try {
    const formData = { department, year, section };
    const response = await api.getTestResult(formData);
    const data = response?.data;
    if (data) {
      dispatch({ type: TEST_RESULT, payload: data });
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error in getTestResult:", error);
    dispatch({
      type: SET_ERRORS,
      payload: error.response?.data || "An unexpected error occurred",
    });
  }
};

export const getAttendance = (department, year, section) => async (dispatch) => {
  try {
    const formData = { department, year, section };
    const response = await api.getAttendance(formData);
    const data = response?.data;
    if (data) {
      dispatch({ type: ATTENDANCE, payload: data });
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error in getAttendance:", error);
    dispatch({
      type: SET_ERRORS,
      payload: error.response?.data || "An unexpected error occurred",
    });
  }
};
