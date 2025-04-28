import { useEffect } from 'react';

function Title({ title }) {
  useEffect(() => {
    document.title = `Kasa | ${title}`;
  }, [title]);

  return null;
}

export default Title;
