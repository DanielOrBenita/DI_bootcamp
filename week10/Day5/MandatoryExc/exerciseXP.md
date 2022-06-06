-- 1:
SELECT (first_name, last_name) as full_name
FROM public.employees;

-- 2:
SELECT DISTINCT department_id FROM public.employees;

-- 3:
SELECT * FROM public.employees ORDER BY first_name DESC;

-- 4:
SELECT first_name, last_name, salary*0.15 as "15%_of_salary" FROM public.employees;

-- 5:
SELECT employee_id, first_name, last_name, salary FROM public.employees ORDER BY salary ASC;

-- 6:
SELECT sum(salary) AS total_salary FROM public.employees;

-- 7:
SELECT min(salary) AS min_salary FROM public.employees;
SELECT max(salary) AS max_salary FROM public.employees;

-- 8:
SELECT AVG(salary) AS avg_salary FROM public.employees;

-- 9:
SELECT COUNT(employee_id) AS employees FROM public.employees;

-- 10:
SELECT UPPER(first_name) as first_name_uppercase FROM public.employees;

-- 11:
SELECT substring(first_name, 1, 3) FROM public.employees;

-- 12:
SELECT TRIM(CONCAT(first_name, ' ', last_name)) as full_name FROM public.employees;

-- 13:
SELECT first_name, last_name, LENGTH(TRIM(CONCAT(first_name, last_name))) as full_name_length FROM public.employees;

-- 14:
SELECT first_name FROM public.employees WHERE first_name REGEXP '[0-9]';

-- 15:
SELECT * FROM public.employees LIMIT 10;

-- Restricting And Sorting
-- 1:
SELECT first_name, last_name, salary FROM public.employees WHERE salary BETWEEN 10000 AND 15000

-- 2:
select hire_date from public.employees where hire_date >= '1987-01-01' and hire_date<'1988-01-01'

-- 3:
SELECT * FROM employees WHERE first_name LIKE '%ac%' 

-- 4:
SELECT last_name, employees.job_id as employee_job_id, salary FROM public.employees
INNER JOIN public.jobs
ON employees.job_id = jobs.job_id
WHERE job_title NOT IN ('Programmers', 'Shipping Clerks') AND salary NOT IN (4500, 10000, 15000)

-- 5:
SELECT last_name FROM public.employees WHERE LENGTH(last_name) = 6

-- 6:
SELECT last_name FROM employees WHERE last_name LIKE '__a%';

-- 7:
SELECT job_title FROM employees
INNER JOIN JOBS
ON jobs.job_id = employees.job_id

-- 8:
SELECT * FROM employees 
WHERE UPPER(last_name) IN ('JONES','BLAKE','SCOTT', 'KING', 'FORD' )