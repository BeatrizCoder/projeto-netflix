/*
  Warnings:

  - The `data_lancamento` column on the `filme` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `filme` DROP COLUMN `data_lancamento`,
    ADD COLUMN `data_lancamento` INTEGER;

-- AlterTable
ALTER TABLE `genero` MODIFY `nome` VARCHAR(191);
