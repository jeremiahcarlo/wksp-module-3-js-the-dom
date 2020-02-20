
const mainBox = document.getElementById('main');

const Title = document.createElement('h1');
Title.innerText = 'The best How I Met Your Mother episode (according to fans).';
mainBox.appendChild(Title);
Title.classList.add("heading1")

const paragraph = document.createElement('p');
paragraph.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…'
mainBox.appendChild(paragraph);
paragraph.classList.add("paragraph");

const heading2 = document.createElement('h2')
heading2.innerText = 'The Slap Bet (Season 2, Episode 9)';
mainBox.appendChild(heading2);
heading2.classList.add("heading2"); 

const paragraph2 = document.createElement('p');
paragraph2.innerText = 'IMDB Rating: 9.5'  
mainBox.appendChild(paragraph2);
paragraph2.classList.add("paragraph");

const picture = document.createElement('img');
picture.src = "./images/robin-sparkles.jpg";
mainBox.appendChild(picture);
picture.classList.add("image");

const paragraph3 = document.createElement('p');
paragraph3.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.'
mainBox.appendChild(paragraph3);
paragraph3.classList.add("paragraph");

const paragraph4 = document.createElement('p');
paragraph4.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).'  
mainBox.appendChild(paragraph4); 
paragraph4.classList.add("paragraph");

const source = document.createElement('a');
source.innerText = 'Source';
source.href = "https://google.com"  
mainBox.appendChild(source);
source.classList.add("tag");

link = document.createElement('link');
link.rel = "stylesheet";
link.href = "./styles.css";
document.head.appendChild(link);
