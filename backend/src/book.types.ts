export interface Book {
  id: string;
  title: string;
  author: string;
  synopsis: string;
  genres: string[];
  themes: string[];
  readingPace: 'leve' | 'moderado' | 'intenso';
  pages: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatReply {
  text: string;
  recommendations: Book[];
  profileComplete: boolean;
}
