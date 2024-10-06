-- CreateTable
CREATE TABLE "Court" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sport_type" TEXT[],

    CONSTRAINT "Court_pkey" PRIMARY KEY ("id")
);
