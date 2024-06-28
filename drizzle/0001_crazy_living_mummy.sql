ALTER TABLE "account" RENAME TO "accounts";
ALTER TABLE "category" RENAME TO "categories";
ALTER TABLE "pet" RENAME TO "pets";
ALTER TABLE "user" RENAME TO "users";
ALTER TABLE "users" DROP CONSTRAINT "user_email_unique";
ALTER TABLE "users" DROP CONSTRAINT "user_phone_unique";
ALTER TABLE "session" DROP CONSTRAINT "session_userId_user_id_fk";

ALTER TABLE "accounts" DROP CONSTRAINT "account_userId_user_id_fk";

ALTER TABLE "pets" DROP CONSTRAINT "pet_user_id_user_id_fk";

ALTER TABLE "pets" DROP CONSTRAINT "pet_category_category_name_fk";

ALTER TABLE "users" ALTER COLUMN "name" SET DATA TYPE varchar(60);
ALTER TABLE "users" ALTER COLUMN "password_hash" SET NOT NULL;
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE varchar(50);
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pets" ADD CONSTRAINT "pets_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pets" ADD CONSTRAINT "pets_category_categories_name_fk" FOREIGN KEY ("category") REFERENCES "categories"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");
ALTER TABLE "users" ADD CONSTRAINT "users_phone_unique" UNIQUE("phone");