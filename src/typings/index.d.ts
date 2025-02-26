type Pokemons = {
  data: {
    count: Number;
    next: string;
    previous: string | null;
    results: {
      name: string;
      url: string;
    }[];
  };
  success: boolean;
};
