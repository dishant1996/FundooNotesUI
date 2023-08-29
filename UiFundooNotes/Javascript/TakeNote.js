window.onload = function () {
    const Token2 = localStorage.getItem("token")
    console.log(Token2)


    $.ajax({
        url: "http://127.0.0.1:8000/api/notes/getnotes",
        type: "GET",
        headers: {
            "Authorization": `Bearer ${Token2}`,
        },
        success: function (notes) {
            console.log(notes)
            for (let i of notes.notes) {
                console.log(i)
                let getNotes = ` <div class="Show">
                <div class="top">
                    <div id="titleNote">
                        <h3> ${i.title}</h3>

                    </div>
                    <div id="DescNote">
                        <h3>${i.content}</h3>
                    </div>
                </div>
                <div class="IconNotes">
                    <img id="NotesarciveIcon" onclick = "archievesNote(${i.id})"src="../Assets/a/download.png" alt="">
                    <img id="NotesbinIcon" onclick ="deleteNote(${i.id})" src="../Assets/a/bin (1).png" alt="">
                   
                </div>
            </div>
` 
            $("#newNote").append(getNotes)
        }
        }
        });
        }
        // <img id="NotesbinIcon" onclick="delNotes"(${i,id})" src="../Assets/a/bin (1).png" alt="">