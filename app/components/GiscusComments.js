'use client';
import Giscus from '@giscus/react';
import { useTheme } from '../context/ThemeContext';

export default function GiscusComments({ slug, title }) {
  const { darkMode } = useTheme();

  return (
    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
        Comments
      </h3>
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4">
        <Giscus
          id="comments"
          repo="pepryan/portfolio"
          repoId="R_kgDONSiCqw"
          category="General"
          categoryId="DIC_kwDONSiCq84CrEL8"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme={darkMode ? 'dark' : 'light'}
          lang="en"
          loading="lazy"
        />
      </div>
    </div>
  );
}