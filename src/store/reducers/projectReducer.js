const initState = {
  projects: [
    { id: "1", title: "help me find", content: "blah blah" },
    { id: "2", title: "lorem potasium 2", content: "blah blah 2222" },
    { id: "3", title: "lorem potasium 3", content: "blah blah 333" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
