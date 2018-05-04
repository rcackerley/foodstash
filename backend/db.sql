--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: james
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    image_url character varying
);


ALTER TABLE public.categories OWNER TO james;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: james
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO james;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: james
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: cookbooks; Type: TABLE; Schema: public; Owner: james
--

CREATE TABLE public.cookbooks (
    id integer NOT NULL,
    user_id integer NOT NULL,
    recipe_id integer[],
    name character varying
);


ALTER TABLE public.cookbooks OWNER TO james;

--
-- Name: cookbooks_id_seq; Type: SEQUENCE; Schema: public; Owner: james
--

CREATE SEQUENCE public.cookbooks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cookbooks_id_seq OWNER TO james;

--
-- Name: cookbooks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: james
--

ALTER SEQUENCE public.cookbooks_id_seq OWNED BY public.cookbooks.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: james
--

CREATE TABLE public.images (
    id integer NOT NULL,
    createdon date NOT NULL,
    link character varying NOT NULL,
    recipe_id integer NOT NULL
);


ALTER TABLE public.images OWNER TO james;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: james
--

CREATE SEQUENCE public.images_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_seq OWNER TO james;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: james
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: ingredients; Type: TABLE; Schema: public; Owner: james
--

CREATE TABLE public.ingredients (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    image_url character varying
);


ALTER TABLE public.ingredients OWNER TO james;

--
-- Name: ingredients_id_seq; Type: SEQUENCE; Schema: public; Owner: james
--

CREATE SEQUENCE public.ingredients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ingredients_id_seq OWNER TO james;

--
-- Name: ingredients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: james
--

ALTER SEQUENCE public.ingredients_id_seq OWNED BY public.ingredients.id;


--
-- Name: ratings; Type: TABLE; Schema: public; Owner: james
--

CREATE TABLE public.ratings (
    id integer NOT NULL,
    rating_value integer NOT NULL,
    recipe_id integer NOT NULL
);


ALTER TABLE public.ratings OWNER TO james;

--
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: james
--

CREATE SEQUENCE public.ratings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ratings_id_seq OWNER TO james;

--
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: james
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- Name: recipes; Type: TABLE; Schema: public; Owner: james
--

CREATE TABLE public.recipes (
    id integer NOT NULL,
    title character varying NOT NULL,
    version integer NOT NULL,
    prepmins character varying NOT NULL,
    cookmins character varying NOT NULL,
    description character varying NOT NULL,
    user_id integer NOT NULL,
    directions character varying,
    servings character varying DEFAULT 1 NOT NULL,
    image_url character varying,
    categories_id integer,
    ingredients character varying,
    notes character varying,
    tag character varying,
    derived_id character varying
);


ALTER TABLE public.recipes OWNER TO james;

--
-- Name: recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: james
--

CREATE SEQUENCE public.recipes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipes_id_seq OWNER TO james;

--
-- Name: recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: james
--

ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: james
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    email character varying NOT NULL,
    firstname character varying NOT NULL,
    lastname character varying NOT NULL
);


