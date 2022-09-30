$('#boton').click(function(){
    $('#lista').remove()
    $(`<ul id="lista"></ul>`).insertBefore('h2')
    $.get('http://localhost:5000/amigos', function(data){
        data.forEach(element => {
            $(`<li>${element.name}</li>`).appendTo('ul')
        });
    })
    $('#amigo').text("")
    $('#success').text('')
})

$('#search').click(function(){
    let input = $('#input')
    $.get(`http://localhost:5000/amigos/${input[0].value}`, function(data){
        $('#amigo').text(data.name)
    })
    input[0].value = ""
})

$('#delete').click(function(){
    let inputDelete = $('#inputDelete')
    $.ajax({
        url: `http://localhost:5000/amigos/${inputDelete[0].value}`,
        type: 'DELETE',
        dataType: 'json',
        success: function(data) {
            $('#success').text(`Amigo borrado con exito`);
        },
    });

    inputDelete[0].value = ""
})