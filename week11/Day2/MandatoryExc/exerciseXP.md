select * from language
select  * from film

--1
select language.name
from film
inner join language using(language_id)

--2
select title as name, description, language.name from film
FULL JOIN  language
on public.language.language_id =  public.film.language_id

select name from language
left JOIN  film
on public.language.language_id =  public.film.language_id

--3
create table new_film
(id serial primary key not null, name varchar(50) not null);
insert into new_film (name)
values ('Lucifer'),('One Piece'),('Armagedon')

--4
select * from new_film

CREATE TABLE customer_review (
  	review_id SERIAL,
   	review_content VARCHAR(200) NOT NULL,
	score INTEGER NOT NULL,
	title VARCHAR(50) NOT NULL,
 	film_id INTEGER NOT NULL,
 	language_id INTEGER NOT NULL,
 	creation_date DATE DEFAULT CURRENT_TIMESTAMP,
   	PRIMARY KEY (review_id),
   	FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
   	FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE
 );

select * from customer_review
insert into customer_review values 
(3,'good', 7, 'Movie review', 3, 2, default),
(2,'good', 7, 'Movie review', 2, 3, default)

DELETE FROM new_film WHERE id = 1;
-- how cool, it deleted also!

--  section 2
--1
UPDATE language
SET name = 'Hebrew'
WHERE language_id = 2;

--2
-- store_id and address_id are foreign keys in to the customer table.

--4
select count(*) from rental where return_date IS NULL;

--5
select film.title, film.rental_rate, rental.return_date, rental.inventory_id, inventory.film_id from rental
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

--6.1
select * from film
select * from actor


select title, description, film_id
from film
inner join film_actor using (film_id)
inner join actor using(actor_id)
where description
ilike '%sumo wrestler%'
and actor.first_name = 'Penelope'
and actor.last_name = 'Monroe';

--6.2
select * from film 
inner join film_category
using (film_id)
inner Join category 
using (category_id)
where film.length < 60
and film.rating = 'R' 
and category.name 
ilike 'documentary';

--6.3
select * from rental
inner join payment
using (customer_id) 
where customer_id = (select customer_id from customer where first_name ilike 'matthew' and last_name ilike 'mahan')
and payment.amount > 4 
and rental.return_date between '2005-07-28' and '2005-08-01';
