USE myapp;
DROP TABLE if exists appUsers, 
					 usersContact, 
                     usersCredentials, 
                     reminderList, 
                     reminderTable, 
                     reminderStatus;

CREATE TABLE appUsers (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name   VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE usersContact (
  id INT NOT NULL,
  -- user_id INT NOT NULL,
  phone1 VARCHAR(50) NOT NULL,
  phone2 VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  FOREIGN KEY (id) REFERENCES appUsers (id) ON DELETE CASCADE
 --  FOREIGN KEY (user_id)
--   REFERENCES appUsers (id)
-- 	ON DELETE CASCADE
);

CREATE TABLE usersCredentials (
  id INT NOT NULL,
  username VARCHAR(25),
  user_password VARCHAR(100),
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);

CREATE TABLE reminderList (
	id INT NOT NULL,
	task_no INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL,
    task_type VARCHAR(20) NOT NULL,
    FOREIGN KEY (id) REFERENCES appUsers (id) ON DELETE CASCADE,
    PRIMARY KEY (task_no)
);

CREATE TABLE reminderTable (
	-- user_id INT NOT NULL,
    task_no INT NOT NULL,
    task_status VARCHAR(10) NOT NULL,
    task_repeat VARCHAR(10) NOT NULL,
	-- FOREIGN KEY (user_id) REFERENCES usersContact (user_id) ON DELETE CASCADE,
	FOREIGN KEY (task_no) REFERENCES reminderList (task_no) ON DELETE CASCADE
);

CREATE TABLE reminderStatus (
	task_no INT NOT NULL,
    task_status VARCHAR(10) NOT NULL,
    check_date DATE NOT NULL,
    FOREIGN KEY (task_no) REFERENCES reminderList (task_no) ON DELETE CASCADE
);
