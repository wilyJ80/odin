DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS clubs;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS creators;
DROP TABLE IF EXISTS admins;

CREATE TABLE messages (
		message_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		message_title VARCHAR(16) NOT NULL,
		message_content VARCHAR(32) NOT NULL,
		message_date DATE NOT NULL,
		member_id INTEGER NOT NULL,
		FOREIGN KEY (member_id) REFERENCES members (member_id)
);

CREATE TABLE clubs (
		club_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		club_name VARCHAR(32) NOT NULL,
		club_key VARCHAR(32) NOT NULL
);

CREATE TABLE members (
		member_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		member_firstname VARCHAR(32) NOT NULL,
		member_lastname VARCHAR(32) NOT NULL,
		member_email VARCHAR(32) NOT NULL,
		password VARCHAR (255) NOT NULL,
		salt VARCHAR (255) NOT NULL
);

CREATE TABLE members_clubs (
		member_id INTEGER NOT NULL,
		club_id INTEGER NOT NULL,
		FOREIGN KEY(member_id) REFERENCES members(member_id),
		FOREIGN KEY(club_id) REFERENCES clubs(club_id)
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
