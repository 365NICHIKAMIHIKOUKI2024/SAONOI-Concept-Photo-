function tweetMessage() {
    const message = "SAONOI 365 Concept Photo \n#SaonoiBNK48 #2024_365NichinoKamihikoukiTH ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}  
