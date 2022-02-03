import { useCallback, useEffect, useState } from "react";

export const useStudentNumber = () => {
  const [studentNumber, setStudentNumber] = useState("");

  const getStudentNumber = useCallback(() => {
    return localStorage.getItem("studentNumber");
  }, []);

  const saveStudentNumber = useCallback(() => {
    localStorage.setItem("studentNumber", studentNumber);
  }, [studentNumber]);

  useEffect(() => {
    const studentNumber = getStudentNumber();
    if (studentNumber) {
      setStudentNumber(studentNumber);
    }
  }, [getStudentNumber]);

  return {
    studentNumber,
    setStudentNumber,
    getStudentNumber,
    saveStudentNumber,
  };
};
