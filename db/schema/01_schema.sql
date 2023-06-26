DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE "users" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar(255),
  "username" varchar(255),
  "password" varchar(255)
);

CREATE TABLE "categories" (
  "id" serial PRIMARY KEY NOT NULL,
  "category_name" varchar(255)
);

CREATE TABLE "tasks" (
  "id" serial PRIMARY KEY NOT NULL,
  "task_description" text,
  "user_id" integer,
  "category_id" integer,
  "due_date" TIMESTAMPTZ DEFAULT Now(),
  "status" boolean DEFAULT false
);

ALTER TABLE "tasks" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "tasks" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE CASCADE;
