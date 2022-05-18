if (process.env.npm_execpath.indexOf('yarn') > -1) {
    console.error('Use npm instead of yarn');
    process.exit(1);
}