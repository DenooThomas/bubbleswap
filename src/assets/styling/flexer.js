const flexRow = (wrap, justify, align) => `
    display: flex;
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-items: ${align};
`;
export { flexRow };

const flexColumn = (wrap, justify, align) => `
    display: flex;
    flex-direction: column;
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-items: ${align};
`;
export { flexColumn };
