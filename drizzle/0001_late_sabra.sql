ALTER TABLE "account" RENAME COLUMN "provider_account_id" TO "providerAccountId";
ALTER TABLE "account" DROP CONSTRAINT "account_provider_provider_account_id";
ALTER TABLE "account" ADD CONSTRAINT "account_provider_providerAccountId" PRIMARY KEY("provider","providerAccountId");