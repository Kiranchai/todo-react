import './App.css';

function App() {
  return (
  <div className='menu'>
    <button id="addBtn" onClick={() => addNote()}>New note</button>
    <button id="clearBtn" onClick={() => clearNotes()}>Clear</button>
  </div>
  );
}


function addNote(taskContent = "Task"){
    console.log('hello')
    
    const main = document.getElementById("main");
    
    const note = document.createElement("div");
    note.classList.add("note");
    
    const notesNumber = document.querySelectorAll('.note').length;
    const title = document.createElement("h2");
    title.textContent = "Note " + (notesNumber+1);
    title.classList.add("titles");
    

    const task = document.createElement("span");
    
    task.textContent=taskContent;
    task.classList.add("task");
    task.setAttribute('contenteditable', 'true');


    note.appendChild(title);
    note.appendChild(task);

    main.appendChild(note);
}

function clearNotes(){
    const main = document.getElementById('main');

    while(main.firstChild){
        main.removeChild(main.lastChild);
    }
}


export default App;
