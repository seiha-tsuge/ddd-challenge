-- CreateTable
CREATE TABLE "Task" (
    "task_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "progress_status" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "category_id" UUID NOT NULL,
    "member_id" UUID NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("task_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Member" (
    "member_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "enrollment_status" TEXT NOT NULL,
    "join_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "team_id" UUID NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("member_id")
);

-- CreateTable
CREATE TABLE "Pair" (
    "pair_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "pair_code" TEXT NOT NULL,
    "pair_name" TEXT NOT NULL,
    "team_id" UUID NOT NULL,

    CONSTRAINT "Pair_pkey" PRIMARY KEY ("pair_id")
);

-- CreateTable
CREATE TABLE "PairMember" (
    "pair_id" UUID NOT NULL,
    "member_id" UUID NOT NULL,

    CONSTRAINT "PairMember_pkey" PRIMARY KEY ("pair_id","member_id")
);

-- CreateTable
CREATE TABLE "Team" (
    "team_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "team_code" TEXT NOT NULL,
    "team_name" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("team_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Member"("member_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pair" ADD CONSTRAINT "Pair_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("team_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PairMember" ADD CONSTRAINT "PairMember_pair_id_fkey" FOREIGN KEY ("pair_id") REFERENCES "Pair"("pair_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PairMember" ADD CONSTRAINT "PairMember_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Member"("member_id") ON DELETE CASCADE ON UPDATE CASCADE;
