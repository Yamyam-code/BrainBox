export interface UserData {
  name: string;
  email: string;
  recents: string[];
  thinks: Think[];
}

export interface Think {
  title: string;
  id: string;
  contents: string;
  date: number;
  hashtag: string[];
}
