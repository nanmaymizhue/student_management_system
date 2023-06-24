package com.smgn.service;

import com.smgn.entity.Student;

import java.util.List;
import java.util.Optional;

public interface StudentService {

    List<Student> getAllStudents();

    Optional<Student> findStudentById(Integer id);

    Student saveNewStudent(Student student);

    Student updateStudent(Student student);

    void deleteStudentById(Integer id);
}
