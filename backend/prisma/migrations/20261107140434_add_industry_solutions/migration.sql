-- AlterTable
ALTER TABLE "Industry" ADD COLUMN     "solutions" TEXT[] DEFAULT ARRAY[]::TEXT[];
