type CreateLibIndex = {
  rules: {
    [k: string]: any;
  };
};
export const createLibIndex = ({ rules }: CreateLibIndex) => ({ rules });
