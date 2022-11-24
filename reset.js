function reset() {
    // Delete old file if it exists
    if (fs.existsSync(distPath)) {
    }
    // And start the inquirer again
    createManager();

}

module.exports = reset;