ALTER TABLE public.users OWNER TO james;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: james
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO james;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: james
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: cookbooks id; Type: DEFAULT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.cookbooks ALTER COLUMN id SET DEFAULT nextval('public.cookbooks_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: ingredients id; Type: DEFAULT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.ingredients ALTER COLUMN id SET DEFAULT nextval('public.ingredients_id_seq'::regclass);


--
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- Name: recipes id; Type: DEFAULT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: james
--

COPY public.categories (id, name, image_url) FROM stdin;
1	breakfast	https://www.bobevans.com/-/media/bobevans_com/images/our-restaurants/2017winter/big_egg_bfast_core_winterfy17.jpg?h=333&la=en&w=500&hash=0CADDF6BC5033B2EB4521129EF2201803FFA414E
3	lunch	http://finedininglovers.cdn.crosscast-system.com/ImageAlbum/5858/original_blt.sandwiches.jpg
4	dinner	http://assets.kraftfoods.com/recipe_images/opendeploy/89336_640x428.jpg
5	dessert	https://images-gmi-pmc.edge-generalmills.com/5a2bc6ae-782b-4559-92eb-f084b1b170ed.jpg
6	soups	https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fold-fashioned-chicken-noodle-soup-ck.jpg%3Fitok%3DZ8tmJK4T&w=800&q=85
7	salads	https://dingo.care2.com/pictures/greenliving/1146/1145877.large.jpg
8	snacks	http://watchfit.com/wp-content/uploads/2014/05/7-Healthy-late-night-snacks-that-will-NOT-undo-it-all.jpg
9	appetizers	https://tipbuzz.com/wp-content/uploads/Ritz-Cracker-Appetizers-1.jpg
\.


--
-- Data for Name: cookbooks; Type: TABLE DATA; Schema: public; Owner: james
--

COPY public.cookbooks (id, user_id, recipe_id, name) FROM stdin;
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: james
--

COPY public.images (id, createdon, link, recipe_id) FROM stdin;
2	2018-04-04	https://images.scrippsnetworks.com/up/tp/Scripps_-_Food_Category_Prod/217/426/0198552_630x355.jpg	1
\.


--
-- Data for Name: ingredients; Type: TABLE DATA; Schema: public; Owner: james
--

COPY public.ingredients (id, name, image_url) FROM stdin;
1	tomatoes	https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=
2	beans	https://images-na.ssl-images-amazon.com/images/I/61snvtRA5yL._SL1500_.jpg
3	rice	http://yours4everorganic.com/yours4ever/wp-content/uploads/2017/01/basmati-rice-brown-1.jpg
4	chicken	https://c3.staticflickr.com/6/5810/30891382266_7c881630c9_z.jpg
5	pork	https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/24172528/porkshoulder-thumb1x1.jpg
\.


--
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: james
--

COPY public.ratings (id, rating_value, recipe_id) FROM stdin;
2	5	1
\.


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: james
--

COPY public.recipes (id, title, version, prepmins, cookmins, description, user_id, directions, servings, image_url, categories_id, ingredients, notes, tag, derived_id) FROM stdin;
1	Peanut Butter Pie	1	45	30	Some description	1	1. first direction 2. second direction	8	https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/19/1/WU0313H_chocolate-peanut-butter-pie-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371612178437.jpeg	\N	1. milk 2. butter 3. peanut butter	\N	\N	\N
3	Baja Fish Tacos	1	20	30	Some description	1	1. cook fish 2. make tacos	2	https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/blackened-fish-tacos-f8fdce33.jpg	\N	1. tortillas 2. fish 3. veggies	\N	\N	\N
11	chris	0	20	20	chris	4		10	undefined	\N		\N	none	null
12	james	0	20	30	hey	4		5	https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/19/1/WU0313H_chocolate-peanut-butter-pie-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371612178437.jpeg	\N		\N	none	null
13	hey man	0	20	20	hey	4	yoooo	5	https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/19/1/WU0313H_chocolate-peanut-butter-pie-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371612178437.jpeg	\N	hey man	\N	none	null
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: james
--

COPY public.users (id, username, password, email, firstname, lastname) FROM stdin;
1	james	ABC	james@james.com	James	McDowell
2	chris	ABC	chris@chris.com	Chris	Goodell
3	robby	ABC	robby@robby.robby	Robby	Ackerley
4	kyle	ABC	kyle@kyle.com	Kyle	Booth
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: james
--

SELECT pg_catalog.setval('public.categories_id_seq', 9, true);


--
-- Name: cookbooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: james
--

SELECT pg_catalog.setval('public.cookbooks_id_seq', 1, false);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: james
--

SELECT pg_catalog.setval('public.images_id_seq', 2, true);


--
-- Name: ingredients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: james
--

SELECT pg_catalog.setval('public.ingredients_id_seq', 7, true);


--
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: james
--

SELECT pg_catalog.setval('public.ratings_id_seq', 2, true);


--
-- Name: recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: james
--

SELECT pg_catalog.setval('public.recipes_id_seq', 13, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: james
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: categories categories_name_key; Type: CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: cookbooks cookbooks_pkey; Type: CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.cookbooks
    ADD CONSTRAINT cookbooks_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: ingredients ingredients_name_key; Type: CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_name_key UNIQUE (name);


--
-- Name: ingredients ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (id);


--
-- Name: ratings ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: cookbooks cookbooks_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.cookbooks
    ADD CONSTRAINT cookbooks_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: images images_recipe_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipes(id);


--
-- Name: ratings ratings_recipe_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipes(id);


--
-- Name: recipes recipes_categories_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_categories_id_fkey FOREIGN KEY (categories_id) REFERENCES public.categories(id);


--
-- Name: recipes recipes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: james
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

