// prisma/seeders/categorySeed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedCategories() {
  try {
 
    await prisma.category.createMany({
      data: [
        { description: 'Informática' },
        { description: 'Celulares' },
        { description: 'Beleza e Perfumaria' },
        { description: 'Mercado' },
        { description: 'Livros e Papelaria' },
        { description: 'Brinquedos' },
        { description: 'Moda' },
        { description: 'Bebê' },
        { description: 'Games' },
      ],
    });

    console.log('Dados de categorias foram semeados com sucesso.');
  } catch (error) {
    console.error('Erro ao semear dados de categorias:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedCategories();
