CREATE TABLE messages (
		message_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		message_title VARCHAR(16) NOT NULL,
		message_content VARCHAR(32) NOT NULL,
		message_date DATE NOT NULL,
		member_id INTEGER NOT NULL,
		FOREIGN KEY (member_id) REFERENCES members (member_id)
);

CREATE TABLE members (
		member_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		member_firstname VARCHAR(32) NOT NULL,
		member_lastname VARCHAR(32) NOT NULL,
		member_email VARCHAR(32) NOT NULL,
		password VARCHAR (255) NOT NULL,
		salt VARCHAR (255) NOT NULL
);

CREATE TABLE creators (
		creator_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		member_id INTEGER NOT NULL,
		FOREIGN KEY (member_id) REFERENCES members (member_id)
);

CREATE TABLE admins (
		admin_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		member_id INTEGER NOT NULL,
		FOREIGN KEY (member_id) REFERENCES members (member_id)
);
