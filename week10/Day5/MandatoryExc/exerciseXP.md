--1
select * from public.employees
select first_name AS first_name1, last_name AS Last_name1
from public.employees

--2
SELECT distinct department_id 
FROM employees;

--3
select * from public.employees order by first_name desc

--4
select first_name , last_name, salary*1.15 as pf from public.employees 

--5
select first_name , last_name, salary from public.employees
order by salary asc

--6
select sum(salary) from public.employees

--7
select min(salary) , max(salary) from public.employees

--8
select round(avg(salary)) from public.employees

--9
select count(employee_id) from public.employees

--10
select upper(first_name) from public. employees

--11
SELECT left(first_name,3)FROM employees ;

--12
SELECT CONCAT (first_name,' ',last_name) AS "Full Name" FROM employees ;

--13
SELECT CONCAT (first_name,' ',last_name) AS "Full Name",
LENGTH(CONCAT (first_name,' ',last_name)) AS "Length" FROM employees ;

--14
select first_name
from public.employees
where first_name like '%[0-9]%';

--15
select * from public.employees
limit 10

-- next
--1
select *
from public.employees
where salary >= 10000 AND salary <=15000

--2
select first_name, last_name , hire_date
from public.employees
where hire_date >= '01.01.1987' and hire_date < '01.01.1988'

--3
select *
from public.employees
where first_name like '%c%' and first_name like '%e%'

--4
SELECT last_name,jobs.job_title
FROM employees
INNER JOIN jobs 
ON employees.job_id=jobs.job_id
WHERE (jobs.job_title!='Programmer' AND jobs.job_title!='Shipping Clerk') 
AND salary not in(4000, 10000, 15000)

--5
select last_name
from employees
where LENGTH(last_name)=6

--6
select last_name
from employees
where last_name like '__e%'

--7
select * from jobs
select distinct job_title from jobs 

SELECT *
FROM employees
WHERE last_name IN ('Jones' , 'Blake' , 'Scott' , 'King' , 'Ford'); 