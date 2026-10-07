export type UserMode = 'student' | 'business';

export type GenerationRequest = {
  mode: UserMode;
  contentType: string;
  title: string;
  description: string;
};

export type GenerationResponse = {
  mode: UserMode;
  contentType: string;
  title: string;
  content: string;
};
