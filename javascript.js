// Pobieranie elementów HTML
var chat1Area = document.querySelector('.chat1_area');
var chat1TextArea = document.querySelector('.chat1_area');
var alert1 = document.querySelector('.alert1');
var send1 = document.querySelector('#send1');

var chat2Area = document.querySelector('.chat2_area');
var chat2TextArea = document.querySelector('.chat2_area');
var alert2 = document.querySelector('.alert2');
var send2 = document.querySelector('#send2');

// Ukrywanie spanów z alertami na początku
alert1.style.display = 'none';
alert2.style.display = 'none';

// Dodawanie nasłuchiwacza na zmianę zawartości textarea chat1_area
chat1Area.addEventListener('input', function() {
    if (chat1Area.value !== '' && send1.clicked) {
        alert1.style.display = 'none';
        chat1TextArea.style.borderColor = 'rgb(0, 174, 255)'; // Resetowanie koloru ramki
    }
});

// Dodawanie nasłuchiwacza na kliknięcie przycisku send1
send1.addEventListener('click', function() {
    send1.clicked = true;
    if (chat1Area.value === '') {
        alert1.style.display = 'block';
        chat1TextArea.style.borderColor = 'red'; // Zmiana koloru ramki na czerwony
    } else {
        alert1.style.display = 'none';
        chat1TextArea.style.borderColor = 'rgb(0, 174, 255)'; // Resetowanie koloru ramki
    }
});

// // Dodawanie nasłuchiwacza na zmianę zawartości textarea chat2_area
// chat2Area.addEventListener('input', function() {
//     if (chat2Area.value === '' && !send2.clicked) {
//         alert2.style.display = 'block';
//         chat2TextArea.style.borderColor = 'red'; // Zmiana koloru ramki na czerwony
//     } else {
//         alert2.style.display = 'none';
//         chat2TextArea.style.borderColor = 'rgb(0, 174, 255)'; // Resetowanie koloru ramki
//     }
// });

// Dodawanie nasłuchiwacza na zmianę zawartości textarea chat2_area
chat2Area.addEventListener('input', function() {
    if (chat2Area.value !== '' && send2.clicked) {
        alert2.style.display = 'none';
        chat2TextArea.style.borderColor = 'rgb(0, 174, 255)'; // Resetowanie koloru ramki
    }
});

// Dodawanie nasłuchiwacza na kliknięcie przycisku send2
send2.addEventListener('click', function() {
    send2.clicked = true;
    if (chat2Area.value === '') {
        alert2.style.display = 'block';
        chat2TextArea.style.borderColor = 'red'; // Zmiana koloru ramki na czerwony
    } else {
        alert2.style.display = 'none';
        chat2TextArea.style.borderColor = 'rgb(0, 174, 255)'; // Resetowanie koloru ramki
    }
});

// Pobranie referencji do textarea i przycisków
var person1TextArea = document.getElementById('person1');
var person2TextArea = document.getElementById('person2');
var send1Button = document.getElementById('send1');
var send2Button = document.getElementById('send2');
var chatContainer = document.getElementById('chat-container');

// Obsługa zdarzenia kliknięcia przycisku "WYŚLIJ" dla osoby 1
send1Button.addEventListener('click', function() {
    var message = person1TextArea.value; // Pobranie tekstu z textarea
    if (message !== '') { // Sprawdzenie, czy wiadomość nie jest pusta
        var chatBubbleLeft = document.createElement('div'); // Tworzenie nowego diva
        chatBubbleLeft.className = 'chat-bubble chat-bubble-left'; // Dodanie klasy chat-bubble-left
        chatBubbleLeft.textContent = message; // Ustawienie tekstu wiadomości jako zawartość diva
        chatContainer.appendChild(chatBubbleLeft); // Dodanie diva do kontenera na wiadomości
        chatContainer.scrollTop = chatContainer.scrollHeight; // Przewijanie na dół
        person1TextArea.value = ''; // Wyczyszczenie textarea
    }
});

// Obsługa zdarzenia kliknięcia przycisku "WYŚLIJ" dla osoby 2
send2Button.addEventListener('click', function() {
    var message = person2TextArea.value; // Pobranie tekstu z textarea
    if (message !== '') { // Sprawdzenie, czy wiadomość nie jest pusta
        var chatBubbleRight = document.createElement('div'); // Tworzenie nowego diva
        chatBubbleRight.className = 'chat-bubble chat-bubble-right'; // Dodanie klasy chat-bubble-right
        chatBubbleRight.textContent = message; // Ustawienie tekstu wiadomości jako zawartość diva
        chatContainer.appendChild(chatBubbleRight); // Dodanie diva do kontenera na wiadomości
        chatContainer.scrollTop = chatContainer.scrollHeight; // Przewijanie na dół
        person2TextArea.value = ''; // Wyczyszczenie textarea
    }
});

$(".emoji").on("click", function() {
    var textarea = $(this).siblings("textarea");
    var currentVal = textarea.val();
    var emoticon = $(this).html();
    textarea.val(currentVal + "" + emoticon);
});