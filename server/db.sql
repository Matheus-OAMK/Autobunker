
CREATE TABLE services (
  service varchar(200) primary key
);


CREATE TABLE sub_services (
  service varchar(200) not null,
  sub_service varchar(200) not null,
  foreign key (service) references services (service),
  unique (service, sub_service)
);



INSERT INTO services (service)
VALUES ('Jarrujen huolto'),
       ('Perushuolto'),
       ('Ajovalot'),
       ('Rengas palvelut'),
       ('OBD Mittaus'),
       ('Auton pesu');



INSERT INTO sub_services (service, sub_service)
SELECT 'Jarrujen huolto', sub_service
FROM (
  VALUES 
    ('Jarrupalojen vaihto'),
    ('Jarrulevyjen vaihto'),
    ('Jarrunesteen vaihto')
) AS sub_service_values (sub_service);



INSERT INTO sub_services (service, sub_service)
SELECT 'Perushuolto', sub_service
FROM (
  VALUES 
    ('Mootoriöljyn vaihto'),
    ('Öljyn suodattimen vaihto'),
    ('Ilma suodattimien vaihto'),
    ('Jäähdytysnesteen vaihto'),
    ('Sytytyspuolien vaihto'),
    ('Sytytystulppien vaihto')
) AS sub_service_values (sub_service);



INSERT INTO sub_services (service, sub_service)
SELECT 'Ajovalot', sub_service
FROM (
  VALUES 
    ('Ajovalopolttimojen vaihto'),
    ('Lisävalon asennus')
) AS sub_service_values (sub_service);



INSERT INTO sub_services (service, sub_service)
SELECT 'Rengas palvelut', sub_service
FROM (
  VALUES 
    ('Renkaiden vaihto'),
    ('Vanteiden tasapainotus'),
    ('Renkaiden kausisäilytys')
) AS sub_service_values (sub_service);



INSERT INTO sub_services (service, sub_service)
SELECT 'OBD Mittaus', sub_service
FROM (
  VALUES 
    ('Vikakoodijen Luku'),
    ('Vikakoodijen poisto')
) AS sub_service_values (sub_service);



INSERT INTO sub_services (service, sub_service)
SELECT 'Auton pesu', sub_service
FROM (
  VALUES 
    ('Auton pesu ulkoa'),
    ('Auton pesu sisältä')
) AS sub_service_values (sub_service);



