export interface ApiResponseEvent {
  id: number;
  title: string;
  description?: string;
  address?: string;
  imageUrl?: string;
  latitude: number;
  longitude: number;
  isOwner: boolean;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export interface Props {
  events: ApiResponseEvent[];
  getEvents: () => any;
  navigation: any;
  logout: () => any;
  loading: boolean;
}
