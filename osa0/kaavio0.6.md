```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: the JavaScript file
    deactivate server 
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
       

    Note right of browser: The browser executes the callback function that renders the notes 


