CREATE DATABASE caamto
    WITH
    OWNER = baguma
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE hospitallist(
    hospt_id SERIAL PRIMARY KEY NOT NULL,
    hospt_name VARCHAR(50) NOT NULL,
    dates TIMESTAMP NOT NULL
);

CREATE TABLE alerts(
    alert_id SERIAL PRIMARY KEY NOT NULL,
    alert_message VARCHAR(125) NOT NULL,
    feedback VARCHAR(125),
    hospt_id INT REFERENCES hospital_list(hospt_id) ON DELETE RESTRICT
);

alter table hospital_list add  alert_id INT REFERENCES alerts(alert_id) ON DELETE CASCADE;

CREATE TABLE staff (
    staff_id SERIAL PRIMARY KEY NOT NULL,
    staff_name VARCHAR(50) NOT NULL
);

alter table hospitallist add staff_id INT REFERENCES staff(staff_id) ON DELETE CASCADE NULL;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE mtos(
    mto_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
    patient_Name VARCHAR(125) NOT NULL,
    invoice VARCHAR(50) DEFAULT NULL,
    hospital VARCHAR(50) NOT NULL,
    dates TIMESTAMP NOT NULL,
    staff_name VARCHAR(50) NOT NULL
);

alter table hospitallist add mto UUID REFERENCES mtos(mto_id) ON DELETE CASCADE;

CREATE TABLE reports (
    report_id SERIAL PRIMARY KEY NOT NULL,
    report VARCHAR(200) NOT NULL,
    staff_id INT REFERENCES staff(staff_id) NOT NULL
);