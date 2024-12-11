"use client";
import { DiscussionEmbed } from '@jsdevtools/disqusjs';

export default function DisqusComments({ slug, title }) {
  return (
    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <DiscussionEmbed
        shortname="your-disqus-shortname" // Ganti dengan shortname Disqus Anda
        config={{
          url: `https://yourdomain.com/blog/${slug}`,
          identifier: slug,
          title: title,
          language: 'en_US'
        }}
      />
    </div>
  );
} 