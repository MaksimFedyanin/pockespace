const setReduxData = (data) => {
    global.reduxState = Buffer.from(data, 'utf8').toString('base64');
};

export default setReduxData;
