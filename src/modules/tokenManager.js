// Хранение токенов, чтобы избежать повторных запросов
export const processedTokens = new Set();
export const inProgressTokens = new Set();

// Функция очистки при logout
export const clearProcessedTokens = () => {
  processedTokens.clear();
  inProgressTokens.clear();
};
