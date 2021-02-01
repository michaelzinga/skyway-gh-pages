import Peer from 'skyway-js';
const peer = new Peer({
    key: 'ebd5349b-10aa-4435-8de0-0b2f303e88d7',
    debug: 3
});

peer.on('open', () => {
    document.getElementById('my-id').textContent = peer.id;
    console.log("peer.id")
});