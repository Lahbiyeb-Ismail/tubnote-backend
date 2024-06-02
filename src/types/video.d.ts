export interface YouTubeVideoItem {
  snippet?: {
    title: string;
    description: string;
    publishedAt: string;
    channelTitle: string;
  };
  player?: {
    embedHtml: string;
  };
  statistics?: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface YouTubeAPIResponse {
  items: YouTubeVideoItem[];
}

export type VideoPart = 'player' | 'statistics' | 'snippet';