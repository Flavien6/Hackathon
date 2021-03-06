PGDMP         &                x           LugDB    10.13    10.13 i    {           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            |           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            }           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            ~           1262    16393    LugDB    DATABASE     �   CREATE DATABASE "LugDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_France.1252' LC_CTYPE = 'French_France.1252';
    DROP DATABASE "LugDB";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16494    CLIENT    TABLE     g  CREATE TABLE public."CLIENT" (
    id integer NOT NULL,
    prenom character varying(20) NOT NULL,
    nom character varying(20) NOT NULL,
    adresse character varying(200),
    telephone character varying(20),
    email character varying(100),
    limite_credit real,
    gestionnaire_compte_id integer NOT NULL,
    date_naissance date,
    sexe "char"
);
    DROP TABLE public."CLIENT";
       public         postgres    false    3            �            1259    16492    CLIENT_id_seq    SEQUENCE     �   CREATE SEQUENCE public."CLIENT_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."CLIENT_id_seq";
       public       postgres    false    210    3            �           0    0    CLIENT_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."CLIENT_id_seq" OWNED BY public."CLIENT".id;
            public       postgres    false    209            �            1259    17150    commande_id_seq    SEQUENCE     x   CREATE SEQUENCE public.commande_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.commande_id_seq;
       public       postgres    false    3            �            1259    16505    COMMANDE    TABLE     4  CREATE TABLE public."COMMANDE" (
    id integer DEFAULT nextval('public.commande_id_seq'::regclass) NOT NULL,
    date date NOT NULL,
    mode character varying(10) NOT NULL,
    etat character varying(10) NOT NULL,
    total real NOT NULL,
    client_id integer NOT NULL,
    vendeur_id integer NOT NULL
);
    DROP TABLE public."COMMANDE";
       public         postgres    false    218    3            �            1259    16531    COMMANDE_LIGNE    TABLE     �   CREATE TABLE public."COMMANDE_LIGNE" (
    commande_id integer NOT NULL,
    produit_id integer NOT NULL,
    prix_unitaire real NOT NULL,
    quantite integer NOT NULL
);
 $   DROP TABLE public."COMMANDE_LIGNE";
       public         postgres    false    3            �            1259    16430    DEPARTEMENT    TABLE     �   CREATE TABLE public."DEPARTEMENT" (
    id integer NOT NULL,
    nom character varying(20) NOT NULL,
    manager_d_id integer NOT NULL,
    localisation_id integer NOT NULL
);
 !   DROP TABLE public."DEPARTEMENT";
       public         postgres    false    3            �            1259    16428    DEPARTEMENT_id_seq    SEQUENCE     �   CREATE SEQUENCE public."DEPARTEMENT_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."DEPARTEMENT_id_seq";
       public       postgres    false    203    3            �           0    0    DEPARTEMENT_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."DEPARTEMENT_id_seq" OWNED BY public."DEPARTEMENT".id;
            public       postgres    false    202            �            1259    16443    EMPLOI    TABLE     �   CREATE TABLE public."EMPLOI" (
    id integer NOT NULL,
    titre character varying(20) NOT NULL,
    salaire_min real,
    salaire_max real
);
    DROP TABLE public."EMPLOI";
       public         postgres    false    3            �            1259    16472    EMPLOI_HISTORIQUE    TABLE     �   CREATE TABLE public."EMPLOI_HISTORIQUE" (
    employe_id integer NOT NULL,
    date_debut date,
    date_fin date,
    emploi_id integer NOT NULL,
    departement_id integer NOT NULL
);
 '   DROP TABLE public."EMPLOI_HISTORIQUE";
       public         postgres    false    3            �            1259    16441    EMPLOI_id_seq    SEQUENCE     �   CREATE SEQUENCE public."EMPLOI_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."EMPLOI_id_seq";
       public       postgres    false    205    3            �           0    0    EMPLOI_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."EMPLOI_id_seq" OWNED BY public."EMPLOI".id;
            public       postgres    false    204            �            1259    16451    EMPLOYE    TABLE     �  CREATE TABLE public."EMPLOYE" (
    id integer NOT NULL,
    prenom character varying(20) NOT NULL,
    nom character varying(20) NOT NULL,
    email character varying(100),
    telephone character varying(20),
    date_embauche date NOT NULL,
    salaire real NOT NULL,
    taux_commission real,
    manager_e_id integer,
    emploi_id integer NOT NULL,
    departement_id integer NOT NULL
);
    DROP TABLE public."EMPLOYE";
       public         postgres    false    3            �            1259    16449    EMPLOYE_id_seq    SEQUENCE     �   CREATE SEQUENCE public."EMPLOYE_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."EMPLOYE_id_seq";
       public       postgres    false    207    3            �           0    0    EMPLOYE_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."EMPLOYE_id_seq" OWNED BY public."EMPLOYE".id;
            public       postgres    false    206            �            1259    16558    ENTREPOT    TABLE     �   CREATE TABLE public."ENTREPOT" (
    id integer NOT NULL,
    spec character varying(20),
    nom character varying(20) NOT NULL,
    localisation_id integer NOT NULL
);
    DROP TABLE public."ENTREPOT";
       public         postgres    false    3            �            1259    16556    ENTREPOT_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ENTREPOT_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."ENTREPOT_id_seq";
       public       postgres    false    3    217            �           0    0    ENTREPOT_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."ENTREPOT_id_seq" OWNED BY public."ENTREPOT".id;
            public       postgres    false    216            �            1259    16546 
   INVENTAIRE    TABLE     �   CREATE TABLE public."INVENTAIRE" (
    produit_id integer NOT NULL,
    entrepot_id integer NOT NULL,
    quantite integer NOT NULL
);
     DROP TABLE public."INVENTAIRE";
       public         postgres    false    3            �            1259    16417    LOCALISATION    TABLE     �   CREATE TABLE public."LOCALISATION" (
    id integer NOT NULL,
    adresse character varying(100),
    code_postal integer NOT NULL,
    ville character varying(50) NOT NULL,
    region_id integer NOT NULL
);
 "   DROP TABLE public."LOCALISATION";
       public         postgres    false    3            �            1259    16415    LOCALISATION_id_seq    SEQUENCE     �   CREATE SEQUENCE public."LOCALISATION_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."LOCALISATION_id_seq";
       public       postgres    false    201    3            �           0    0    LOCALISATION_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."LOCALISATION_id_seq" OWNED BY public."LOCALISATION".id;
            public       postgres    false    200            �            1259    16522    PRODUIT_INFO    TABLE     �  CREATE TABLE public."PRODUIT_INFO" (
    id integer NOT NULL,
    nom character varying(20) NOT NULL,
    description character varying(200),
    categorie_id integer NOT NULL,
    poids real,
    garantie_duree character varying,
    fournisseur_id integer NOT NULL,
    etat character varying(10) NOT NULL,
    prix_liste real NOT NULL,
    prix_mini real,
    url_catalogue character varying(200)
);
 "   DROP TABLE public."PRODUIT_INFO";
       public         postgres    false    3            �            1259    16520    PRODUIT_INFO_id_seq    SEQUENCE     �   CREATE SEQUENCE public."PRODUIT_INFO_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."PRODUIT_INFO_id_seq";
       public       postgres    false    3    213            �           0    0    PRODUIT_INFO_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."PRODUIT_INFO_id_seq" OWNED BY public."PRODUIT_INFO".id;
            public       postgres    false    212            �            1259    16404    REGION    TABLE     �   CREATE TABLE public."REGION" (
    id integer NOT NULL,
    nom character varying(20) NOT NULL,
    secteur_id integer NOT NULL
);
    DROP TABLE public."REGION";
       public         postgres    false    3            �            1259    16402    REGION_id_seq    SEQUENCE     �   CREATE SEQUENCE public."REGION_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."REGION_id_seq";
       public       postgres    false    199    3            �           0    0    REGION_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."REGION_id_seq" OWNED BY public."REGION".id;
            public       postgres    false    198            �            1259    16396    SECTEUR    TABLE     c   CREATE TABLE public."SECTEUR" (
    id integer NOT NULL,
    nom character varying(20) NOT NULL
);
    DROP TABLE public."SECTEUR";
       public         postgres    false    3            �            1259    16394    SECTEUR_id_seq    SEQUENCE     �   CREATE SEQUENCE public."SECTEUR_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."SECTEUR_id_seq";
       public       postgres    false    3    197            �           0    0    SECTEUR_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."SECTEUR_id_seq" OWNED BY public."SECTEUR".id;
            public       postgres    false    196            �
           2604    17124 	   CLIENT id    DEFAULT     j   ALTER TABLE ONLY public."CLIENT" ALTER COLUMN id SET DEFAULT nextval('public."CLIENT_id_seq"'::regclass);
 :   ALTER TABLE public."CLIENT" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    210    209    210            �
           2604    17125    DEPARTEMENT id    DEFAULT     t   ALTER TABLE ONLY public."DEPARTEMENT" ALTER COLUMN id SET DEFAULT nextval('public."DEPARTEMENT_id_seq"'::regclass);
 ?   ALTER TABLE public."DEPARTEMENT" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    203    202    203            �
           2604    17126 	   EMPLOI id    DEFAULT     j   ALTER TABLE ONLY public."EMPLOI" ALTER COLUMN id SET DEFAULT nextval('public."EMPLOI_id_seq"'::regclass);
 :   ALTER TABLE public."EMPLOI" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    204    205    205            �
           2604    17127 
   EMPLOYE id    DEFAULT     l   ALTER TABLE ONLY public."EMPLOYE" ALTER COLUMN id SET DEFAULT nextval('public."EMPLOYE_id_seq"'::regclass);
 ;   ALTER TABLE public."EMPLOYE" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    206    207    207            �
           2604    17128    ENTREPOT id    DEFAULT     n   ALTER TABLE ONLY public."ENTREPOT" ALTER COLUMN id SET DEFAULT nextval('public."ENTREPOT_id_seq"'::regclass);
 <   ALTER TABLE public."ENTREPOT" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    216    217    217            �
           2604    17129    LOCALISATION id    DEFAULT     v   ALTER TABLE ONLY public."LOCALISATION" ALTER COLUMN id SET DEFAULT nextval('public."LOCALISATION_id_seq"'::regclass);
 @   ALTER TABLE public."LOCALISATION" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    200    201    201            �
           2604    17130    PRODUIT_INFO id    DEFAULT     v   ALTER TABLE ONLY public."PRODUIT_INFO" ALTER COLUMN id SET DEFAULT nextval('public."PRODUIT_INFO_id_seq"'::regclass);
 @   ALTER TABLE public."PRODUIT_INFO" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    212    213    213            �
           2604    17131 	   REGION id    DEFAULT     j   ALTER TABLE ONLY public."REGION" ALTER COLUMN id SET DEFAULT nextval('public."REGION_id_seq"'::regclass);
 :   ALTER TABLE public."REGION" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    199    199            �
           2604    17132 
   SECTEUR id    DEFAULT     l   ALTER TABLE ONLY public."SECTEUR" ALTER COLUMN id SET DEFAULT nextval('public."SECTEUR_id_seq"'::regclass);
 ;   ALTER TABLE public."SECTEUR" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    196    197            p          0    16494    CLIENT 
   TABLE DATA               �   COPY public."CLIENT" (id, prenom, nom, adresse, telephone, email, limite_credit, gestionnaire_compte_id, date_naissance, sexe) FROM stdin;
    public       postgres    false    210   �|       q          0    16505    COMMANDE 
   TABLE DATA               X   COPY public."COMMANDE" (id, date, mode, etat, total, client_id, vendeur_id) FROM stdin;
    public       postgres    false    211   <~       t          0    16531    COMMANDE_LIGNE 
   TABLE DATA               \   COPY public."COMMANDE_LIGNE" (commande_id, produit_id, prix_unitaire, quantite) FROM stdin;
    public       postgres    false    214   �~       i          0    16430    DEPARTEMENT 
   TABLE DATA               O   COPY public."DEPARTEMENT" (id, nom, manager_d_id, localisation_id) FROM stdin;
    public       postgres    false    203   8       k          0    16443    EMPLOI 
   TABLE DATA               G   COPY public."EMPLOI" (id, titre, salaire_min, salaire_max) FROM stdin;
    public       postgres    false    205   }       n          0    16472    EMPLOI_HISTORIQUE 
   TABLE DATA               j   COPY public."EMPLOI_HISTORIQUE" (employe_id, date_debut, date_fin, emploi_id, departement_id) FROM stdin;
    public       postgres    false    208   �       m          0    16451    EMPLOYE 
   TABLE DATA               �   COPY public."EMPLOYE" (id, prenom, nom, email, telephone, date_embauche, salaire, taux_commission, manager_e_id, emploi_id, departement_id) FROM stdin;
    public       postgres    false    207   �       w          0    16558    ENTREPOT 
   TABLE DATA               D   COPY public."ENTREPOT" (id, spec, nom, localisation_id) FROM stdin;
    public       postgres    false    217   ��       u          0    16546 
   INVENTAIRE 
   TABLE DATA               I   COPY public."INVENTAIRE" (produit_id, entrepot_id, quantite) FROM stdin;
    public       postgres    false    215   �       g          0    16417    LOCALISATION 
   TABLE DATA               T   COPY public."LOCALISATION" (id, adresse, code_postal, ville, region_id) FROM stdin;
    public       postgres    false    201   H�       s          0    16522    PRODUIT_INFO 
   TABLE DATA               �   COPY public."PRODUIT_INFO" (id, nom, description, categorie_id, poids, garantie_duree, fournisseur_id, etat, prix_liste, prix_mini, url_catalogue) FROM stdin;
    public       postgres    false    213    �       e          0    16404    REGION 
   TABLE DATA               7   COPY public."REGION" (id, nom, secteur_id) FROM stdin;
    public       postgres    false    199   n�       c          0    16396    SECTEUR 
   TABLE DATA               ,   COPY public."SECTEUR" (id, nom) FROM stdin;
    public       postgres    false    197   ��       �           0    0    CLIENT_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."CLIENT_id_seq"', 15, true);
            public       postgres    false    209            �           0    0    DEPARTEMENT_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."DEPARTEMENT_id_seq"', 7, true);
            public       postgres    false    202            �           0    0    EMPLOI_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."EMPLOI_id_seq"', 4, true);
            public       postgres    false    204            �           0    0    EMPLOYE_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."EMPLOYE_id_seq"', 8, true);
            public       postgres    false    206            �           0    0    ENTREPOT_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."ENTREPOT_id_seq"', 4, true);
            public       postgres    false    216            �           0    0    LOCALISATION_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."LOCALISATION_id_seq"', 5, true);
            public       postgres    false    200            �           0    0    PRODUIT_INFO_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."PRODUIT_INFO_id_seq"', 8, true);
            public       postgres    false    212            �           0    0    REGION_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."REGION_id_seq"', 4, true);
            public       postgres    false    198            �           0    0    SECTEUR_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."SECTEUR_id_seq"', 5, true);
            public       postgres    false    196            �           0    0    commande_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.commande_id_seq', 12, true);
            public       postgres    false    218            �
           2606    16499    CLIENT pk_client 
   CONSTRAINT     P   ALTER TABLE ONLY public."CLIENT"
    ADD CONSTRAINT pk_client PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."CLIENT" DROP CONSTRAINT pk_client;
       public         postgres    false    210            �
           2606    16509    COMMANDE pk_commande 
   CONSTRAINT     T   ALTER TABLE ONLY public."COMMANDE"
    ADD CONSTRAINT pk_commande PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."COMMANDE" DROP CONSTRAINT pk_commande;
       public         postgres    false    211            �
           2606    16535     COMMANDE_LIGNE pk_commande_ligne 
   CONSTRAINT     u   ALTER TABLE ONLY public."COMMANDE_LIGNE"
    ADD CONSTRAINT pk_commande_ligne PRIMARY KEY (commande_id, produit_id);
 L   ALTER TABLE ONLY public."COMMANDE_LIGNE" DROP CONSTRAINT pk_commande_ligne;
       public         postgres    false    214    214            �
           2606    16435    DEPARTEMENT pk_departement 
   CONSTRAINT     Z   ALTER TABLE ONLY public."DEPARTEMENT"
    ADD CONSTRAINT pk_departement PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."DEPARTEMENT" DROP CONSTRAINT pk_departement;
       public         postgres    false    203            �
           2606    16448    EMPLOI pk_emploi 
   CONSTRAINT     P   ALTER TABLE ONLY public."EMPLOI"
    ADD CONSTRAINT pk_emploi PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."EMPLOI" DROP CONSTRAINT pk_emploi;
       public         postgres    false    205            �
           2606    16476 &   EMPLOI_HISTORIQUE pk_emploi_historique 
   CONSTRAINT     �   ALTER TABLE ONLY public."EMPLOI_HISTORIQUE"
    ADD CONSTRAINT pk_emploi_historique PRIMARY KEY (employe_id, emploi_id, departement_id);
 R   ALTER TABLE ONLY public."EMPLOI_HISTORIQUE" DROP CONSTRAINT pk_emploi_historique;
       public         postgres    false    208    208    208            �
           2606    16456    EMPLOYE pk_employe 
   CONSTRAINT     R   ALTER TABLE ONLY public."EMPLOYE"
    ADD CONSTRAINT pk_employe PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."EMPLOYE" DROP CONSTRAINT pk_employe;
       public         postgres    false    207            �
           2606    16563    ENTREPOT pk_entrepot 
   CONSTRAINT     T   ALTER TABLE ONLY public."ENTREPOT"
    ADD CONSTRAINT pk_entrepot PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."ENTREPOT" DROP CONSTRAINT pk_entrepot;
       public         postgres    false    217            �
           2606    16550    INVENTAIRE pk_inventaire 
   CONSTRAINT     m   ALTER TABLE ONLY public."INVENTAIRE"
    ADD CONSTRAINT pk_inventaire PRIMARY KEY (produit_id, entrepot_id);
 D   ALTER TABLE ONLY public."INVENTAIRE" DROP CONSTRAINT pk_inventaire;
       public         postgres    false    215    215            �
           2606    16422    LOCALISATION pk_localisation 
   CONSTRAINT     \   ALTER TABLE ONLY public."LOCALISATION"
    ADD CONSTRAINT pk_localisation PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."LOCALISATION" DROP CONSTRAINT pk_localisation;
       public         postgres    false    201            �
           2606    16530    PRODUIT_INFO pk_produit 
   CONSTRAINT     W   ALTER TABLE ONLY public."PRODUIT_INFO"
    ADD CONSTRAINT pk_produit PRIMARY KEY (id);
 C   ALTER TABLE ONLY public."PRODUIT_INFO" DROP CONSTRAINT pk_produit;
       public         postgres    false    213            �
           2606    16409    REGION pk_region 
   CONSTRAINT     P   ALTER TABLE ONLY public."REGION"
    ADD CONSTRAINT pk_region PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."REGION" DROP CONSTRAINT pk_region;
       public         postgres    false    199            �
           2606    16401    SECTEUR pk_secteur 
   CONSTRAINT     R   ALTER TABLE ONLY public."SECTEUR"
    ADD CONSTRAINT pk_secteur PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."SECTEUR" DROP CONSTRAINT pk_secteur;
       public         postgres    false    197            �
           2606    17109    COMMANDE fk_client    FK CONSTRAINT     �   ALTER TABLE ONLY public."COMMANDE"
    ADD CONSTRAINT fk_client FOREIGN KEY (client_id) REFERENCES public."CLIENT"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 >   ALTER TABLE ONLY public."COMMANDE" DROP CONSTRAINT fk_client;
       public       postgres    false    210    211    2762            �
           2606    17119    CLIENT fk_client    FK CONSTRAINT     �   ALTER TABLE ONLY public."CLIENT"
    ADD CONSTRAINT fk_client FOREIGN KEY (gestionnaire_compte_id) REFERENCES public."EMPLOYE"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 <   ALTER TABLE ONLY public."CLIENT" DROP CONSTRAINT fk_client;
       public       postgres    false    2758    210    207            �
           2606    17099    COMMANDE_LIGNE fk_commande    FK CONSTRAINT     �   ALTER TABLE ONLY public."COMMANDE_LIGNE"
    ADD CONSTRAINT fk_commande FOREIGN KEY (commande_id) REFERENCES public."COMMANDE"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 F   ALTER TABLE ONLY public."COMMANDE_LIGNE" DROP CONSTRAINT fk_commande;
       public       postgres    false    214    211    2764            �
           2606    17074    EMPLOYE fk_departement    FK CONSTRAINT     �   ALTER TABLE ONLY public."EMPLOYE"
    ADD CONSTRAINT fk_departement FOREIGN KEY (departement_id) REFERENCES public."DEPARTEMENT"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 B   ALTER TABLE ONLY public."EMPLOYE" DROP CONSTRAINT fk_departement;
       public       postgres    false    203    207    2754            �
           2606    17089     EMPLOI_HISTORIQUE fk_departement    FK CONSTRAINT     �   ALTER TABLE ONLY public."EMPLOI_HISTORIQUE"
    ADD CONSTRAINT fk_departement FOREIGN KEY (departement_id) REFERENCES public."DEPARTEMENT"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 L   ALTER TABLE ONLY public."EMPLOI_HISTORIQUE" DROP CONSTRAINT fk_departement;
       public       postgres    false    203    208    2754            �
           2606    17069    EMPLOYE fk_emploi    FK CONSTRAINT     �   ALTER TABLE ONLY public."EMPLOYE"
    ADD CONSTRAINT fk_emploi FOREIGN KEY (emploi_id) REFERENCES public."EMPLOI"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 =   ALTER TABLE ONLY public."EMPLOYE" DROP CONSTRAINT fk_emploi;
       public       postgres    false    205    207    2756            �
           2606    17084    EMPLOI_HISTORIQUE fk_emploi    FK CONSTRAINT     �   ALTER TABLE ONLY public."EMPLOI_HISTORIQUE"
    ADD CONSTRAINT fk_emploi FOREIGN KEY (emploi_id) REFERENCES public."EMPLOI"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 G   ALTER TABLE ONLY public."EMPLOI_HISTORIQUE" DROP CONSTRAINT fk_emploi;
       public       postgres    false    205    208    2756            �
           2606    17064    EMPLOYE fk_employe    FK CONSTRAINT     �   ALTER TABLE ONLY public."EMPLOYE"
    ADD CONSTRAINT fk_employe FOREIGN KEY (manager_e_id) REFERENCES public."EMPLOYE"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 >   ALTER TABLE ONLY public."EMPLOYE" DROP CONSTRAINT fk_employe;
       public       postgres    false    2758    207    207            �
           2606    17079    EMPLOI_HISTORIQUE fk_employe    FK CONSTRAINT     �   ALTER TABLE ONLY public."EMPLOI_HISTORIQUE"
    ADD CONSTRAINT fk_employe FOREIGN KEY (employe_id) REFERENCES public."EMPLOYE"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 H   ALTER TABLE ONLY public."EMPLOI_HISTORIQUE" DROP CONSTRAINT fk_employe;
       public       postgres    false    207    208    2758            �
           2606    17114    COMMANDE fk_employe    FK CONSTRAINT     �   ALTER TABLE ONLY public."COMMANDE"
    ADD CONSTRAINT fk_employe FOREIGN KEY (vendeur_id) REFERENCES public."EMPLOYE"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 ?   ALTER TABLE ONLY public."COMMANDE" DROP CONSTRAINT fk_employe;
       public       postgres    false    2758    211    207            �
           2606    17133    CLIENT fk_employe    FK CONSTRAINT     �   ALTER TABLE ONLY public."CLIENT"
    ADD CONSTRAINT fk_employe FOREIGN KEY (gestionnaire_compte_id) REFERENCES public."EMPLOYE"(id);
 =   ALTER TABLE ONLY public."CLIENT" DROP CONSTRAINT fk_employe;
       public       postgres    false    2758    207    210            �
           2606    17054    INVENTAIRE fk_entrepot    FK CONSTRAINT     �   ALTER TABLE ONLY public."INVENTAIRE"
    ADD CONSTRAINT fk_entrepot FOREIGN KEY (entrepot_id) REFERENCES public."ENTREPOT"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 B   ALTER TABLE ONLY public."INVENTAIRE" DROP CONSTRAINT fk_entrepot;
       public       postgres    false    2772    215    217            �
           2606    17059    ENTREPOT fk_localisation    FK CONSTRAINT     �   ALTER TABLE ONLY public."ENTREPOT"
    ADD CONSTRAINT fk_localisation FOREIGN KEY (localisation_id) REFERENCES public."LOCALISATION"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 D   ALTER TABLE ONLY public."ENTREPOT" DROP CONSTRAINT fk_localisation;
       public       postgres    false    2752    217    201            �
           2606    17094    DEPARTEMENT fk_localisation    FK CONSTRAINT     �   ALTER TABLE ONLY public."DEPARTEMENT"
    ADD CONSTRAINT fk_localisation FOREIGN KEY (localisation_id) REFERENCES public."LOCALISATION"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 G   ALTER TABLE ONLY public."DEPARTEMENT" DROP CONSTRAINT fk_localisation;
       public       postgres    false    2752    201    203            �
           2606    17049    INVENTAIRE fk_produit    FK CONSTRAINT     �   ALTER TABLE ONLY public."INVENTAIRE"
    ADD CONSTRAINT fk_produit FOREIGN KEY (produit_id) REFERENCES public."PRODUIT_INFO"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 A   ALTER TABLE ONLY public."INVENTAIRE" DROP CONSTRAINT fk_produit;
       public       postgres    false    215    213    2766            �
           2606    17138    COMMANDE_LIGNE fk_produit    FK CONSTRAINT     �   ALTER TABLE ONLY public."COMMANDE_LIGNE"
    ADD CONSTRAINT fk_produit FOREIGN KEY (produit_id) REFERENCES public."PRODUIT_INFO"(id);
 E   ALTER TABLE ONLY public."COMMANDE_LIGNE" DROP CONSTRAINT fk_produit;
       public       postgres    false    2766    213    214            �
           2606    17104    COMMANDE_LIGNE fk_produit-info    FK CONSTRAINT     �   ALTER TABLE ONLY public."COMMANDE_LIGNE"
    ADD CONSTRAINT "fk_produit-info" FOREIGN KEY (produit_id) REFERENCES public."PRODUIT_INFO"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 L   ALTER TABLE ONLY public."COMMANDE_LIGNE" DROP CONSTRAINT "fk_produit-info";
       public       postgres    false    2766    214    213            �
           2606    17143    INVENTAIRE fk_produit_info    FK CONSTRAINT     �   ALTER TABLE ONLY public."INVENTAIRE"
    ADD CONSTRAINT fk_produit_info FOREIGN KEY (produit_id) REFERENCES public."PRODUIT_INFO"(id);
 F   ALTER TABLE ONLY public."INVENTAIRE" DROP CONSTRAINT fk_produit_info;
       public       postgres    false    215    2766    213            �
           2606    17044    LOCALISATION fk_region    FK CONSTRAINT     �   ALTER TABLE ONLY public."LOCALISATION"
    ADD CONSTRAINT fk_region FOREIGN KEY (region_id) REFERENCES public."REGION"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 B   ALTER TABLE ONLY public."LOCALISATION" DROP CONSTRAINT fk_region;
       public       postgres    false    2750    201    199            �
           2606    17039    REGION fk_secteur    FK CONSTRAINT     �   ALTER TABLE ONLY public."REGION"
    ADD CONSTRAINT fk_secteur FOREIGN KEY (secteur_id) REFERENCES public."SECTEUR"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 =   ALTER TABLE ONLY public."REGION" DROP CONSTRAINT fk_secteur;
       public       postgres    false    2748    197    199            p   :  x��Q9n�0�W�`HX^�ԹJ�4i��)��F��#i�9��r����%9h�u�p�A�ptzN���&�&�"�����-8��8mE'!ބ�~S�6��x���;����J������1k�:�$>irL���d�_@�rF��x��3PDl��+JO���r��/�!���%��lkԡ��1*�?Y}3���:C+d����,K�V��ֹǾ� �)E��[����.��_�,Ɛ��xv�yal���&'��������Jy�7�FQp�۫h$O*J�5	f~Uٝy�`����:��7���� �_�\      q   �   x���K�0����Sx����]ܔWBTPZM�F�ËY	���e�3�$qʹ ��ظ2�È��Nup�
