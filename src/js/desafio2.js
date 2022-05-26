$("#form").submit(function(event) {
    event.preventDefault();

    let nome = $("#nome-input").val();
    $("#nome-input").html(nome);

    let email = $("#email-input").val();
    $("#email-input").html(email);

    let data = {
        nome,
        email
    }
    
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let enviado = `<p style=" color: #129612;">${nome} seu e-mail foi cadastrado!!</p>`;

    $("#div-input-button").html(enviado)
})


const updateContdown = () => {
    
    const currentTime = new Date()
    const nextDay = currentTime.getDate() + 1 
    const newDay = new Date(`${currentTime.getMonth()+1} ${nextDay} ${currentTime.getFullYear()} 00:00:00`)
    const difference = newDay - currentTime
    const days = Math.floor(difference / 1000 / 60 /60 / 24) 
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24 
    const minutes = Math.floor(difference / 1000 / 60) % 60   
    const seconds = Math.floor(difference / 1000) % 60   

    $("#hour").html(hours);
    
    $("#minutes").html(minutes);

    $("#seconds").html(seconds);
    
}

$(".buy-button").click(function(){
    $(this).html("Adicionado ao carrinho");
});

$("h1").fadeOut();
$("h1").fadeIn(5000);



setInterval(updateContdown, 1000)