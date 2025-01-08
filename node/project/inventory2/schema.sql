DROP TABLE IF EXISTS students_classes;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS students;

CREATE TABLE students (
	student_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	student_name VARCHAR(150) NOT NULL
);

CREATE TABLE classes (
	class_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	class_name VARCHAR(150) NOT NULL
);

CREATE TABLE students_classes (
	student_id INTEGER NOT NULL,
	class_id INTEGER NOT NULL,
	FOREIGN KEY(student_id) REFERENCES students(student_id),
	FOREIGN KEY(class_id) REFERENCES classes(class_id)
);

INSERT INTO students (
	student_name
	) VALUES ('Victor'), ('Jose'), ('Ingrid'), ('Daniel'), ('Ivan'), ('Joshua'), ('Lucas');

INSERT INTO classes (
	class_name
	) VALUES (1510), (9);

INSERT INTO students_classes (
	student_id, class_id
	) VALUES (1, 1), (2, 2), (3, 1), (4, 1), (5, 1), (6, 1), (7, 1);
