import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dictionary } from '../const/langs';

export function useDict() {
  const currentLang = useSelector((state) => state.lang.value);

  return function (word) {
    return dictionary[currentLang][word];
  };
}
