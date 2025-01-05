CREATE TABLE students (
		student_id INTEGER PRIMARY KEY,
		student_name VARCHAR(150) NOT NULL
);

CREATE TABLE class (
		class_id INTEGER PRIMARY KEY,
		student_id INTEGER NOT NULL,
		FOREIGN KEY (student_id) REFERENCES students (student_id)
);

INSERT INTO students (
		student_id, student_name
) VALUES ( 1, 'Victor' );