��
�0\��5E[w0Qhh�&!8N
Z��/�z�87qǭ���Y:'�އڇ{�ä��G�C��ٴ�ϸ0�|��P:�h�<!6���Pӛrbo��eA��	c��Zz      t   *   x�3�4�45�3�SN.#tcLct-h��1z\\\ ı�      i   5   x�3���K�/�M,�,,M�4�4�2�Rs�4�4�2�,I-.�442rb���� )
�      k   L   x�3�NM.:��$1�(�����������ˈ���ʲԜ�����"NCS����2�t�L.�Up	�=... p��      n   '   x�3�4202�50�501�L �2�!g�i����� ;g	�      m   �   x�=��
�0���]"�4i{�a��'�%k��f�;�=�,��
����"[�pӺλ�,��$��|e��<�9��601Y���&�p�Á3����N�˘��R�}J�cp�D��@������7-\��Y�q�������:�Lj�c^�̀ƘZ .�      w   K   x�3��/��.I,)-Q020�4�2�tVO-.Q(��T�IT(.HM���I���4�2�H,J����)�K�c���� �g�      u   "   x�3�4�4�2�4�4�2��@�!����� 9�      g   �   x�5�A� ��p
.�)�ֺ����t�tH�4����;,:�Y�����U��|Xa�q����Z��e&��-��>��t�=n6�5(}0�1&�v|0G\8W��ذV<9[=�"��-�-������+S�Ìa�&�6���5��=5�kK&�b��L^g!�-D;�      s   ^  x���;n�0�g��$�SI�>�A�nYT�NXȒ�G�ܦ��ዕN:�@+D�??�Q�F[K:apF�'x�؝M_Vb
Tj�5�'4�rz��F4��;X\j���jh��+gk��ƽQ�»�>rŒ4�����d�#��d+q"��jG��eS:B���r�̥��묄'g��
HC<uZ�[|O���x�&�K�}�"	�:U{��i&{Y��a�I&��w��K��
�1v��,R���gw�!ڮ�i��H���E]y_�ÙÆ�s
��%��eE
�$f���(��{>dT��t����?x&�q諽���G� �N�,�G�-      e   <   x�3���/-K��I�u,,�,I��K�4�2��ON��2S9���9��RKӁR�\1z\\\ ��      c   (   x�3�,NM�2�41-�2�,�/�,�2�,I-.����� �{�     