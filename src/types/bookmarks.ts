// useBookmarks.ts
import { ref, watchEffect } from 'vue';
import data from '../data/bookmarks.json';

// 定义数据中每个类别的类型
type CategoryType = {
  category_No: string;
  category_icon: string;
  category_name: string;
  items: ItemType[];
};

// 定义数据中items的类型
type ItemType = {
  name: string;
  icon: string;
  href: string;
  description: string;
};

// 使用typeof操作符来获取data的类型
type DataArrayType = typeof data;

export function useBookmarks() {
  // 创建响应式引用，明确类型为DataArrayType
  const jsonData = ref<DataArrayType>(data);

  // 创建一个新的响应式数组来存储 items 数据，类型为ItemType数组
  const itemsArray = ref<ItemType[]>([]);

  watchEffect(() => {
    itemsArray.value = jsonData.value.flatMap(category => category.items);
  });

  const addNewCategory = (newCategory: CategoryType) => {
    jsonData.value.push(newCategory);
    itemsArray.value = jsonData.value.flatMap(category => category.items);
    writeJsonToFile();
  };

  const writeJsonToFile = () => {
    console.log('写入JSON数据到文件：', jsonData.value);
    // 实际环境中的文件写入逻辑
  };

  return { jsonData, itemsArray, addNewCategory };
}