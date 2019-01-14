import blackmirror from './Images/Black Mirror.png';
import breakingbad from './Images/Breaking Bad.jpg';
import deathnote from './Images/Death Note.jpg';
import gameofthrones from './Images/Game of Thrones.jpg';
import thewalkingdead from './Images/The walking dead.jpg';
import thewire from './Images/The Wire.png';

export default function getGallery() {
    return [
        { id: 'black-mirror', name: 'Black Mirror', logo: blackmirror },
        { id: 'breaking-bad', name: 'Breaking Bad', logo: breakingbad },
        { id: 'death-note', name: 'Death Note', logo: deathnote },
        { id: 'game-of-thrones', name: 'Game of Thrones', logo: gameofthrones },
        { id: 'the-walking-dead', name: 'The Walking Dead', logo: thewalkingdead },
        { id: 'the-wire', name: 'The Wire', logo: thewire },
    ];
}