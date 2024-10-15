-- CreateTable
CREATE TABLE "task" (
    "task_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "progress_status" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "category_id" UUID NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("task_id")
);

-- CreateTable
CREATE TABLE "category" (
    "category_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "member" (
    "member_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "enrollment_status" TEXT NOT NULL,
    "join_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "member_pkey" PRIMARY KEY ("member_id")
);

-- CreateTable
CREATE TABLE "pair" (
    "pair_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "pair_code" TEXT NOT NULL,
    "pair_name" TEXT NOT NULL,
    "team_id" UUID NOT NULL,

    CONSTRAINT "pair_pkey" PRIMARY KEY ("pair_id")
);

-- CreateTable
CREATE TABLE "team" (
    "team_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "team_code" TEXT NOT NULL,
    "team_name" TEXT NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("team_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "member_email_key" ON "member"("email");

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
