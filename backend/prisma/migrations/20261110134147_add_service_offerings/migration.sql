-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "offerings" TEXT[] DEFAULT ARRAY[]::TEXT[];
