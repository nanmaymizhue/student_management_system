package com.smgn.controller;

import com.smgn.entity.Student;
import com.smgn.entity.StudentDetail;
import com.smgn.exception.domain.DataNotFoundException;
import com.smgn.service.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("student")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }

    @PostMapping
    public ResponseEntity<Student> saveStudent(@RequestBody Student student){
        Student result = studentService.saveNewStudent(student);
        return ResponseEntity.ok(result);
    }

    @GetMapping
    public List<Student> getAllStudent(){
        List<Student> studentList = studentService.getAllStudents();
        return studentList;
    }

    @GetMapping("{id}")
    public ResponseEntity<Student> findStudentById(@PathVariable Integer id){
        Optional<Student> student = studentService.findStudentById(id);
        if(student.isPresent()){
            return ResponseEntity.ok(student.get());
        }

        throw new DataNotFoundException("Student with id [" + id + "] does not exist.");
    }

    @PutMapping
    public ResponseEntity<Student> updateStudent(@RequestBody Student student){
        Student result = studentService.updateStudent(student);
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("{id}")
    public String deleteStudent(@PathVariable Integer id){
        studentService.deleteStudentById(id);
        return "Successfully deleted";
    }



}
