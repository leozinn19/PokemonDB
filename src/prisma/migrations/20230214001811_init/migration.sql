-- CreateTable
CREATE TABLE `Pokemon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `altura` VARCHAR(191) NOT NULL,
    `peso` VARCHAR(191) NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `habilidade` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Pokemon_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
