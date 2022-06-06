CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

select * from public.actors

INSERT INTO public.actors VALUES 
(default,'emilia', 'clarc','06/05/1961', 2),
(default,'angelina', 'julie','06/05/1961', 2)

select count(actors) from public.actors

-- i can not add null because it set up as not null