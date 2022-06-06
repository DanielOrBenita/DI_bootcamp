--  CREATE TABLE items (
--  	id_number serial,
--  	product Character varying(50),
--  	price integer
--  	);
	
	select * from public.items;
	
	INSERT INTO public.items VALUES
	(DEFAULT, 'big table', 300)
	(DEFAULT, 'big table', 300),
	(DEFAULT, 'fan', 80)

	--1
	select * from public.items;
	
	--2
	select * from public.items where price > 80
	
	--3
	select * from public.items where price <= 300


  	CREATE TABLE customers (
  	id_number serial,
  	f_name Character varying(50),
  	l_name integer
  	);
	
	-- i created by mistake l_name as interger so here i change it
	ALTER TABLE public.customers
    ALTER COLUMN l_name TYPE Character varying(50)
	select * from public.customers;

	 -- i added the people
	INSERT INTO public.customers VALUES
	(DEFAULT, 'Greg', 'Jones'),
	(DEFAULT, 'Sandra', 'Jones'),
	(DEFAULT, 'Scott', 'Scott'),
	(DEFAULT, 'Trevor', 'Green'),
	(DEFAULT, 'Melanie', 'Johnson');
	
--4
-- it returns nothing because there is no smith in l_name
select * from public.customers where l_name='Smith'; 
--5
select * from public.customers where l_name='Jones'; 
--6
select * from public.customers where l_name!='Scott'; 
