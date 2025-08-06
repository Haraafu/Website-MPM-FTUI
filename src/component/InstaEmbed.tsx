import { useEffect } from "react";

export type Team =
  | "sipil"
  | "mesin"
  | "elektro"
  | "metal"
  | "ars"
  | "tekkim"
  | "industri"
  | "pi"
  | "baleg"
  | "komsis"
  | "kolega"
  | "komandan"
  | "kesekjenan";

interface InstaEmbedProps {
  team: Team;
}

const embedMap: Record<Team, string> = {
  sipil: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJCvKi6Bvzk/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  mesin: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJ05rpiBzVG/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  elektro: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJ3cwhcJrJd/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  metal: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJmRsA-pFpi/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  ars: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJGzmI-zJiZ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  tekkim: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DI_fi-7SsWT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  industri: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DI8QO_RPwWl/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  pi: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJ2Azyhzybo/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  kesekjenan: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DMXr1Teyo0n/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  komsis: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DMXqlr7SIkA/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  kolega: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DMXrEIjSd8n/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  komandan: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DMXqFSWSYbl/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
  baleg: `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DMXrb_iy3Kj/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
  `,
};

export default function InstaEmbed({ team }: InstaEmbedProps) {
  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [team]);

  return (
    <div className="insta-embed min-h-[700px]">
      <div dangerouslySetInnerHTML={{ __html: embedMap[team] }} />
    </div>
  );
}