
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
       ('Rengaspalvelut'),
       ('OBD Mittaus'),
       ('Autopesu');



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
    ('Moottoriöljyn vaihto'),
    ('Öljynsuodattimien vaihto'),
    ('Ilmansuodattimien vaihto'),
    ('Jäähdytysnesteen vaihto'),
    ('Sytytyspuolien vaihto'),
    ('Sytytystulppien vaihto')
) AS sub_service_values (sub_service);



INSERT INTO sub_services (service, sub_service)
SELECT 'Ajovalot', sub_service
FROM (
  VALUES 
    ('Ajovalopolttimoiden vaihto'),
    ('Lisävalon asennus')
) AS sub_service_values (sub_service);



INSERT INTO sub_services (service, sub_service)
SELECT 'Rengaspalvelut', sub_service
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
    ('Vikakoodien Luku'),
    ('Vikakoodien poisto')
) AS sub_service_values (sub_service);



INSERT INTO sub_services (service, sub_service)
SELECT 'Autopesu', sub_service
FROM (
  VALUES 
    ('Autopesu ulkoa'),
    ('Autopesu sisältä')
) AS sub_service_values (sub_service);



