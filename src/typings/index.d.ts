namespace apiData {
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

  type Pokemon = {
    name: string;
    url: string;
  };
}
