DROP TABLE IF EXISTS creators CASCADE;
DROP TABLE IF EXISTS admins CASCADE;
DROP TABLE IF EXISTS members_clubs CASCADE;
DROP TABLE IF EXISTS clubs CASCADE;
DROP TABLE IF EXISTS members CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS members_creators CASCADE;
DROP TABLE IF EXISTS members_admins CASCADE;

CREATE TABLE members (
	member_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	member_firstname VARCHAR(32) NOT NULL,
	member_lastname VARCHAR(32) NOT NULL,
	member_email VARCHAR(32) NOT NULL,
	password VARCHAR (255) NOT NULL,
	salt VARCHAR (255) NOT NULL
);

CREATE TABLE clubs (
	club_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	club_name VARCHAR(32) NOT NULL,
	club_key VARCHAR(32) NOT NULL
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

CREATE TABLE members_creators (
	member_id INTEGER NOT NULL,
	creator_id INTEGER NOT NULL,
	FOREIGN KEY (member_id) REFERENCES members (member_id),
	FOREIGN KEY (creator_id) REFERENCES creators (creator_id)
);

CREATE TABLE admins (
	admin_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	member_id INTEGER NOT NULL,
	FOREIGN KEY (member_id) REFERENCES members (member_id)
);

CREATE TABLE members_admins (
	member_id INTEGER NOT NULL,
	admin_id INTEGER NOT NULL,
	FOREIGN KEY (member_id) REFERENCES members (member_id),
	FOREIGN KEY (admin_id) REFERENCES admins (admin_id)
);

CREATE TABLE messages (
	message_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	message_title VARCHAR(16) NOT NULL,
	message_content VARCHAR(32) NOT NULL,
	message_date DATE NOT NULL,
	member_id INTEGER NOT NULL,
	FOREIGN KEY (member_id) REFERENCES members (member_id)
);

-- Test data

INSERT INTO members (member_firstname, member_lastname, member_email, password, salt) VALUES ('Firstson', 'Lastson', 'fl@gmail.com' 'secret', 'salty');

INSERT INTO messages (
	message_title,
	message_content,
	message_date,
	member_id
	) VALUES (
	'Something',
	'I have no ideas',
	CURRENT_DATE,
	1
	),
	(
	'New message',
	'I do not think I have more ideas',
	CURRENT_DATE,
	1
	);
