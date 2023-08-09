show databases;

create database LINCOOK;

use LINCOOK;

create table user_info(c_num int NOT NULL,
					   c_id varchar(255) NOT NULL,
                       c_pw varchar(255) NOT NULL,
                       c_local varchar(255),
                       PRIMARY KEY (c_num)
                       );

ALTER TABLE user_info CHANGE COLUMN c_num u_num INT;
ALTER TABLE user_info CHANGE COLUMN c_id u_id varchar(255);
ALTER TABLE user_info CHANGE COLUMN c_pw u_pw varchar(255);
ALTER TABLE user_info CHANGE COLUMN c_local u_local varchar(255);
                       
create table product(p_id int NOT NULL,
					 p_price varchar(255),
					 p_market varchar(255),
					 p_category varchar(255),
					 PRIMARY KEY (p_id)
					 );
                     
create table shopping(s_id int NOT NULL,
					  s_price varchar(255),
					  s_product varchar(255),
					  s_market varchar(255),
					  PRIMARY KEY (s_id)
					  );
                      
ALTER TABLE shopping CHANGE COLUMN s_id r_id INT;
ALTER TABLE shopping CHANGE COLUMN s_product r_product varchar(255);
RENAME TABLE shopping TO recipe;
ALTER TABLE recipe DROP COLUMN s_market;
ALTER TABLE recipe DROP COLUMN s_price;

describe recipe;

create table board(b_id int NOT NULL,
				   b_url varchar(255),
                   b_p_id varchar(255),
                   PRIMARY KEY (b_id)
                   );

create table category(c_id int NOT NULL,
					  c_top varchar(255),
					  c_low varchar(255),
					  PRIMARY KEY (c_id)
					  );
                       
