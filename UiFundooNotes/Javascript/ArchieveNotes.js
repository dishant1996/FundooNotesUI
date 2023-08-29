function archievesNote(id){
    const Token4 = localStorage.getItem("token")
        $.ajax({
            url: `http://127.0.0.1:8000/api/note/archived/${id}`,
            type: "PUT",
            headers: {
                "Authorization": `Bearer ${Token4}`,
                
              },
              
            // data: noteData,
            success: function (result) {
                alert("Note archieved Successfully")
                console.log(result);
                window.location.reload();
                // let token = result.data;
                // localStorage.setItem('token',token);
                // window.location.href = 'http://127.0.0.1:5500/pages/dashboard.html'
            }
        })
}
