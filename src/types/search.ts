import { ref, computed, onMounted, watchEffect } from 'vue';

export interface Bookmark {
  href: string;
  name: string;
  description: string | null; // 允许 description 为 null
}

const useHomesearch = () => {
  const inputSearchTerm = ref<string>('');
  const searchResults = ref<Bookmark[]>([]);
  const searchCount = ref<number>(0);
  const bookmarks = ref<Bookmark[]>([]);

  const fetchBookmarksFromHTML = async () => {
    // 等待Vue的DOM更新完成
    await new Promise(resolve => requestAnimationFrame(resolve));
    // 执行DOM查询
    const elements = document.querySelectorAll('.bookmark-list');
    bookmarks.value = Array.from(elements).map((el) => {
      const nameEl = el.querySelector('.bookmark-name');
      const descriptionEl = el.querySelector('.bookmark-description');
      const hrefEl = el.querySelector('.bookmark-href');

      // 使用可选链操作符 (?.) 来安全地访问 textContent
      // 如果 nameEl 是 null，name 将是 undefined，然后通过 OR 运算符 (||) 设置默认值为空字符串
      const name = (nameEl?.textContent || '').trim();
      // 同样处理 description 和 href
      const description = (descriptionEl?.textContent || '').trim();
      const href = hrefEl ? hrefEl.getAttribute('href') || '' : '';

      return {
        href,
        name,
        description,
      };
    });
  };

  // 控制搜索结果显示的响应式变量
  const isSearchActive = ref<boolean>(false);

  // 使用计算属性来确定搜索结果的显示样式
  const searchResultsStyle = computed(() => {
    return {
      display: isSearchActive.value ? 'flex' : 'none'
    };
  });

  const updateSearchActive = () => {
    isSearchActive.value = searchCount.value > 0; // 更新显示状态
  };

  const filterBookmarks = () => {
    if (inputSearchTerm.value.trim()) { // 只有输入不为空时才过滤
      const searchTerm = inputSearchTerm.value.toLowerCase();
      searchResults.value = bookmarks.value.filter(bookmark =>
        bookmark.name.toLowerCase().includes(searchTerm) ||
        bookmark.href.toLowerCase().includes(searchTerm) ||
        (bookmark.description?.toLowerCase().includes(searchTerm) || false)
      );
      searchCount.value = searchResults.value.length;
      
      updateSearchActive(); // 更新显示状态
    } else {
      // 输入为空，重置搜索结果和显示状态
      searchResults.value = [];
      searchCount.value = 0;
      updateSearchActive(); // 更新显示状态
    }
  };

  onMounted(async () => {
    await fetchBookmarksFromHTML();
  });

  // 使用watchEffect监听inputSearchTerm的变化
  watchEffect(() => {
    filterBookmarks();
  });

  return {
    inputSearchTerm,
    searchResults,
    searchCount,
    searchResultsStyle,
    fetchBookmarksFromHTML,
    filterBookmarks
  };
};

export default useHomesearch;