const collapseVariants = {
  open: { height: "auto",},
  closed: {
    height: 0,
    transition: {
      duration: .2,
    }
  },
};

const hoverVariants = {
  hover: {
    //boxShadow: "2px 5px 5px #888888",
    opacity: .7,
    //scale: 1.025,
  }
};

export { collapseVariants, hoverVariants };
