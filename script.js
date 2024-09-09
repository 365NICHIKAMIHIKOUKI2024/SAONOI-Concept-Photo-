function tweetMessage() {
    const message = "Saonoi 365 Concept Photo \n#SaonoiBNK48BNK48 #2024_365NichinoKamihikoukiTH ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}  
