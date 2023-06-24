package com.smgn.service.impl;

import com.smgn.entity.Student;
import com.smgn.entity.StudentDetail;
import com.smgn.exception.domain.DataNotFoundException;
import com.smgn.repo.StudentDetailRepository;
import com.smgn.repo.StudentRepository;
import com.smgn.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final StudentDetailRepository studentDetailRepository;

    public StudentServiceImpl(StudentRepository studentRepository, StudentDetailRepository studentDetailRepository){
        this.studentRepository = studentRepository;
        this.studentDetailRepository = studentDetailRepository;
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student saveNewStudent(Student student) {

        Student s = studentRepository.save(student);

        // Save student details
        Student tempStudent = new Student();
        tempStudent.setId(s.getId());
        student.getStudentDetailList().forEach(detail -> {
            detail.setStudent(tempStudent);
            studentDetailRepository.save(detail);
        });
        return s;
    }

    @Override
    public Student updateStudent(Student student) {

        Student tempStudent = new Student();
        tempStudent.setId(student.getId());

        student.getStudentDetailList().forEach(detail -> {
            detail.setStudent(tempStudent);
            studentDetailRepository.save(detail);
        });
        return studentRepository.save(student);
    }

    @Override
    public Optional<Student> findStudentById(Integer id) {
        return studentRepository.findById(id);
    }

    @Override
    public void deleteStudentById(Integer id) {
        Optional<Student> student = findStudentById(id);
        if(student.isPresent()){
            studentRepository.delete(student.get());
        }else{
            throw new DataNotFoundException("Student with id [" + id + "] does not exist.");
        }
    }
}
