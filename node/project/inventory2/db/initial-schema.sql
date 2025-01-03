CREATE TABLE class (
		class_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		student_id INTEGER PRIMARY KEY NOT NULL,
		FOREIGN KEY (student_id) REFERENCES (students)
);

CREATE TABLE students (
		student_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		student_name VARCHAR(100) NOT NULL
);
