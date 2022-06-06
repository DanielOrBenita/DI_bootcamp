-- CREATE TABLE students (
-- 	id_number serial,
-- 	last_name character varying(50),
-- 	first_name character varying(50),
-- 	birth_day date
	
-- );

select * from public.students


insert into public.students values 
	(default, 'Marc' , 'Benichou', '1998-11-02') ,
	(default, 'Lea' , 'Benichou', '27/07/1987') ,
	(default, 'Amelia' , 'Dux', '07/04/1996'),
	(default, 'David' , 'Grez', '14/06/2003'),
	(default, 'Omer' , 'Simpson', '03/10/1980'),

select * from public.students

--1
select * from public.students where id_number = 2

--2
select * from public.students where last_name = 'Marc' AND first_name = 'Benichou'

--3
select * from public.students where last_name = 'Marc' OR first_name = 'Benichou'

--4
select * from public.students where last_name LIKE '%a%';

--5
select * from public.students where last_name LIKE 'a%';

--6
select * from public.students where last_name LIKE '%a';

--7
select * from public.students where id_number = 2 or  id_number = 3
--8
select * from public.students where birth_day >= ' 1/01/2000'

