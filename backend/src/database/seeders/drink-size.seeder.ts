import { Seeder } from 'typeorm-extension';
import { ItemSize } from '../../entities';
import { DataSource } from 'typeorm';

const drinkSizeData = [
    // Nước Dừa (Coconut Water)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 30, itemId: 40 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 32, itemId: 40 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 35, itemId: 40 },

    // Nước Cam (Orange Juice)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 30, itemId: 41 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 32, itemId: 41 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 35, itemId: 41 },

    // Nước Dứa (Pineapple Juice)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 35, itemId: 42 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 37, itemId: 42 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 40, itemId: 42 },

    // Nước Dưa Hấu (Watermelon Juice)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 30, itemId: 43 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 32, itemId: 43 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 35, itemId: 43 },

    // Nước Ép Bưởi (Grapefruit Juice)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 35, itemId: 44 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 37, itemId: 44 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 40, itemId: 44 },

    // Trà Xanh (Green Tea)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 25, itemId: 45 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 27, itemId: 45 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 30, itemId: 45 },

    // Trà Đen (Black Tea)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 25, itemId: 46 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 27, itemId: 46 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 30, itemId: 46 },

    // Trà Thảo Mộc (Herbal Tea)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 30, itemId: 47 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 32, itemId: 47 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 35, itemId: 47 },

    // Coca-Cola
    { size_vi: '330ml', size_en: '330ml', price: 20, itemId: 48 },

    // 7up
    { size_vi: '330ml', size_en: '330ml', price: 20, itemId: 49 },

    // Sinh Tố Bơ (Avocado Smoothie)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 40, itemId: 50 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 42, itemId: 50 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 45, itemId: 50 },

    // Sinh Tố Dứa (Pineapple Smoothie)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 45, itemId: 51 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 47, itemId: 51 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 50, itemId: 51 },

    // Rượu Vang Đỏ (Red Wine)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 150, itemId: 52 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 152, itemId: 52 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 155, itemId: 52 },

    // Rượu Vang Trắng (White Wine)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 150, itemId: 53 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 152, itemId: 53 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 155, itemId: 53 },

    // Bia Heineken (Heineken Beer)
    { size_vi: '250ml', size_en: '250ml', price: 30, itemId: 54 },

    // Bia Larual (Larual Beer)
    { size_vi: '330ml', size_en: '330ml', price: 35, itemId: 55 },

    // Mojito
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 80, itemId: 56 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 82, itemId: 56 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 85, itemId: 56 },

    // Margarita
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 80, itemId: 57 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 82, itemId: 57 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 85, itemId: 57 },

    // Cà Phê Đen (Black Coffee)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Cup', price: 25, itemId: 58 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Cup', price: 27, itemId: 58 },
    { size_vi: 'Ly Lớn', size_en: 'Large Cup', price: 30, itemId: 58 },

    // Cà Phê Sữa (Milk Coffee)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Cup', price: 30, itemId: 59 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Cup', price: 32, itemId: 59 },
    { size_vi: 'Ly Lớn', size_en: 'Large Cup', price: 35, itemId: 59 },

    // Cà Phê Trứng (Egg Coffee)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Cup', price: 40, itemId: 60 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Cup', price: 42, itemId: 60 },
    { size_vi: 'Ly Lớn', size_en: 'Large Cup', price: 45, itemId: 60 },

    // Trà Sữa Truyền Thống (Traditional Milk Tea)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 35, itemId: 61 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 37, itemId: 61 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 40, itemId: 62 },

    // Trà Sữa Socola (Socol Milk Tea)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 40, itemId: 62 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 42, itemId: 62 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 45, itemId: 62 },

    // Trà Sữa Matcha (Matcha Milk Tea)
    { size_vi: 'Ly Nhỏ', size_en: 'Small Glass', price: 45, itemId: 63 },
    { size_vi: 'Ly Vừa', size_en: 'Medium Glass', price: 47, itemId: 63 },
    { size_vi: 'Ly Lớn', size_en: 'Large Glass', price: 50, itemId: 63 },

    // Nước Lọc (Water)
    { size_vi: '355ml', size_en: '355ml', price: 10, itemId: 64 },
];
export default class DrinkSizeSeeder implements Seeder {
    private dataSource: DataSource;

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
    }

    public async run(): Promise<void> {
        const drinkSizeRepo = this.dataSource.getRepository(ItemSize);

        await drinkSizeRepo.save(drinkSizeData);

        console.log('Seed data drink size created');
    }
}
