const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "Some Value",
          background: "white",
          initial: "white",
        },
      ],
      planets: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getPlanets: () => {
        fetch("https://swapi.dev/api/planets")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ planets: data.results });
          });
      },

      getTodos: () => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/sombra")
          .then((resp) => resp.json())
          .then((data) => setStore({ demo: data }));
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
