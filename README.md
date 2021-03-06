# Node Notes

This is a notes app, purely written for node. There is no web front-end, it is executed in the terminal.

## Getting Started

To get started simply clone the repo. Make sure you have node installed on your machine. Then run:
```
npm install
```
This will install all the necessary node modules locally.

In your terminal navigate to the folder where you cloned the repo. Here you can use following commands to work with the notes:

### Add a note
```
node app.js add --title="<your title here>" --body="Provide note body here"
```

### List all available notes
```
node app.js list 
```

### Read a specific note
```
node app.js read --title="<provide note title here>"
```

### Delete a specific note
```
node app.js remove --title="<provide note title here>"
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details