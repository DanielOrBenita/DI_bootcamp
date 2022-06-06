

//1
select * from public.items
--1
select * from public. items order by price DESC

--2
select * from public. items order by price 

--3
select * from public. items order by product 

--3
select * from public. items order by product desc


//2

--1
select * from public.customer

--2
select first_name , last_name from  public.customer

--3
select distinct create_date from  public.customer 

--4
select * from public.customer order by first_name desc

--5
select film_id, title, description, release_year, rental_rate from public.film order by rental_rate  asc

--6
select * from public.address
select address, phone from public.address where district = 'Texas'

--7
select * from public.film where film_id = 15 OR film_id = 150

--8
select * from public.film

select * from public.film where title = 'Ice Age' 
--9
select * from public.film where title like 'Ic%'

--10
select * from public.film
select * from public.film order by rental_rate limit 10

--12
SELECT amount, payment_date, customer.customer_id
FROM customer INNER JOIN payment
ON customer.customer_id = payment.customer_id ORDER BY customer.customer_id;

--13
SELECT COUNT (*) FROM film LEFT JOIN inventory
ON film.film_id = inventory.film_id
WHERE inventory.film_id is NULL

--14
SELECT city, country
FROM city
INNER JOIN country
ON city.country_id = country.country_id;