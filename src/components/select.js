import { langs } from '../const/langs';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../store/langslice';

export const SelectLang = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeLang(e.target.value));
    console.log(e.target.value);
  };

  return (
    <select onChange={onChange}>
      {Object.values(langs).map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
