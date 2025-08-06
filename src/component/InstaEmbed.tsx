import { useEffect } from "react";

export type Fraksi =
  | "sipil"
  | "mesin"
  | "elektro"
  | "metal"
  | "ars"
  | "tekkim"
  | "industri"
  | "pi";

interface InstaEmbedProps {
  fraksi: Fraksi;
}

const embedMap: Record<Fraksi, string> = {
  sipil: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJCvKi6Bvzk/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  `,
  mesin: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJ05rpiBzVG/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  `,
  elektro: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJ3cwhcJrJd/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  `,
  metal: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJmRsA-pFpi/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  `,
  ars: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJGzmI-zJiZ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  `,
  tekkim: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DI_fi-7SsWT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  `,
  industri: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DI8QO_RPwWl/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  `,
  pi: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJ2Azyhzybo/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  `,
};

export default function InstaEmbed({ fraksi }: InstaEmbedProps) {
  useEffect(() => {
    // Reload Instagram embed script when fraksi changes
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [fraksi]);

  return (
    <div
      className="insta-embed w-full max-w-2xl mx-auto scale-125 origin-top"
      style={{
        overflow: "hidden",
      }}
      dangerouslySetInnerHTML={{ __html: embedMap[fraksi] }}
    />
  );
}
