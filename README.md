# Reminder App
## Descriptions
The idea of creating a reminder app is for the pure purpose of reminding myself for things that has scheduled in different dates and times. Sometimes, our brains are too full to remember all the upcoming events in the near or far future, and the reminder app is one of our best friends which helps keeping things/lists in order and time. The best part is it can notice us ahead of time to prepare for the event, appointments, or even taking medicine, etc.
## Data categorize
  *****
  1. appUsers table 
  
  | id  | first_name | last_name |
  | -   | -         | -         |
  | 001 | test1      | user1     |
  | 002 | test2      | user2     |
  * id - Primary key
  2. usersContact table

  | id  | phone1 | phone2 | email |
  | -   | -          | -         | - |
  | 001 | test1      | user1     | testuser1|
  | 002 | test2      | user2     | testuser2|
  * id - foreign key
  3. usersCredentials table

  | id  | username | user_password |
  | -   | -         | -         |
  | 001 | test1      | user1     |
  | 002 | test2      | user2     |
  * id - Primary Key
  * username - unique key
  4. reminderList table 

  | id  | task_no | title | task_type |
  | -   | -          | -         | - |
  | 001 | 1      | abc     | efd|
  | 002 | 2      | hij     | klmn|  
  * id - FK
  * task_no - PK
  5. reminderTable table

  | task_no  | task_status | repeat |
  | -   | -         | -         |
  | 1 | completed      | none     |
  | 2 | deleted      | none     |
  * task_no - FK

6. reminderStatus table 

  | task_no  | task_status | check_date |
  | -   | -         | -         |
  | 1 | completed      | 01/01/2023     |
  | 2 | deleted      | 01/05/2023     |

  * task_no -FK
## App table relationship
* Each user has one and only one username and password (`usersCredentials`'s table).
* Each user can has 2 phone numbers and email thru `usersContact`.
* Users can create multi tasks in `reminderList`.
* Details of the task list can be checked thru task_no to see the type, date, time and status from `reminderTable` and `reminderStatus` .

## Seed database 
*For window users only :*

1. From search bar search for Windows Powershell
2. Cd into the folder where we stored the sql file.
3. Use "Get-Content users.sql | mysql -u root -p" cmd to run data. 
4. Enter password that created/stored in Mysql. If there no error, data should be on loading status.
5. Go to MySQL Workbench and refresh the `Shema` tab on the left. You should see the table pops up. 
Run    `SELECT * FROM appUsers;` 

    | id  | first_name | last_name |
    | -   | -         | -         |
If you see the table, you connected to the data.