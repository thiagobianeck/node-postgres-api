CREATE TABLE IF NOT EXISTS projects( 
    id serial PRIMARY KEY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id serial PRIMARY KEY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectId integer not null,
    constraint fk_tasks_projects foreign key (projectId)
    references projects(id)
);

INSERT INTO projects(name, priority, description, deliverydate)
    VALUES('Make a Web App', 1, 'Using Javascript', '2019-05-12');

INSERT INTO projects(name, priority, description, deliverydate)
    VALUES('Make an App', 1, 'Using Dart', '2019-05-13');

INSERT INTO projects(name, priority, description, deliverydate)
    VALUES('Make an Desktop App', 2, 'Using C++', '2019-05-14');


-- insert tasks data
INSERT INTO tasks(name, done, projectId) VALUES('download VueJs', false, 1);
INSERT INTO tasks(name, done, projectId) VALUES('Create UI Web', false, 1);
INSERT INTO tasks(name, done, projectId) VALUES('Download Flutter', false, 2);
INSERT INTO tasks(name, done, projectId) VALUES('Design UI', false, 2);